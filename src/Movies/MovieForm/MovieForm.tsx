'use client'
import { ReactElement } from 'react';
import { MovieFormModel } from '../models';
import { Button, DatePicker, Input, Select, TextArea } from '../../components';
import styles from './MovieForm.module.css';
import { Controller, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';

interface MovieFormProps {
	movie?: MovieFormModel;
	onFormSubmit?: (formValue: MovieFormModel) => void;
}


const genres = [
	{ label: 'All', value: 'All' }, { label: 'Documentary', value: 'Documentary' },
	{ label: 'Comedy', value: 'Comedy' },
	{ label: 'Horror', value: 'Horror' },
	{ label: 'Crime', value: 'Crime' }
];

const emptyMovie: MovieFormModel = {
	title: '',
	release_date: '',
	poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
	vote_average: 0,
	genres: [],
	runtime: 0,
	overview: ''
};

export function MovieForm({ movie, onFormSubmit }: MovieFormProps): ReactElement {
	const defaultValues = movie ? movie : emptyMovie;
	const { control, handleSubmit, formState: { isValid, isSubmitted, isDirty } } = useForm<MovieFormModel>({ defaultValues });

	const onSubmit: SubmitHandler<MovieFormModel> = (data: MovieFormModel) => {
		console.log('submit', data)
		onFormSubmit?.(data);
	};

	const rules: Record<keyof MovieFormModel, Omit<RegisterOptions<MovieFormModel, keyof MovieFormModel>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>>  = {
		title: {
			required: true
		},
		release_date: {
			required: true
		},
		poster_path: {
			required: true
		},
		genres: {
			required: true
		},
		runtime: {
			required: true,
		},
		vote_average: {
			required: true
		},
		overview: {
			required: true
		}
	}

	return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
		<div className={styles.formGrid}>
			<Controller
				control={control}
				name="title"
				rules={rules.title}
				render={({ field }) => (
					<Input
						data-testid="form-field-title"
						label={'Title'}
						{...field}
					/>
				)}
			/>
			<Controller
				control={control}
				name="release_date"
				rules={rules.release_date}
				render={({ field }) => (
					<DatePicker data-testid="form-field-release-date" label={'Release Date'} {...field}/>
				)}
			/>
			<Controller
				control={control}
				name="poster_path"
				rules={rules.poster_path}
				render={({ field }) => (
					<Input label={'Movie Url'} {...field}/>
				)}
			/>

			<Controller
				control={control}
				rules={rules.vote_average}
				name="vote_average"
				render={({ field }) => (
					<Input data-testid="form-field-vote" label={'Rating'} type={'number'} {...field} />

				)}
			/>

			<Controller
				control={control}
				name="genres"
				rules={rules.genres}
				render={({ field }) => {
					return <Select data-testid="form-field-genres" options={genres} label={'Genre'} multiple={true} {...field} onChange={(e) => {
						const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
						field.onChange(selectedOptions);
					}} />
				}}
			/>

			<Controller
				control={control}
				name="runtime"
				rules={rules.runtime}
				render={({ field }) => (
					<Input data-testid="form-field-runtime" label={'Runtime'} type={'number'} {...field}/>

				)}
			/>
		</div>
		<Controller
			control={control}
			name="overview"
			rules={rules.overview}
			render={({ field }) => (
				<TextArea data-testid="form-field-overview" className={styles.textArea} label={'Overview'} {...field}/>
			)}
		/>
		<div className={styles.actionButtons}>
			<Button type={'reset'}>Reset</Button>
			<Button primary type={'submit'}>Submit</Button>
		</div>
		<p>{ !isValid && isSubmitted && isDirty && 'Form is invalid. Please fill all required fields'}</p>
	</form>;
}
