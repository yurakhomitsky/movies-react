import { httpClient } from './config/axios-movies.config.ts';
import { CreateMovieModel, MovieModel } from '../models';
import { CancelToken, CancelTokenSource } from 'axios';

export interface MoviesParams {
	searchTerm: string | null;
	genre: string | null;
	sortBy: string | null;
}

export async function fetchMovies(
	{ searchTerm, sortBy, genre }: MoviesParams,
	cancelToken: CancelTokenSource
): Promise<MovieModel[]> {
	const response = await httpClient.get<{ data: MovieModel[] }>('/movies', {
		params: {
			search: searchTerm,
			searchBy: 'title',
			filter: genre ? [genre].join(',') : '',
			sortBy,
			sortOrder: 'desc'
		},
		cancelToken: cancelToken.token
	});

	return response.data.data;
}


export async function fetchMovieById(id: string): Promise<MovieModel> {
	const response = await httpClient.get<MovieModel>(`/movies/${id}`);
	return response.data;
}


export function createMovie(movie: CreateMovieModel, cancelToken: CancelToken): Promise<MovieModel> {
	return httpClient.post<MovieModel, MovieModel, CreateMovieModel>('/movies', movie, { cancelToken });
}

export function updateMovie(movie: MovieModel, cancelToken: CancelToken): Promise<MovieModel> {
	return httpClient.put<MovieModel, MovieModel, MovieModel>('/movies', movie, { cancelToken });
}

export function deleteMovie(movieId: number): Promise<void> {
	return httpClient.delete(`/movies/${movieId}`)
}
