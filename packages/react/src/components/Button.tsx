import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$magenta',
        color: '$light-solid',
      },
      secondary: {
        backgroundColor: '$light-solid',
        color: '$magenta',
        border: '2px solid $magenta',
      },
      tertiary: {
        backgroundColor: '$dark-medium',
        color: '$light-solid',
      },
    },
    size: {
      sm: {
        padding: '$2 $2',
        height: 23,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}

Button.displayName = 'Button'
