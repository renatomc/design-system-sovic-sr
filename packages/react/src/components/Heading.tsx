import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$dark-low',

  variants: {
    size: {
      sh: {
        fontSize: '$md',
        lineHeight: '1.25rem',
      },
      hxs: {
        '@bp1': {
          fontSize: '$lg',
          lineHeight: '1.375rem',
        },
        '@bp2': {
          fontSize: '$xl',
          lineHeight: '1.5rem',
        },
      },
      hs: {
        '@bp1': {
          fontSize: '$xl',
          lineHeight: '1.5rem',
        },
        '@bp2': {
          fontSize: '$2xl',
          lineHeight: '1.75rem',
        },
      },
      hm: {
        '@bp1': {
          fontSize: '$2xl',
          lineHeight: '1.75rem',
        },
        '@bp2': {
          fontSize: '$4xl',
          lineHeight: '2.25rem',
        },
      },
      hl: {
        '@bp1': {
          fontSize: '$4xl',
          lineHeight: '2.75rem',
        },
        '@bp2': {
          fontSize: '$5xl',
          lineHeight: '2.25rem',
        },
      },
      display: {
        '@bp1': {
          fontSize: '$5xl',
          lineHeight: '2.75rem',
        },
        '@bp2': {
          fontSize: '$6xl',
          lineHeight: '3.25rem',
        },
      },
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
    size: 'display',
    weight: 'regular',
  },
})

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}

Heading.displayName = 'Heading'
