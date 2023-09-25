import { ReactElement } from 'react';
import { AddNewMovieModel } from '../models';
import { Button, DatePicker, Input, Select, TextArea } from '../../components';
import styles from './MovieForm.module.css';

interface MovieFormProps<T extends AddNewMovieModel> {
	movie: T;
	onFormSubmit?: (formValue: T) => void;
}

const genres = [
	{ label: 'All', value: 'All' }, { label: 'Documentary', value: 'Documentary' },
	{ label: 'Comedy', value: 'Comedy' },
	{ label: 'Horror', value: 'Horror' },
	{ label: 'Crime', value: 'Crime' }
];

export function MovieForm<T extends AddNewMovieModel>({ movie, onFormSubmit }: MovieFormProps<T>): ReactElement {
	return <form className={styles.form} onSubmit={(event) => {
		event.preventDefault();
		onFormSubmit?.(Object.fromEntries(new FormData((event.target as HTMLFormElement))) as unknown as T);
	}}>
		<div className={styles.formGrid}>
			<Input label={'Title'} name={'name'} value={movie.name}/>
			<DatePicker label={'Release Date'} name={'releaseYear'} value={movie.releaseYear}/>
			<Input label={'Movie Url'} name={'movieUrl'} value={movie.movieUrl}/>
			<Input label={'Rating'} name={'rating'} value={movie.rating} type={'number'}/>
			<Select options={genres} label={'Genre'} name={'genre'} multiple={true} value={movie.genres}/>
			<Input label={'Runtime'} name={'duration'} value={movie.duration}/>
		</div>
		<TextArea className={styles.textArea} label={'Overview'} name={'description'} value={movie.description}/>
		<div className={styles.actionButtons}>
			<Button type={'reset'}>Reset</Button>
			<Button primary type={'submit'}>Submit</Button>
		</div>
	</form>;
}
