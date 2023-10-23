import { fetchMovieById } from '../../../Movies';
import { LoaderFunction } from 'react-router-dom';

export const movieDetailsLoader: LoaderFunction = async ({ params })  => {
	const movie = await fetchMovieById(params.movieId as string);
	return { movie };
}
