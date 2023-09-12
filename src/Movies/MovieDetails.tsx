import { MovieModel } from './movie.model.ts';
import { ReactElement } from 'react';
import styles from './MovieDetails.module.css';
import { MovieGenres } from './MovieGenres.tsx';

interface MovieDetailsProps {
	movie: MovieModel;
}

export function MovieDetails({ movie }: MovieDetailsProps): ReactElement {
	return <section className={styles.movieDetailsContainer}>
		<img src={movie.image} alt={movie.name}></img>
		<div className={styles.movieDetails}>
			<div className={styles.movieTitle}>
				<h2>{movie.name}</h2>
				<span>{movie.rating}</span>
			</div>

			<MovieGenres genres={movie.genres}></MovieGenres>
			<div className={styles.movieReleaseAndDuration}>
				<span>{movie.releaseYear}</span>
				<span>{movie.duration}</span>
			</div>
			<p className={styles.movieDescription}>{movie.description}</p>
		</div>
	</section>;
}
