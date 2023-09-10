import { MovieModel } from './movie.model.ts';
import styles from './MoviesList.module.css';
import { ReactElement } from 'react';
import { MovieTile } from './MovieTile.tsx';

interface MoviesListProps {
	movies: MovieModel[];
	onMovieClick: (movie: MovieModel) => void
}

export function MoviesList({ movies, onMovieClick }: MoviesListProps): ReactElement {
	return <div className={styles.listGrid}>
		{movies.map((movie) => {
			return <MovieTile movie={movie} onClick={onMovieClick}></MovieTile>
		})}
	</div>
}

