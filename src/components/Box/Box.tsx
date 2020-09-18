import type { BaseProps } from '../Base'

import React from 'react'

import { RawBase as Base } from '../Base'

export type BoxProps<E extends HTMLElement = HTMLDivElement> = BaseProps<E>

export const RawBox = <E extends HTMLElement = HTMLDivElement>({
  as = 'div',
  children,
  inline = false,
  inlineBlock = false,
  wrap,
  ...rest
}: BaseProps<E>) => {
  const el = as === 'div' && (inline || inlineBlock) ? 'span' : as

  return (
    <Base<E> as={el} inline={inline} inlineBlock={inlineBlock} {...rest}>
      {children}
    </Base>
  )
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <RawBox {...props} innerRef={ref} />
))
