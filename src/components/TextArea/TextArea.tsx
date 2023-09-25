import { BaseFormControlProps } from '../models/base-form-control-props.ts';
import styles from './TextArea.module.css';
import { ReactElement } from 'react';
import classNames from 'classnames';


interface TextAreaProps extends BaseFormControlProps<HTMLTextAreaElement> {
	className?: string
}

export function TextArea({ label, value, name, required, onChange, className }: TextAreaProps): ReactElement {
	return (
		<div className={classNames(className, 'form-control-flex-column')}>
			<label htmlFor={name}>{label}</label>
			<textarea
				defaultValue={value}
				name={name}
				required={required}
				onChange={onChange}
				className={styles.textarea}
			></textarea>
		</div>
	);
}
