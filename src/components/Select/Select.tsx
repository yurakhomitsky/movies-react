import { BaseFormControlProps } from '../models/base-form-control-props.ts';
import styles from './Select.module.css';
import { ReactElement } from 'react';


interface SelectProps extends BaseFormControlProps<HTMLSelectElement> {
	options: Array<{ value: string; label: string }>;
	multiple?: boolean
}

export function Select({ label, options, value, name, required, onChange, multiple }: SelectProps): ReactElement {
	return (
		<div className="form-control-flex-column">
			<label htmlFor={name}>{label}</label>
			<select multiple={multiple} defaultValue={value} name={name} required={required} onChange={onChange} className={styles.select}>
				{options.map((option,) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}
