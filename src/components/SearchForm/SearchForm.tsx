'use client'
import React, { FormEvent, PropsWithChildren, ReactElement } from 'react';
import styles from './SearchForm.module.css';
import { Button } from '../Button/Button.tsx';

interface Props {
	searchTerm: string;
	onSearch: (searchTerm: string) => void;
}

export function SearchForm({ searchTerm, onSearch }: PropsWithChildren<Props>): ReactElement {

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		onSearch(Object.fromEntries(new FormData((event.target as HTMLFormElement))).searchTerm as string)
	}

	return (
		<form className={styles.searchContainer} onSubmit={onSubmit}>
			<input
				defaultValue={searchTerm}
				name='searchTerm'
				data-testid="search-input"
				placeholder="What do you want to watch?"
				type="text"
			/>
			<Button type={'submit'} data-testid="search-button" primary={true}>Search</Button>
		</form>
	);
}
