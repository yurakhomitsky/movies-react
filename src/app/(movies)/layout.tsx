'use client';
import { GenreSelect } from '../../Movies';
import { Card, SortBy } from '../../components';
import React, { ReactNode } from 'react';
import {
	usePathname,
	useRouter,
	useSearchParams
} from 'next/navigation';
import { initialSearchParams } from '../../const/initial-search-params.ts';
import Modal from 'react-modal';

Modal.setAppElement('#overlay');

export default function MoviesLayout({ children, movies }: {
	children: ReactNode,
	movies: ReactNode,
}) {
	const searchParams = useSearchParams();

	const pathname = usePathname();
	const router = useRouter();

	// const searchTerm = searchParams.get('searchTerm') ?? initialSearchParams.searchTerm
	const genre = searchParams.get('genre') ?? initialSearchParams.genre;
	const sortBy = searchParams.get('sortBy') ?? initialSearchParams.sortBy;


	const genres = ['All', 'Documentary', 'Adventure', 'Action', 'Science Fiction'];
	const sortByOptions = [{ label: 'Release Date', value: 'release_date' }, { label: 'Title', value: 'title' }];


	const setSortOptionParams = (option: string) => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set('sortBy', option);
		router.push(`${pathname}?${newParams.toString()}`);
	};

	const setGenreParams = (genre: string) => {
		const newParams = new URLSearchParams(searchParams.toString());
		newParams.set('genre', genre);
		router.push(`${pathname}?${newParams.toString()}`);
	};

	return <>
		{children}
		<main>
			<Card>
				<header className="flex-between">
					<GenreSelect selectedGenre={genre} genres={genres} onSelect={setGenreParams}/>
					<SortBy options={sortByOptions} selectedOption={sortBy} onSelect={setSortOptionParams}/>
				</header>
				{movies}
			</Card>
		</main>
	</>;


}
