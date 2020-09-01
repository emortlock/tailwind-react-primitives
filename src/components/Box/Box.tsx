import type { HTMLElementTag, ReactComponentProps } from '../../types'
import type { BaseProps, BaseWithComponentProps } from '../Base'

import React from 'react'

import { RawBase as Base } from '../Base'

export type BoxProps<E extends HTMLElement> = BaseProps<E>

export type BoxWithComponentProps<
  E extends HTMLElement = HTMLDivElement,
  T extends HTMLElementTag = 'div'
> = BoxProps<E> & ReactComponentProps<T>

const Box = <
  E extends HTMLElement = HTMLDivElement,
  T extends HTMLElementTag = 'div'
>({
  as = 'div',
  children,
  inline = false,
  inlineBlock = false,
  ...rest
}: BoxWithComponentProps<E, T>) => {
  const el = as === 'div' && (inline || inlineBlock) ? 'span' : as

  return (
    <Base<E, T>
      as={el}
      inline={inline}
      inlineBlock={inlineBlock}
      {...(rest as BaseWithComponentProps<E, T>)}
    >
      {children}
    </Base>
  )
}

export const RawBox = Box

export default React.forwardRef<HTMLDivElement, BoxWithComponentProps>(
  (props, ref) => <Box {...props} innerRef={ref} />,
)
