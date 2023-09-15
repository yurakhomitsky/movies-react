import { Meta, StoryObj } from '@storybook/react';
import { GenreSelect } from '../components';

const meta = {
	title: 'Example/GenreSelect',
	component: GenreSelect,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListOfGenres: Story = {
	args: {
		genres: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
		selectedGenre: null,
	},
};

export const SelectedGenre: Story = {
	args: {
		genres: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
		selectedGenre: 'Comedy',
	},
};
