import { MovieModel } from '../models';
import styles from './MoviesList.module.css';
import { ReactElement, useCallback, useState } from 'react';
import { MovieTile } from '../MovieTile/MovieTile.tsx';
import { Button, ContextMenu, Dialog } from '../../components';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

interface MoviesListProps {
	movies: MovieModel[];
	onMovieDelete?: (movie: MovieModel) => void
}


export function MoviesList({ movies = [], onMovieDelete }: MoviesListProps): ReactElement {
	const [dialogMode, setDialogMode] = useState<'delete' | null>(null);
	const [searchParams] = useSearchParams();
	const preservedParams = searchParams.toString();
	const navigate = useNavigate();


	const contextMenuPerMovie = useCallback(
		(movie: MovieModel) => {
			return [
				{
					label: 'Edit',
					action: () => {
						navigate({
							pathname: `/${movie.id}/edit`, search: preservedParams
						}, { state: { movie } });
					}
				},
				{
					label: 'Delete',
					action: () => {
						setDialogMode('delete');
					}
				}
			];
		},
		[navigate]
	);

	const dialogMapMode = {
		['delete']: (movie: MovieModel) => {
			return <Dialog title={'Delete Movie'} onClose={() => {
				setDialogMode(null);
			}}>
				<>
					<p>Are you sure want to delete this Movie?</p>
					<Button primary onClick={() => {
						onMovieDelete?.(movie);
						setDialogMode(null)
					}}>Confirm</Button>
				</>
			</Dialog>;
		}
	};

	return <div className={styles.listGrid}>
		{movies.map((movie) => {
			return <div data-testid={movie.title} className={styles.movieListItem} key={movie.id}>
				<NavLink to={{ pathname: movie.id.toString(), search: searchParams.toString() }}>
					<MovieTile movie={movie}/>
				</NavLink>
				<ContextMenu items={contextMenuPerMovie(movie)}/>
				{dialogMode && dialogMapMode[dialogMode](movie)}
			</div>;
		})}
	</div>;
}

