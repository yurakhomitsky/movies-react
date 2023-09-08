import { cleanup, fireEvent, render } from '@testing-library/react';
import { GenreSelect } from './GenreSelect.tsx';
import { ComponentProps } from 'react';

function renderComponent({ genres = [], selectedGenre = '', onSelect = jest.fn() }: Partial<ComponentProps<typeof GenreSelect>>) {

	const { getAllByTestId, getByText } = render(
		<GenreSelect selectedGenre={selectedGenre} genres={genres} onSelect={onSelect}></GenreSelect>
	);

	return {
		genreButtons: getAllByTestId('genre-select-button'),
		getSelectedGenre: () => getByText(selectedGenre ?? ''),
		getGenreButton: (genre: string) => getByText(genre),
		onSelectSpy: onSelect
	}

}

describe('GenreSelect', () => {

	afterEach(cleanup);

	it('should display genres', () => {
		const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];

		const { genreButtons } = renderComponent({ genres });

		expect(genreButtons.length).toBe(genres.length);

		// Assert that each genre button text is present in the genres array
		genreButtons.forEach((button, index) => {
			expect(button).toHaveTextContent(genres[index]);
		});
	})

	it('should highlight a selected genre', () => {
		const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
		const selectedGenre = genres[1];

		const { getSelectedGenre } = renderComponent({ genres, selectedGenre });

		expect(getSelectedGenre()).toHaveClass('active')
	})

	it('should call onSelect when genre is selected', () => {
		const genres = ['Action', 'Adventure', 'Comedy', 'Drama'];

		const { onSelectSpy, getGenreButton } = renderComponent({ genres });

		fireEvent.click(getGenreButton('Comedy'))

		expect(onSelectSpy).toHaveBeenCalledWith('Comedy')
	})

})
