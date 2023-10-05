import { createBrowserRouter } from 'react-router-dom';
import { MovieListPage } from './MovieListPage.tsx';
import { SearchPage } from './SearchPage.tsx';
import { MovieDetailsPage } from './MovieDetailsPage.tsx';
import { movieDetailsLoader } from './loaders/movie-details.loader.ts';

export const appRouting = createBrowserRouter([
	{
		path: '/',
		element: <MovieListPage />,
		children: [
			{
				index: true,
				element: <SearchPage />,
			},
			{
				path: ':movieId',
				loader: movieDetailsLoader,
				element: <MovieDetailsPage />
			}
		]
	}
])
