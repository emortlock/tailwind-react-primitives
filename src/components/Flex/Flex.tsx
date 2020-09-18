import type { FlexValue } from '../../types'
import type { BoxProps } from '../Box'

import React from 'react'

import { RawBox as Box } from '../Box'

export interface FlexProps<E extends HTMLElement = HTMLDivElement>
  extends Omit<BoxProps<E>, 'wrap'> {
  col?: boolean
  reverse?: boolean
  wrap?: boolean
  wrapReverse?: boolean
}

export const RawFlex = <E extends HTMLElement = HTMLDivElement>({
  as = 'div',
  children,
  inline = false,
  inlineFlex = false,
  col = false,
  reverse = false,
  wrap = false,
  wrapReverse = false,
  ...rest
}: FlexProps<E>) => {
  const el = as === 'div' && (inline || inlineFlex) ? 'span' : as

  return (
    <Box<E>
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
      {...rest}
    >
      {children}
    </Box>
  )
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps<HTMLDivElement>>(
  (props, ref) => <RawFlex {...props} innerRef={ref} />,
)
