import { ReactElement } from 'react';
import styles from './MovieTile.module.css';
import { MovieModel } from '../models';
import { MovieGenres } from '../MovieGenres/MovieGenres.tsx';

interface MovieTileProps {
	movie: MovieModel;
}

export function MovieTile({ movie }: MovieTileProps): ReactElement {
	return <div data-testid="movie-item" className={styles.movieTile}>
		<img className={styles.movieImage} src={movie.poster_path} alt={movie.title}></img>
		<div className={styles.movieTitle}>
			<h2 className={styles.movieName}>{movie.title}</h2>
			<span className={styles.movieReleaseYear}>{movie.release_date}</span>
		</div>
		<MovieGenres genres={movie.genres}></MovieGenres>
	</div>;
}
