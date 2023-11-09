import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@sovic/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example Text',
    size: 'md',
    weight: 'regular'
  },
  argTypes: {
    size: {
      options: ['md','sm','xs'],
      control: {
        type: 'inline-radio'
      }
    },
    weight: {
      options: ['regular', 'medium', 'bold'],
      control: {
        type: 'inline-radio'
      }
    }
  }

}

export default meta

type Story = StoryObj<TextProps>

export const BodyM: Story = {
  args: {
    as: 'span',
    children: 'Body M',
    size: 'md'
  }
}

export const BodyP: Story = {
  args: {
    as: 'span',
    children: 'Body P',
    size: 'sm'
  }
}

export const Fontnote: Story = {
  args: {
    as: 'span',
    children: 'Fontnote',
    size: 'xs'
  }
}
