import { MovieModel } from './movie.model.ts';

export type AddNewMovieModel = Pick<MovieModel, 'title' | 'release_date' | 'poster_path' | 'vote_average' | 'genres' | 'runtime' | 'overview'>
