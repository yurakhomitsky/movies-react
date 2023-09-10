import { ReactElement, useState } from 'react';
import PosterImg from './assets/Poster.png';

import './App.css';
import { Header } from './Header/Header.tsx';
import { Card, GenreSelect, SearchForm, SortBy } from './components';
import { MovieDetails, MovieModel, MoviesList } from './Movies';

function App(): ReactElement {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedMovie, setSelectedMovie] = useState<MovieModel | null>(null);
	const [selectedGenre, setGenre] = useState<string | null>('All');
	const [selectedSortOption, setSortOption] = useState<string | null>('Release Date');
	const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
	const sortByOptions = ['Release Date', 'Title'];

	const movieDetails: MovieModel = {
		image: PosterImg, name: 'SpiderMan', releaseYear: '2004', genres: ['Fight', 'Fantastic'],
		rating: 8.9,
		duration: '2h 34min',
		description: `Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). 
		Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. 
		Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. 
		The lives of these seemingly unrelated people are woven together comprising of a series of funny, 
		bizarre and uncalled-for incidents.—Soumitra`
	};
	return (<>
		{
			selectedMovie ?
				<Card>
					<MovieDetails movie={movieDetails}></MovieDetails>
				</Card> :
				<Header>
					<SearchForm searchTerm={searchTerm} onSearch={setSearchTerm}></SearchForm>
				</Header>
		}

		<main>
			<Card>
				<header className="header-container">
					<GenreSelect selectedGenre={selectedGenre} genres={genres} onSelect={setGenre}></GenreSelect>
					<SortBy options={sortByOptions} selectedOption={selectedSortOption} onSelect={setSortOption}></SortBy>
				</header>
				<MoviesList movies={[movieDetails]} onMovieClick={setSelectedMovie}></MoviesList>
			</Card>
		</main>

	</>);
}

export default App;
