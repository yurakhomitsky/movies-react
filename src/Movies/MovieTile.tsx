import { ReactElement } from 'react';
import styles from './MovieTile.module.css';
import { MovieModel } from './Movie.model.ts';

interface MovieTileProps {
	movie: MovieModel;
	onClick?: (movie: MovieModel) => void;
}

export function MovieTile({ movie, onClick }: MovieTileProps): ReactElement {
	return <div className={styles.movieTile} onClick={() => onClick?.(movie)}>
		<img className={styles.movieImage} src={movie.image} alt={movie.name}></img>
		<div className={styles.movieTitle}>
			<span className={styles.movieName}>{movie.name}</span>
			<span className={styles.movieReleaseYear}>{movie.releaseYear}</span>
		</div>
		<p className={styles.movieGenres}>
			{movie.genres.join(',')}
		</p>
	</div>;
}
