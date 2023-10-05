import { Card, Dialog, SortBy } from '../components';
import { GenreSelect, MovieForm, MoviesList, useMovies } from '../Movies';
import { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { initialSearchParams } from './initial-search-params.ts';

export function MovieListPage() {
	const [searchParams, setSearchParams] = useSearchParams(initialSearchParams);
	const searchTerm = searchParams.get('searchTerm');
	const genre = searchParams.get('genre');
	const sortBy = searchParams.get('sortBy');

	const genres = ['All', 'Documentary', 'Adventure', 'Action', 'Science Fiction'];
	const sortByOptions = [{ label: 'Release Date', value: 'release_date'}, { label: 'Title', value: 'title' }];

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const { movies } = useMovies({ searchTerm, sortBy, genre: genre === 'All' ? null : genre })

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

	return <>
		<Outlet />
		<main>
			{isDialogOpen &&
        <Dialog width={'60rem'} height={'40rem'} title={'Add new Movie'} onClose={() => setIsDialogOpen(false)}>
          <MovieForm></MovieForm>
        </Dialog>}
			<Card>
				<header className="flex-between">
					<GenreSelect selectedGenre={genre} genres={genres} onSelect={setGenreParams}/>
					<SortBy options={sortByOptions} selectedOption={sortBy} onSelect={setSortOptionParams}/>
				</header>
				<MoviesList movies={movies}/>
			</Card>
		</main>
	</>;
}
