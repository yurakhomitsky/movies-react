import { ApplicationName, Card, SearchIcon } from '../components';
import { MovieDetails, MovieModel } from '../Movies';
import { NavLink, useLoaderData, useSearchParams } from 'react-router-dom';

export function MovieDetailsPage() {
	const { movie } = useLoaderData() as { movie: MovieModel };
	const [searchParams] = useSearchParams();
	const preservedParams = searchParams.toString();

	return <Card>
		<div className="flex-between">
			<ApplicationName/>
			<NavLink
				to={{
					pathname: '/',
					search: preservedParams
				}}
			>
				<SearchIcon></SearchIcon>
			</NavLink>
		</div>
		<MovieDetails movie={movie}/>
	</Card>;
}
