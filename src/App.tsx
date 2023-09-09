import { ReactElement, useState } from 'react';

import './App.css';
import { Header } from './Header/Header.tsx';
import { Card, GenreSelect, SearchForm, SortBy } from './components';

function App(): ReactElement {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedGenre, setGenre] = useState<string | null>('All');
	const [selectedSortOption, setSortOption] = useState<string | null>('Release Date');
	const genres= ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']
	const sortByOptions = ['Release Date', 'Title'];

	return (
		<>
			<Header>
				<SearchForm searchTerm={searchTerm} onSearch={setSearchTerm}></SearchForm>
			</Header>
			<main>
				<Card>
					<header className="header-container">
						<GenreSelect selectedGenre={selectedGenre} genres={genres} onSelect={setGenre}></GenreSelect>
						<SortBy options={sortByOptions} selectedOption={selectedSortOption} onSelect={setSortOption}></SortBy>
					</header>

				</Card>
			</main>

		</>
	);
}

export default App;
