import { ReactElement } from 'react';
import styles from './MovieTile.module.css';
import { MovieModel } from './movie.model.ts';
import { MovieGenres } from './MovieGenres.tsx';

interface MovieTileProps {
	movie: MovieModel;
	onClick: (movie: MovieModel) => void;
}

export function MovieTile({ movie, onClick }: MovieTileProps): ReactElement {
	return <div className={styles.movieTile} onClick={() => onClick(movie)}>
		<img className={styles.movieImage} src={movie.image} alt={movie.name}></img>
		<div className={styles.movieTitle}>
			<h2 className={styles.movieName}>{movie.name}</h2>
			<span className={styles.movieReleaseYear}>{movie.releaseYear}</span>
		</div>
		<MovieGenres genres={movie.genres}></MovieGenres>
	</div>;
}
