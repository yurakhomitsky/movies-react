import { MovieModel } from '../models';
import styles from './MoviesList.module.css';
import { ReactElement } from 'react';
import { MovieTile } from '../MovieTile/MovieTile.tsx';
import Link from 'next/link';

interface MoviesListProps {
	movies: MovieModel[];
	onMovieDelete?: (movie: MovieModel) => void
}


export function MoviesList({ movies = [] }: MoviesListProps): ReactElement {

	return <div className={styles.listGrid}>
		{movies.map((movie) => {
			return <div data-testid={movie.title} className={styles.movieListItem} key={movie.id}>
				<Link href={{ pathname: movie.id.toString() }} replace>
					<MovieTile movie={movie}/>
				</Link>
			</div>;
		})}
	</div>;
}

