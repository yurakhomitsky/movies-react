import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
}

export function Button ({ primary = false, className, children, ...props}: ButtonProps) {
	const mode = primary ? styles.primaryButton : styles.secondaryButton;
	return <button
		type="button"
		{...props}
		className={classNames(styles.button, mode, className)}>
		{children}
	</button>
}
