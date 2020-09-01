import type {
  FlexValue,
  HTMLElementTag,
  ReactComponentProps,
} from '../../types'
import type { BoxProps, BoxWithComponentProps } from '../Box'

import React from 'react'

import { RawBox as Box } from '../Box'

export interface FlexProps<E extends HTMLElement> extends BoxProps<E> {
  col?: boolean
  reverse?: boolean
  wrap?: boolean
  wrapReverse?: boolean
}

export type FlexWithComponentProps<
  E extends HTMLElement = HTMLDivElement,
  T extends HTMLElementTag = 'div'
> = FlexProps<E> & ReactComponentProps<T>

const Flex = <
  E extends HTMLElement = HTMLDivElement,
  T extends HTMLElementTag = 'div'
>({
  as = 'div',
  children,
  inline = false,
  inlineFlex = false,
  col = false,
  reverse = false,
  wrap = false,
  wrapReverse = false,
  ...rest
}: FlexWithComponentProps<E, T>) => {
  const el = as === 'div' && (inline || inlineFlex) ? 'span' : as

  return (
    <Box<E, T>
      as={el}
      flex={
        [
          true,
          col && !reverse && 'col',
          reverse && (col ? 'col-reverse' : 'row-reverse'),
          wrap && 'wrap',
          wrapReverse && 'wrap-reverse',
        ].filter(Boolean) as FlexValue[]
      }
      inlineFlex={inline || inlineFlex}
      {...(rest as BoxWithComponentProps<E, T>)}
    >
      {children}
    </Box>
  )
}

export const RawFlex = Flex

export default React.forwardRef<HTMLDivElement, FlexWithComponentProps>(
  (props, ref) => <Flex {...props} innerRef={ref} />,
)
