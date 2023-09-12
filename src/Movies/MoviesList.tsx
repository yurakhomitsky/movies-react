import { MovieModel } from './movie.model.ts';
import styles from './MoviesList.module.css';
import { ReactElement } from 'react';
import { MovieTile } from './MovieTile.tsx';
import { ContextMenu } from '../components';

interface MoviesListProps {
	movies: MovieModel[];
	onMovieClick: (movie: MovieModel) => void
}

export function MoviesList({ movies, onMovieClick }: MoviesListProps): ReactElement {
	const contextMenuItems = [
		{ label: 'Edit', action: () => {} },
		{ label: 'Delete', action: () => {} }]

	return <div className={styles.listGrid}>
		{movies.map((movie, index) => {
			return <ContextMenu key={index}  items={contextMenuItems}>
				<MovieTile movie={movie} onClick={onMovieClick}></MovieTile>
			</ContextMenu>
		})}
	</div>
}

