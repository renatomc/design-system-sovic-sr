import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$dark-low',
  border: '1px solid $dark-high',
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
