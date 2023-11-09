import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@sovic/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custon title'
  }
}

export default meta

type Story = StoryObj<HeadingProps>

export const Display: Story = {
  args: {
    as: 'h1',
    children: 'Display',
    size: 'display',
    weight: 'regular'
  },
  argTypes: {
    size: {
      options: ['sh','hxs','hs','hm','hl','display'],
      control: {
        type: 'select'
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

export const HeadingL: Story = {
  args: {
    as: 'h1',
    children: 'Heading L',
    size: 'hl'
  }
}

export const HeadingM: Story = {
  args: {
    as: 'h1',
    children: 'Heading M',
    size: 'hm'
  }
}

export const HeadingS: Story = {
  args: {
    as: 'h1',
    children: 'Heading S',
    size: 'hs'
  }
}

export const HeadingXS: Story = {
  args: {
    as: 'h1',
    children: 'Heading XS',
    size: 'hxs'
  }
}

export const Subheading: Story = {
  args: {
    as: 'h2',
    children: 'Subheading',
    size: 'sh'
  }
}


