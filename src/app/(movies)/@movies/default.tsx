import { initialSearchParams } from '../../../const/initial-search-params.ts';
import { fetchMovies, MoviesList } from '../../../Movies';
import React from 'react';

export default async function DefaultMovies({ searchParams }: { searchParams: Record<string, string> }) {
	const {
		searchTerm = initialSearchParams.searchTerm,
		genre = initialSearchParams.genre,
		sortBy = initialSearchParams.sortBy
	} = searchParams || initialSearchParams;

	const movies = await fetchMovies({ searchTerm, genre: genre === 'All' ? null : genre, sortBy });

	return <MoviesList movies={movies}/>
}
