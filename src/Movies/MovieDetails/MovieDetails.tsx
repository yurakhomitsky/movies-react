import { MovieModel } from '../models/movie.model.ts';
import { ReactElement } from 'react';
import styles from './MovieDetails.module.css';
import { MovieGenres } from '../MovieGenres/MovieGenres.tsx';

interface MovieDetailsProps {
	movie: MovieModel;
}

export function MovieDetails({ movie }: MovieDetailsProps): ReactElement {
	return <section data-testid="movie-details" className={styles.movieDetailsContainer}>
		<img className={styles.movieImage} src={movie.poster_path} alt={movie.title}></img>
		<div className={styles.movieDetails}>
			<div className={styles.movieTitle}>
				<h2>{movie.title}</h2>
				<span>{movie.vote_average}</span>
			</div>

			<MovieGenres genres={movie.genres}></MovieGenres>
			<div className={styles.movieReleaseAndDuration}>
				<span>{movie.release_date}</span>
				<span>{movie.runtime}</span>
			</div>
			<p className={styles.movieDescription}>{movie.overview}</p>
		</div>
	</section>;
}
