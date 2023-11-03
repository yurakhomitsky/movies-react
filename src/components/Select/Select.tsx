import styles from './Select.module.css';
import React, { forwardRef } from 'react';


interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label: string
	options: Array<{ value: string; label: string }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, multiple, options, name, ...rest }, ref) => {
	return (
		<div className="form-control-flex-column">
			<label className={styles.label} htmlFor={name}>{label}</label>
			<select {...rest} ref={ref} className={styles.select} multiple={multiple}>
				{options.map((option,) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
})
