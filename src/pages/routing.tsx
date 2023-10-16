import { createBrowserRouter } from 'react-router-dom';
import { MovieListPage } from './Movies/MovieListPage.tsx';
import { SearchPage } from './Search/SearchPage.tsx';
import { MovieDetailsPage } from './MovieDetails/MovieDetailsPage.tsx';
import { movieDetailsLoader } from './MovieDetails/loaders/movie-details.loader.ts';
import { AddNewMoviePage } from './AddNewMovie/AddNewMoviePage.tsx';
import { EditMoviePage } from './EditMovie/EditMoviePage.tsx';

export const appRouting = createBrowserRouter([
	{
		path: '/',
		element: <MovieListPage />,
		children: [
			{
				path: '/',
				element: <SearchPage />,
				children: [
					{
						path: 'new',
						element: <AddNewMoviePage />
					},
					{
						path: ':movieId/edit',
						element: <EditMoviePage />
					}
				]
			},
			{
				path: ':movieId',
				loader: movieDetailsLoader,
				element: <MovieDetailsPage />,
				children: [
					{
						path: 'edit',
						element: <EditMoviePage />
					}
				]
			}
		]
	}
])
