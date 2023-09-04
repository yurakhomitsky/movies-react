import React, { PropsWithChildren, ReactElement, useState } from 'react';
import styles from './SearchForm.module.css';

interface Props {
	searchTerm: string;
	onSearch: (searchTerm: string) => void;
}

export function SearchForm({ searchTerm, onSearch }: PropsWithChildren<Props>): ReactElement {
	const [query, setQuery] = useState(searchTerm);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			performSearch();
		}
	};

	const performSearch = () => {
		onSearch(query);
	};

	return (
		<div className={styles.searchContainer}>
			<input
				type="text"
				value={query}
				onChange={handleInputChange}
				onKeyDown={handleKeyPress}
			/>
			<button className="primary-button" onClick={performSearch}>Search</button>
		</div>
	);
}
