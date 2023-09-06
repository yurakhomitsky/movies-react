import { PropsWithChildren, ReactElement } from 'react';
import styles from './GenreSelect/Card.module.css'

export function Card({ children }: PropsWithChildren): ReactElement {
	return <div className={styles.card}>
		{children}
	</div>
}
