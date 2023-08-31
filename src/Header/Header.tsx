import { PropsWithChildren, ReactElement } from 'react';
import styles from './Header.module.css';

export function Header({ children }: PropsWithChildren): ReactElement {
	return (
		<header className={`${styles.header} bg-dark`}>
			<div className={styles.content}>
				{children}
			</div>
		</header>
	)
}
