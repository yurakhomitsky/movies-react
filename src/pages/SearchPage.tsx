import { ApplicationName, SearchForm } from '../components';
import { AddMovieButton } from '../Movies';
import { Header } from '../Header/Header.tsx';
import { useSearchParams } from 'react-router-dom';
import { initialSearchParams } from './initial-search-params.ts';

export function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get('searchTerm') ?? initialSearchParams.searchTerm

	const setSearchTermParams = (term: string) => {
		setSearchParams((prevSearchParams: URLSearchParams) => {
			prevSearchParams.set('searchTerm', term || initialSearchParams.searchTerm)
			return prevSearchParams;
		});
	};

	return <Header>
		<div className="search-app-header flex-between">
			<ApplicationName/> <AddMovieButton onClick={() => {}}/>
		</div>
		<div className="movie-search">
			<h2 className="search-field-title">Find your movie</h2>
			<SearchForm searchTerm={searchTerm} onSearch={(searchTerm) => setSearchTermParams(searchTerm)}/>
		</div>
	</Header>
}
