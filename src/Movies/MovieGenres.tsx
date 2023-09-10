import { ReactElement } from 'react';
import styles from './MovieGenres.module.css';

interface MovieGenresProps {
	genres: string[]
}

export function MovieGenres({ genres }: MovieGenresProps): ReactElement {
	return <p className={styles.movieGenres}>
		{genres.join(',')}
	</p>
}
