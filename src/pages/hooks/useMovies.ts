import { useEffect, useState } from 'react';
import { MovieModel } from '../../Movies';
import axios, { CancelTokenSource } from 'axios';

interface UseMoviesParams {
	searchTerm: string | null;
	selectedGenre: string | null;
	sortBy: string | null;
}

export function useMovies({ searchTerm, sortBy, selectedGenre }: UseMoviesParams) {
	const [movies, setMovies] = useState<MovieModel[]>([]);

	useEffect(() => {
		let cancelTokenSource: CancelTokenSource;

		const fetchMovies = async () => {
			try {
				cancelTokenSource = axios.CancelToken.source();
				const response = await axios.get('http://localhost:4000/movies', {
					params: {
						search: searchTerm,
						searchBy: 'title',
						filter: selectedGenre ? [selectedGenre].join(',') : '',
						sortBy,
						sortOrder: 'desc'
					},
					cancelToken: cancelTokenSource.token
				});

				if (response.status === 200) {
					setMovies(response.data.data);
				}
			} catch (error) {
				if (!axios.isCancel(error)) {
					console.error(error);
				}
			}
		};

		fetchMovies();

		return () => {
			if (cancelTokenSource) {
				cancelTokenSource.cancel();
			}
		};
	}, [searchTerm, selectedGenre, sortBy]);

	return { movies };
}
