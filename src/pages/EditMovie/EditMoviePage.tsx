import { Dialog } from '../../components';
import { MovieForm, MovieFormModel, MovieModel, updateMovie, useMovieList } from '../../Movies';
import { useLocation, useNavigate } from 'react-router-dom';
import axios, { CancelTokenSource } from 'axios';
import { useEffect } from 'react';

export function EditMoviePage() {
	const { state: { movie } } = useLocation() as { state: { movie: MovieModel } }
	const navigate = useNavigate();
	const { refreshMovies } = useMovieList()

	const { title, runtime, genres, vote_average, overview, release_date, poster_path } = movie;

	const movieToEdit: MovieFormModel = {
		title,
		runtime,
		release_date,
		genres,
		overview,
		poster_path,
		vote_average
	}

	let cancelTokenSource: CancelTokenSource | null = null;

	async function onSubmit(movieForm: MovieFormModel) {
		cancelTokenSource = axios.CancelToken.source();

		const updatedMovie: MovieModel = {
			...movie,
			...movieForm
		}

		updateMovie(updatedMovie, cancelTokenSource.token)
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

	return <Dialog width={'60rem'} height={'40rem'} title={'Edit Movie'} onClose={() => {
		navigate(-1);
		cancelTokenSource?.cancel();
	}}>
		<MovieForm movie={movieToEdit} onFormSubmit={onSubmit}></MovieForm>
	</Dialog>;
}
