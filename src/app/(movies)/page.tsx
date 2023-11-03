'use client';
import { Header } from '../../Header/Header.tsx';
import { ApplicationName, SearchForm } from '../../components';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('searchTerm') ?? '';

	const onSearch = (updatedSearchTerm: string) => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set('searchTerm', updatedSearchTerm);
		router.replace(`?${newParams.toString()}`);
	};

	return <>
		<Header>
			<div className="search-app-header flex-between">
				<ApplicationName/>
			</div>
			<div className="movie-search">
				<h2 className="search-field-title">Find your movie</h2>
				<SearchForm searchTerm={searchTerm} onSearch={onSearch}/>
			</div>
		</Header>
	</>;
}
