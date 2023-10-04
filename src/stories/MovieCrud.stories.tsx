import { Button, Dialog } from '../components';
import { Meta, StoryObj } from '@storybook/react';
import { AddNewMovieModel, MovieModel, MovieForm } from '../Movies';
import PosterImg from '../assets/Poster.png';
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

const emptyMovie: AddNewMovieModel = {
	image: PosterImg,
	name: '',
	releaseYear: '',
	genres: [],
	movieUrl: '',
	rating: 0,
	duration: '',
	description: ``
};

export const AddMovie: Story = {
	args: {
		title: 'Add Movie',
		children: <MovieForm movie={emptyMovie}/>
	}
};

const editMovie: MovieModel = {
	id: '12',
	image: PosterImg,
	name: 'Some Name',
	releaseYear: '2023-06-01',
	genres: ['Comedy'],
	movieUrl: 'url',
	rating: 8.5,
	duration: '30min',
	description: `Some Description`
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
