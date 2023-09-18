import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import styles from './Card.module.css';
import classNames from 'classnames';

type CardProps = PropsWithChildren<Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'style'>>

export function Card({ children, className, style }: CardProps): ReactElement {
	return <div style={style} className={classNames(className, styles.card)}>
		{children}
	</div>;
}
