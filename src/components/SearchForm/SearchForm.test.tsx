import { cleanup, fireEvent, render } from '@testing-library/react';
import { SearchForm } from './SearchForm.tsx';


function renderComponent(searchTerm: string, onSearchSpy: jest.Mock = jest.fn()) {

	const { getByTestId } = render(
		<SearchForm searchTerm={searchTerm} onSearch={onSearchSpy}></SearchForm>
	);

	return {
		searchInput: getByTestId('search-input'),
		searchButton: getByTestId('search-button'),
		onSearchSpy
	}

}

describe('SearchForm', () => {

	afterEach(cleanup);

	it('should display initial search term', () => {
		const searchTerm = 'hello world'

		const { searchInput } = renderComponent(searchTerm);

		expect(searchInput).toHaveValue(searchTerm)
	})

	it('should call onSearch function with typed input text on button click', () => {
		const searchTerm = 'Search Button'

		const { searchInput, searchButton, onSearchSpy } = renderComponent(searchTerm);

		fireEvent.change(searchInput, { target: { value: searchTerm } });

		fireEvent.click(searchButton);

		expect(onSearchSpy).toHaveBeenCalledWith(searchTerm)
	})

	it('should call onSearch function with typed input text on "Enter" keydown ', () => {
		const searchTerm = 'Enter'

		const { searchInput, onSearchSpy } = renderComponent(searchTerm);

		fireEvent.change(searchInput, { target: { value: searchTerm } });

		fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

		expect(onSearchSpy).toHaveBeenCalledWith(searchTerm)
	})
})
