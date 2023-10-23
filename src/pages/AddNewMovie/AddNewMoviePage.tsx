import { Dialog } from '../../components';
import { createMovie, MovieForm, MovieFormModel, useMovieList } from '../../Movies';
import { useNavigate } from 'react-router-dom';
import axios, { CancelTokenSource } from 'axios';
import { useEffect } from 'react';

export function AddNewMoviePage() {
	const navigate = useNavigate();
	const { refreshMovies } = useMovieList()



	let cancelTokenSource: CancelTokenSource | null = null;

	async function onSubmit(movieForm: MovieFormModel) {
		cancelTokenSource = axios.CancelToken.source();

		const { title, poster_path, genres, runtime, vote_average, overview, release_date } = movieForm;

		createMovie({
			title,
			poster_path,
			genres,
			vote_average: Number(vote_average),
			runtime: Number(runtime),
			release_date,
			overview,
			revenue: 0,
			budget: 0,
			tagline: overview,
			vote_count: 0
		}, cancelTokenSource.token)
			.then(() => {
				navigate(-1);
				refreshMovies();

			})
			.catch(() => {
				navigate(-1);
				refreshMovies();
			});

	}

	useEffect(() => {
		return () => {
			cancelTokenSource?.cancel();
		};
	}, []);

	return <Dialog width={'60rem'} height={'40rem'} title={'Add new Movie'} onClose={() => {
		navigate(-1);
		cancelTokenSource?.cancel();
	}}>
		<MovieForm onFormSubmit={onSubmit}></MovieForm>
	</Dialog>;
}
