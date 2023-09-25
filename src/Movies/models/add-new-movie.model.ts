import { MovieModel } from './movie.model.ts';

export type AddNewMovieModel = Omit<MovieModel, 'id'>
