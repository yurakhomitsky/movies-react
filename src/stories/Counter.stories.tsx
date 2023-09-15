import { Meta, StoryObj } from '@storybook/react';
import { Counter } from '../Counter/Counter.tsx';
import { useState } from 'react';

const meta = {
	title: 'Example/Counter',
	component: Counter,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {

	},
	args: {

	}
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CounterStory: Story = {
	args: {
		count: 1
	},
	render: function Render ({ count, })  {
		const [counter, setCounter] = useState(count);

		return <Counter count={counter} onIncrease={() => setCounter((prev) => prev + 1)} onDecrease={() => setCounter((prev) => prev -1)}></Counter>
	}
};
