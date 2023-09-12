import { render, fireEvent } from '@testing-library/react';
import { SortBy } from './SortBy'; // Import your component



describe('SortBy', () => {
	const mockOptions = ['Option 1', 'Option 2', 'Option 3'];
	const mockSelectedOption = 'Option 2';
	const mockOnSelect = jest.fn();

	it('renders the SortBy component', () => {
		const { container } = render(
			<SortBy options={mockOptions} selectedOption={mockSelectedOption} onSelect={mockOnSelect} />
		);
		expect(container).toBeInTheDocument();
	});

	it('displays the provided options', () => {
		const { getByLabelText } = render(
			<SortBy options={mockOptions} selectedOption={null} onSelect={mockOnSelect} />
		);

		const selectElement = getByLabelText('Sort By');

		for (const option of mockOptions) {
			expect(selectElement).toHaveTextContent(option);
		}
	});

	it('calls onSelect when an option is selected', () => {
		const { getByLabelText } = render(
			<SortBy options={mockOptions} selectedOption={null} onSelect={mockOnSelect} />
		);

		const selectElement = getByLabelText('Sort By');
		fireEvent.change(selectElement, { target: { value: 'Option 1' } });

		expect(mockOnSelect).toHaveBeenCalledWith('Option 1');
	});

	it('displays the selected option', () => {
		const { getByLabelText } = render(
			<SortBy options={mockOptions} selectedOption={mockSelectedOption} onSelect={mockOnSelect} />
		);

		const selectElement = getByLabelText('Sort By');
		expect(selectElement).toHaveValue(mockSelectedOption);
	});
});
