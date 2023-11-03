import styles from './Input.module.css';
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, name, ...rest }, ref)  => {
	return (
		<div className="form-control-flex-column">
			<label className={styles.label} htmlFor={name}>{label}</label>
			<input
				{...rest}
				ref={ref}
				className={styles.input}
			/>
		</div>
	);
})
