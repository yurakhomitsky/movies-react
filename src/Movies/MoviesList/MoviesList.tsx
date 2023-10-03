import { MovieModel } from '../models';
import styles from './MoviesList.module.css';
import { ReactElement, useState } from 'react';
import { MovieTile } from '../MovieTile/MovieTile.tsx';
import { Button, ContextMenu, Dialog } from '../../components';
import { MovieForm } from '../MovieForm/MovieForm.tsx';

interface MoviesListProps {
	movies: MovieModel[];
	onMovieClick: (movie: MovieModel) => void;
}


export function MoviesList({ movies = [], onMovieClick }: MoviesListProps): ReactElement {
	const [dialogMode, setDialogMode] = useState<'edit' | 'delete' | null>(null);

	const contextMenuItems = [
		{
			label: 'Edit', action: () => {
				setDialogMode('edit');
			}
		},
		{
			label: 'Delete', action: () => {
				setDialogMode('delete');
			}
		}];

	const dialogMapMode = {
		['edit']: (movieDetails: MovieModel) => {
			return <Dialog width={'60rem'} height={'40rem'} title={'Edit Movie'} onClose={() => {
				setDialogMode(null);
			}}>
				<MovieForm movie={movieDetails}></MovieForm>
			</Dialog>;
		},
		['delete']: () => {
			return <Dialog title={'Delete Movie'} onClose={() => {
				setDialogMode(null);
			}}>
				<>
					<p>Are you sure want to delete this Movie?</p>
					<Button primary>Confirm</Button>
				</>
			</Dialog>;
		}
	};

	return <div className={styles.listGrid}>
		{movies.map((movie) => {
			return <div className={styles.movieListItem} key={movie.id}>
				<MovieTile movie={movie} onClick={onMovieClick}/>
				<ContextMenu items={contextMenuItems}/>
				{dialogMode && dialogMapMode[dialogMode](movie)}

			</div>;
		})}
	</div>;
}

