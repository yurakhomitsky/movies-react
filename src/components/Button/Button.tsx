import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
}

export function Button ({ primary = false, className, children, ...props}: ButtonProps) {
	const mode = primary ? styles.primaryButton : styles.secondaryButton;
	return <button
		type="button"
		{...props}
		className={[styles.button, mode, className].join(' ')}>
		{children}
	</button>
}
