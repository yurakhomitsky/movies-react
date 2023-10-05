import { useEffect, useState } from 'react';
import { MovieModel } from '../index.ts';
import axios, { CancelTokenSource } from 'axios';
import { MoviesParams, fetchMovies } from '../api';


export function useMovies({ searchTerm, sortBy, genre }: MoviesParams) {
	const [movies, setMovies] = useState<MovieModel[]>([]);

	useEffect(() => {
		let cancelTokenSource: CancelTokenSource;

		const getMovies = async () => {
			try {
				cancelTokenSource = axios.CancelToken.source();
				const response = await fetchMovies({ searchTerm, sortBy, genre }, cancelTokenSource)

				setMovies(response);
			} catch (error) {
				if (!axios.isCancel(error)) {
					console.error(error);
				}
			}
		};

		getMovies();

		return () => {
			if (cancelTokenSource) {
				cancelTokenSource.cancel();
			}
		};
	}, [searchTerm, genre, sortBy]);

	return { movies };
}
