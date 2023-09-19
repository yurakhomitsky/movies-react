import { render, fireEvent } from '@testing-library/react';
import { ContextMenu } from './ContextMenu';

describe('ContextMenu', () => {

	const mockItems = [
		{ label: 'Option 1', action: jest.fn() },
		{ label: 'Option 2', action: jest.fn() },
	];

	it('renders the ContextMenu component', () => {
		const { container } = render(
			<ContextMenu items={mockItems} />
		);
		expect(container).toBeInTheDocument();
	});

	it('displays the context menu on button click', () => {
		const { getByText, getByTestId } = render(
			<ContextMenu items={mockItems} />
		);

		const contextMenuButton = getByTestId('context-menu-btn');
		fireEvent.click(contextMenuButton);

		const contextMenu = getByText('Option 1');
		expect(contextMenu).toBeInTheDocument();
	});

	it('calls the action function when a menu item is clicked', () => {
		const { getByTestId, getByText } = render(
			<ContextMenu items={mockItems} />
		);

		const contextMenuButton = getByTestId('context-menu-btn');
		fireEvent.click(contextMenuButton);

		const option1 = getByText('Option 1');
		fireEvent.click(option1);

		expect(mockItems[0].action).toHaveBeenCalled();
	});
});
