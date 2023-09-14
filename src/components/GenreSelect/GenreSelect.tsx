import { ReactElement } from 'react';
import styles from './GenreSelect.module.css';
import { Button } from '../Button/Button.tsx';

export interface Props {
	selectedGenre: string | null;
	genres: string[];
	onSelect: (genre: string) => void;
}

export function GenreSelect({ selectedGenre, genres, onSelect }: Props): ReactElement {
	return <ul className={styles.genreList}>
		{genres.map((genre: string, index: number) => {
				return <li key={index}>
					<Button data-testid="genre-select-button" className={selectedGenre === genre ? styles.active : ''} onClick={() => {
						onSelect(genre);
					}}>
						{genre}
					</Button>
				</li>;
			}
		)}
	</ul>;
}
