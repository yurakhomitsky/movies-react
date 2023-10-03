import { ApplicationName, Card, Dialog, SearchForm, SearchIcon, SortBy } from '../components';
import { AddMovieButton, GenreSelect, MovieDetails, MovieForm, MovieModel, MoviesList } from '../Movies';
import { Header } from '../Header/Header.tsx';
import { useState } from 'react';
import { useMovies } from './hooks/useMovies.ts';

export function MovieListPage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedMovie, setSelectedMovie] = useState<MovieModel | null>(null);
	const [selectedGenre, setGenre] = useState<string | null>('All');
	const [sortBy, setSortOption] = useState<string | null>('Release Date');
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { movies } = useMovies({ searchTerm, sortBy, selectedGenre: selectedGenre === 'All' ? null : selectedGenre })
	const genres = ['All', 'Documentary', 'Adventure', 'Action', 'Science Fiction'];
	const sortByOptions = [{ label: 'Release Date', value: 'release_date'}, { label: 'Title', value: 'title' }];


	return <>  {
		selectedMovie ? (
			<Card>
				<div className="flex-between">
					<ApplicationName/> <SearchIcon onClick={() => setSelectedMovie(null)}></SearchIcon>
				</div>
				<MovieDetails movie={selectedMovie}/>
			</Card>
		) : (
			<Header>
				<div className="search-app-header flex-between">
					<ApplicationName/> <AddMovieButton onClick={() => setIsDialogOpen(true)}/>
				</div>
				<div className="movie-search">
					<h2 className="search-field-title">Find your movie</h2>
					<SearchForm searchTerm={searchTerm} onSearch={setSearchTerm}/>
				</div>
			</Header>
		)}

		<main>
			{isDialogOpen &&
        <Dialog width={'60rem'} height={'40rem'} title={'Add new Movie'} onClose={() => setIsDialogOpen(false)}>
          <MovieForm></MovieForm>
        </Dialog>}
			<Card>
				<header className="flex-between">
					<GenreSelect selectedGenre={selectedGenre} genres={genres} onSelect={setGenre}/>
					<SortBy options={sortByOptions} selectedOption={sortBy} onSelect={setSortOption}/>
				</header>
				<MoviesList movies={movies} onMovieClick={setSelectedMovie}/>
			</Card>
		</main>
	</>;
}
