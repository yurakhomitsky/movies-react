import { render, fireEvent } from '@testing-library/react';
import { ContextMenu } from './ContextMenu';
import { HTMLAttributes } from 'react';


describe('ContextMenu', () => {

	const mockItems = [
		{ label: 'Option 1', action: jest.fn() },
		{ label: 'Option 2', action: jest.fn() },
	];

	it('renders the ContextMenu component', () => {
		const { container } = render(
			<ContextMenu items={mockItems}>
				<div>Test Element</div>
			</ContextMenu>
		);
		expect(container).toBeInTheDocument();
	});

	it('displays the context menu on right-click for a Component', () => {

		const MyComponent = ({onContextMenu}: HTMLAttributes<HTMLDivElement>) => {
			return <div  onContextMenu={onContextMenu} data-testid="context-menu-target">Right-click me</div>
		}
		const { getByText, getByTestId } = render(
			<ContextMenu items={mockItems}>
				<MyComponent></MyComponent>
			</ContextMenu>
		);

		const contextMenuTarget = getByTestId('context-menu-target');
		fireEvent.contextMenu(contextMenuTarget);

		const contextMenu = getByText('Option 1');
		expect(contextMenu).toBeInTheDocument();
	});

	it('displays the context menu on right-click for plain HTML', () => {
		const { getByText, getByTestId } = render(
			<ContextMenu items={mockItems}>
				<div data-testid="context-menu-target">Right-click me</div>
			</ContextMenu>
		);

		const contextMenuTarget = getByTestId('context-menu-target');
		fireEvent.contextMenu(contextMenuTarget);

		const contextMenu = getByText('Option 1');
		expect(contextMenu).toBeInTheDocument();
	});

	it('hides the context menu on outside click', () => {
		const { getByTestId, queryByText } = render(
			<ContextMenu items={mockItems}>
				<div data-testid="context-menu-target">Right-click me</div>
			</ContextMenu>
		);

		const contextMenuTarget = getByTestId('context-menu-target');
		fireEvent.contextMenu(contextMenuTarget);

		const contextMenu = queryByText('Option 1');
		expect(contextMenu).toBeInTheDocument();

		// Simulate an outside click
		fireEvent.click(document);

		const hiddenContextMenu = queryByText('Option 1');
		expect(hiddenContextMenu).not.toBeInTheDocument();
	});

	it('calls the action function when a menu item is clicked', () => {
		const { getByTestId, getByText } = render(
			<ContextMenu items={mockItems}>
				<div data-testid="context-menu-target">Right-click me</div>
			</ContextMenu>
		);

		const contextMenuTarget = getByTestId('context-menu-target');
		fireEvent.contextMenu(contextMenuTarget);

		const option1 = getByText('Option 1');
		fireEvent.click(option1);

		expect(mockItems[0].action).toHaveBeenCalled();
	});
});
