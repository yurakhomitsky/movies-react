import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';


const meta = {
  title: 'Example/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
};

