import { MovieModel } from './movie.model.ts';

export type CreateMovieModel = Omit<MovieModel, 'id'>
