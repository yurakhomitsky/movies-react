import { MovieModel } from '../../models';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { fetchMovies, MoviesParams } from '../../api';

export interface MovieListContextData {
	movies: MovieModel[];
	getMovies: (movieParams: MoviesParams) => Promise<void>
	refreshMovies: () => void
	cancelRequest: () => void
}

export const MovieListContext = createContext<MovieListContextData | undefined>(undefined);

export function MovieListProvider({ children }: { children: React.ReactNode }) {
	const [movies, setMovies] = useState<MovieModel[]>([]);
	const cancelTokenSourceRef = useRef<CancelTokenSource | null>(null);
	const latestMoviesRequestParams = useRef<MoviesParams | null>(null);

	const cancelRequest = useCallback(
		() => {
			cancelTokenSourceRef.current?.cancel();
		},
		[]
	);

	const getMovies = useCallback(async (movieParams: MoviesParams) => {
		try {
			cancelTokenSourceRef.current?.cancel();

			cancelTokenSourceRef.current = axios.CancelToken.source();
			latestMoviesRequestParams.current = movieParams;
			const response = await fetchMovies(movieParams, cancelTokenSourceRef.current);

			setMovies(response);
		} catch (error) {
			if (!axios.isCancel(error)) {
				console.error(error);
				latestMoviesRequestParams.current = null;
				setMovies([])
			}
		}
	}, []);

	const refreshMovies = useCallback(() => {
		if (latestMoviesRequestParams.current) {
			getMovies(latestMoviesRequestParams.current)
		}
	}, [getMovies]);

	useEffect(() => {
		return () => {
			cancelRequest();
		}
	}, [cancelRequest])

	return (
		<MovieListContext.Provider value={{ movies, getMovies, refreshMovies, cancelRequest }}>
			{children}
		</MovieListContext.Provider>
	);
}


