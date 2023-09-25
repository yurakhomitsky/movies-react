import { BaseFormControlProps } from '../models/base-form-control-props.ts';
import styles from './Input.module.css';
import { ReactElement } from 'react';

interface InputProps extends BaseFormControlProps<HTMLInputElement> {
	type?: string;
}

export function Input({ label, type = 'text', value, name, required, onChange }: InputProps): ReactElement {
	return (
		<div className="form-control-flex-column">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				defaultValue={value}
				name={name}
				required={required}
				onChange={onChange}
				className={styles.input}
			/>
		</div>
	);
}
