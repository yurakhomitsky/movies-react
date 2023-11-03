import { ApplicationName, Card, SearchIcon } from '../../../components';
import { fetchMovieById, MovieDetails } from '../../../Movies';
import Link from 'next/link';

export default async function MovieDetailsPage({ params, searchParams }: {
	params: { movieId: string },
	searchParams: Record<string, string>
}) {
	const movie = await fetchMovieById(params.movieId);

	return <Card>
		<div className="flex-between">
			<ApplicationName/>
			<Link href={{ pathname: './', query: new URLSearchParams(searchParams).toString() }}>
				<SearchIcon></SearchIcon>
			</Link>
		</div>
		<MovieDetails movie={movie}/>
	</Card>;
}
