import { Button, Dialog } from '../components';
import { Meta, StoryObj } from '@storybook/react';
import { AddNewMovieModel, MovieModel, MovieForm } from '../Movies';
import PosterImg from '../assets/Poster.png';

const meta = {
	title: 'Example/MovieCrud',
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
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
	render: () => {
		return <Dialog title={'Add Movie'} >
			<MovieForm movie={emptyMovie} />
		</Dialog>
	}
};

const editMovie: MovieModel = {
	id: '12',
	image: PosterImg,
	name: 'Some Name',
	releaseYear: '2023',
	genres: ['Comedy'],
	movieUrl: 'url',
	rating: 8.5,
	duration: '30min',
	description: `Some Description`
};

export const EditMovie: Story = {
	render: () => {
		return <Dialog title={'Edit Movie'} >
			<MovieForm movie={editMovie} />
		</Dialog>
	}
};

export const DeleteMovie: Story = {
	render: () => {
		return <Dialog title={'Delete Movie'} >
			<>
				<p>Are you sure want to delete this Movie?</p>
				<Button primary>Confirm</Button>
			</>
		</Dialog>
	}
};
