import type { Meta, StoryObj } from '@storybook/react';
import { ApplicationName } from '../components';


const meta = {
	title: 'Example/ApplicationName',
	component: ApplicationName,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		onClick: {
			description: 'Optional click handler'
		}
	},
	args: {

	}
} satisfies Meta<typeof ApplicationName>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Name: Story = {
};


