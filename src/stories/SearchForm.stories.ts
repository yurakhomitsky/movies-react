import { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from '../components';

const meta = {
	title: 'Example/SearchForm',
	component: SearchForm,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	}
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
	args: {
		searchTerm: 'Hello Word',
	},
};
