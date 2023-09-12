import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import styles from './Card.module.css';

export function Card({ children, className, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement {
	return <div {...rest} className={`${className} ${styles.card}`}>
		{children}
	</div>;
}
