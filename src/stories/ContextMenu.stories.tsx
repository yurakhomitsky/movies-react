import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from '../components';


const meta = {
	title: 'Example/ContextMenu',
	component: ContextMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Context: Story = {
	args: {
		items: [{ label: 'Edit', action: () => {} }, { label: 'Delete', action: () => {} }],
	},
};


