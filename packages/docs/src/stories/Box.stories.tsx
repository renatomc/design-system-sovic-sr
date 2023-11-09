import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@sovic/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Element Box</Text>
      </>
    )
  }
}

export default meta

type Story = StoryObj<BoxProps>


export const Primary: Story = {}