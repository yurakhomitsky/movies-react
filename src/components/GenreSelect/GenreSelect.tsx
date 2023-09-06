import { ReactElement } from 'react';
import styles from './GenreSelect.module.css';

export interface Props {
	selectedGenre: string | null;
	genres: string[];
	onSelect: (genre: string) => void;
}

export function GenreSelect({ selectedGenre, genres, onSelect }: Props): ReactElement {
	return <ul className={styles.genreList}>
		{genres.map((genre: string, index: number) => {
				return <li key={index}>
					<button data-testid="genre-select-button" className={selectedGenre === genre ? styles.active : ''} type="button" onClick={() => {
						onSelect(genre);
					}}>
						{genre}
					</button>
				</li>;
			}
		)}
	</ul>;
}
