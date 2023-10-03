import React, { ReactElement } from 'react';
import styles from './SortBy.module.css';

interface SortByProps {
	options: {label: string; value: string}[];
	selectedOption: string | null;
	onSelect: (option: string) => void;
}

export function SortBy({ selectedOption, options, onSelect }: SortByProps): ReactElement {

	const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onSelect(event.target.value);
	};

	return <div className={styles.container}>
		<label className="text-light" htmlFor="options">Sort By</label>
		<select data-testid="sort-by-select" className={styles.select} defaultValue={selectedOption ?? undefined} name="options" id="options" onChange={onChange}>
			{options.map((option, index) => {
				return <option key={index} value={option.value}>{option.label}</option>;
			})}
		</select>
	</div>;
}
