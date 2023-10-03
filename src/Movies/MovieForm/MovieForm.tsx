import { ReactElement } from 'react';
import { AddNewMovieModel, MovieModel } from '../models';
import { Button, DatePicker, Input, Select, TextArea } from '../../components';
import styles from './MovieForm.module.css';

interface MovieFormProps {
	movie?: MovieModel;
	onFormSubmit?: (formValue: MovieModel) => void;
}

const genres = [
	{ label: 'All', value: 'All' }, { label: 'Documentary', value: 'Documentary' },
	{ label: 'Comedy', value: 'Comedy' },
	{ label: 'Horror', value: 'Horror' },
	{ label: 'Crime', value: 'Crime' }
];

export function MovieForm({ movie, onFormSubmit }: MovieFormProps): ReactElement {
	const emptyMovie: AddNewMovieModel = {
		title: '',
		release_date: '',
		poster_path: '',
		vote_average: 0,
		genres: [],
		runtime: 0,
		overview: ''
	};

	const normalizedMovie = movie ? movie : emptyMovie;
	return <form className={styles.form} onSubmit={(event) => {
		event.preventDefault();
		onFormSubmit?.(Object.fromEntries(new FormData((event.target as HTMLFormElement))) as unknown as MovieModel);
	}}>
		<div className={styles.formGrid}>
			<Input label={'Title'} name={'title'} value={normalizedMovie.title}/>
			<DatePicker label={'Release Date'} name={'release_date'} value={normalizedMovie.release_date}/>
			<Input label={'Movie Url'} name={'poster_path'} value={normalizedMovie.poster_path}/>
			<Input label={'Rating'} name={'vote_average'} value={normalizedMovie.vote_average} type={'number'}/>
			<Select options={genres} label={'Genre'} name={'genre'} multiple={true} value={normalizedMovie.genres}/>
			<Input label={'Runtime'} name={'runtime'} value={normalizedMovie.runtime}/>
		</div>
		<TextArea className={styles.textArea} label={'Overview'} name={'overview'} value={normalizedMovie.overview}/>
		<div className={styles.actionButtons}>
			<Button type={'reset'}>Reset</Button>
			<Button primary type={'submit'}>Submit</Button>
		</div>
	</form>;
}
