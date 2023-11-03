import { httpClient } from './config/axios-movies.config.ts';
import { CreateMovieModel, MovieModel } from '../models';
import { CancelToken } from 'axios';

export interface MoviesParams {
	searchTerm: string | null;
	genre: string | null;
	sortBy: string | null;
}

export async function fetchMovies(
	{ searchTerm, sortBy, genre }: MoviesParams,
): Promise<MovieModel[]> {

	const params = new URLSearchParams({
		search: searchTerm ?? '',
		searchBy: 'title',
		filter: genre ? [genre].join(',') : '',
		sortBy: sortBy ?? 'title',
		sortOrder: 'desc'
	})

	const response = await fetch('http://localhost:4000/movies/?' + params)

	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}

	return response.json().then((resp) => resp.data)
}


export async function fetchMovieById(id: string): Promise<MovieModel> {
	const res = await fetch(`http://localhost:4000/movies/${id}`)

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}


export  async function createMovie(movie: CreateMovieModel): Promise<MovieModel> {
	const res = await fetch(`http://localhost:4000/movies`, { method: 'POST',  body: JSON.stringify(movie) })

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export function updateMovie(movie: MovieModel, cancelToken: CancelToken): Promise<MovieModel> {
	return httpClient.put<MovieModel, MovieModel, MovieModel>('/movies', movie, { cancelToken });
}

export function deleteMovie(movieId: number): Promise<void> {
	return httpClient.delete(`/movies/${movieId}`)
}
