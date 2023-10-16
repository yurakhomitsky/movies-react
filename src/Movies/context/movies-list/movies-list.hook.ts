import { useContext } from 'react';
import { MovieListContext, MovieListContextData } from './movies-list.context.tsx';

export function useMovieList(): MovieListContextData {
	const context = useContext(MovieListContext);
	if (context === undefined) {
		throw new Error('useMovieList must be used within a MovieListProvider');
	}
	return context;
}
