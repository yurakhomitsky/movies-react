import { cleanup, fireEvent, render } from '@testing-library/react';
import { Counter } from './Counter.tsx';

describe('Counter Component', () => {
	let countState = 0;
	let decrementButton: HTMLElement;
	let incrementButton: HTMLElement;
	let countDisplay: HTMLElement;
	let triggerRerender: () => void;

	afterEach(cleanup);

	beforeEach(() => {
		countState = 0;

		const { getByTestId, rerender } = render(
			<Counter count={countState} onIncrease={() => {
				countState += 1;
			}} onDecrease={() => {
				countState -= 1;
			}}/>
		);

		countDisplay = getByTestId('count');
		decrementButton = getByTestId('Decrease');
		incrementButton = getByTestId('Increase');

		triggerRerender = () => rerender(<Counter count={countState} onIncrease={() => {
			countState += 1;
		}} onDecrease={() => {
			countState -= 1;
		}}/>);

	});

	it('renders the count and buttons', () => {
		expect(countDisplay).toBeInTheDocument();
		expect(incrementButton).toBeInTheDocument();
		expect(decrementButton).toBeInTheDocument();
	});

	it('decrements the displayed value when the "decrement" button is clicked', () => {
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);

		fireEvent.click(decrementButton);

		triggerRerender();

		expect(countDisplay).toHaveTextContent('4');
	});

	it('increments the displayed value when the "increment" button is clicked', () => {

		fireEvent.click(incrementButton);

		triggerRerender();

		expect(countDisplay).toHaveTextContent('1');
	});
});

