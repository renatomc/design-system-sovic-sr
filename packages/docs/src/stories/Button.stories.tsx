import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@sovic/react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Example Button',
    variant: 'primary',
    size: 'md'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio'
      }
    },
    onClick: {
      action: 'click'
    }
  }
}

export default meta

type Story = StoryObj<ButtonProps>


export const Primary: Story = {
}

export const Secondary: Story = {
  args: {
   variant: 'secondary'
  }
}

export const Tertiary: Story = {
  args: {
   variant: 'tertiary'
  }
}