import { httpClient } from './config/axios-movies.config.ts';
import { MovieModel } from '../models';
import { CancelTokenSource } from 'axios';

export interface MoviesParams {
	searchTerm: string | null;
	genre: string | null;
	sortBy: string | null;
}

export const fetchMovies = async ({ searchTerm, sortBy, genre }: MoviesParams, cancelToken: CancelTokenSource): Promise<MovieModel[]> => {
	const response = await httpClient.get<{ data: MovieModel[] }>('/movies', {
		params: {
			search: searchTerm,
			searchBy: 'title',
			filter: genre ? [genre].join(',') : '',
			sortBy,
			sortOrder: 'desc',
		},
		cancelToken: cancelToken.token
	});

	return response.data.data;
};

export const fetchMovieById = async (id: string): Promise<MovieModel> => {
	const response = await httpClient.get<MovieModel>(`/movies/${id}`);
	return response.data;
};
