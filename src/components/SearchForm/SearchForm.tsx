import React, { PropsWithChildren, ReactElement, useState } from 'react';
import styles from './SearchForm.module.css';
import { Button } from '../Button/Button.tsx';

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
				data-testid="search-input"
				placeholder="What do you want to watch?"
				type="text"
				value={query}
				onChange={handleInputChange}
				onKeyDown={handleKeyPress}
			/>
			<Button data-testid="search-button" primary={true} onClick={performSearch}>Search</Button>
		</div>
	);
}
