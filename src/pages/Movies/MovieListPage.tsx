import { Card, SortBy } from '../../components';
import { GenreSelect, MovieModel, MoviesList, useMovieList, deleteMovie } from '../../Movies';
import { Outlet, useSearchParams } from 'react-router-dom';
import { initialSearchParams } from '../const/initial-search-params.ts';
import { useEffect } from 'react';

export function MovieListPage() {
	const [searchParams, setSearchParams] = useSearchParams(initialSearchParams);
	const searchTerm = searchParams.get('searchTerm');
	const genre = searchParams.get('genre');
	const sortBy = searchParams.get('sortBy');

	const genres = ['All', 'Documentary', 'Adventure', 'Action', 'Science Fiction'];
	const sortByOptions = [{ label: 'Release Date', value: 'release_date'}, { label: 'Title', value: 'title' }];


	const { movies, getMovies, refreshMovies, cancelRequest } = useMovieList()

	useEffect(() => {
		getMovies({ searchTerm, sortBy, genre: genre === 'All' ? null : genre });

		return () => {
			cancelRequest();
		}
	}, [searchTerm, genre, sortBy])

	const setSortOptionParams = (option: string) => {
		setSearchParams((prevSearchParams) => {
			prevSearchParams.set('sortBy', option || initialSearchParams.sortBy)
			return prevSearchParams
		});
	};

	const setGenreParams = (genre: string) => {
		setSearchParams((prevSearchParams) => {
			prevSearchParams.set('genre', genre || initialSearchParams.genre)
			return prevSearchParams
		});
	};

	const onMovieDelete = (movie: MovieModel) => {
		deleteMovie(movie.id).then(refreshMovies).catch(refreshMovies)
	}

	return <>
		<Outlet />
		<main>
			<Card>
				<header className="flex-between">
					<GenreSelect selectedGenre={genre} genres={genres} onSelect={setGenreParams}/>
					<SortBy options={sortByOptions} selectedOption={sortBy} onSelect={setSortOptionParams}/>
				</header>
				<MoviesList movies={movies} onMovieDelete={onMovieDelete}/>
			</Card>
		</main>
	</>
}
