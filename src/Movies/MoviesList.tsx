import { MovieModel } from './Movie.model.ts';
import styles from './MoviesList.module.css';
import { ReactElement } from 'react';
import { MovieTile } from './MovieTile.tsx';

interface MoviesListProps {
	movies: MovieModel[]
}

export function MoviesList({ movies }: MoviesListProps): ReactElement {
	return <div className={styles.listGrid}>
		{movies.map((movie) => {
			return <MovieTile movie={movie}></MovieTile>
		})}
	</div>
}

