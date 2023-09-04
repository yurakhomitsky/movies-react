import { ReactElement, useState } from 'react';

import './App.css';
import { Counter } from './Counter/Counter.tsx';
import { Header } from './Header/Header.tsx';
import { Card, GenreSelect, SearchForm } from './components';

function App(): ReactElement {
	const [count, setCount] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedGenre, setGenre] = useState<string | null>('All');
	const [genres] = useState(['All', 'Documentary', 'Comedy', 'Horror', 'Crime']);

	return (
		<>
			<Header>
				<SearchForm searchTerm={searchTerm} onSearch={setSearchTerm}></SearchForm>
			</Header>
			<main>
				<Card>
					<GenreSelect selectedGenre={selectedGenre} genres={genres} onSelect={setGenre}></GenreSelect>
					<Counter count={count}
						onIncrease={() => setCount((prev) => prev + 1)}
						onDecrease={() => setCount((prev) => prev === 0 ? 0 : prev - 1)}></Counter>
				</Card>
			</main>

		</>
	);
}

export default App;
