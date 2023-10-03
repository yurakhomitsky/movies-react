import { Button, Dialog } from '../components';
import { Meta, StoryObj } from '@storybook/react';
import { MovieModel, MovieForm } from '../Movies';
import { useState } from 'react';

const meta = {
	title: 'Example/MovieCrud',
	component: Dialog,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		children: {
			type: 'string'
		}
	},
	render: function Render({ title, children }) {
		const [isOpen, setIsOpen] = useState(false);
		return <>
			<button type={'button'} onClick={() => setIsOpen(true)}>Toggle</button>
			{isOpen && <Dialog title={title} onClose={() => setIsOpen(false)}>
				{children}
      </Dialog>}
		</>;
	}
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddMovie: Story = {
	args: {
		title: 'Add Movie',
		children: <MovieForm />
	}
};

const editMovie: MovieModel = {
	id: 12,
	title: 'Some Name',
	release_date: '2023-06-01',
	genres: ['Comedy'],
	poster_path: 'url',
	vote_average: 8.5,
	runtime: 30,
	overview: `Some Description`,
	vote_count: 2,
	tagline: '',
	budget: 2,
	revenue: 2
};

export const EditMovie: Story = {
	args: {
		title: 'Edit Movie',
		children: <MovieForm movie={editMovie}/>
	}
};

export const DeleteMovie: Story = {
	args: {
		title: 'Delete Movie',
		children: <>
			<p>Are you sure want to delete this Movie?</p>
			<Button primary>Confirm</Button>
		</>
	}
};
