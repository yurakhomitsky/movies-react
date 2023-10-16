import { ApplicationName, SearchForm } from '../../components';
import { AddMovieButton } from '../../Movies';
import { Header } from '../../Header/Header.tsx';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { initialSearchParams } from '../const/initial-search-params.ts';

export function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get('searchTerm') ?? initialSearchParams.searchTerm;
	const preservedParams = searchParams.toString();

	const setSearchTermParams = (term: string) => {
		setSearchParams((prevSearchParams: URLSearchParams) => {
			prevSearchParams.set('searchTerm', term || initialSearchParams.searchTerm);
			return prevSearchParams;
		});
	};

	return <>
		<Header>
			<div className="search-app-header flex-between">
				<ApplicationName/>
				<NavLink data-testid="add-movie-button" to={{ pathname: '/new', search: preservedParams }}>
					<AddMovieButton />
				</NavLink>
			</div>
			<div className="movie-search">
				<h2 className="search-field-title">Find your movie</h2>
				<SearchForm searchTerm={searchTerm} onSearch={(searchTerm) => setSearchTermParams(searchTerm)}/>
			</div>
		</Header>
		<Outlet />
	</>

}
