import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('span', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$dark-low',

  variants: {
    size: {
      md: { fontSize: '$md' },
      sm: { fontSize: '$sm' },
      xs: { fontSize: '$xs' },
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'regular',
  },
})

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType
}

Text.displayName = 'Text'
