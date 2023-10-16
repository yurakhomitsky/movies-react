import styles from './TextArea.module.css';
import React, { forwardRef } from 'react';
import classNames from 'classnames';


interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	className?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, name, className, ...rest }: TextAreaProps, ref) => {
	return (
		<div className={classNames(className, 'form-control-flex-column')}>
			<label htmlFor={name}>{label}</label>
			<textarea
				ref={ref}
				{...rest}
				className={styles.textarea}
			></textarea>
		</div>
	);
})
