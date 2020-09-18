import type { BaseProps } from '../Base'

import React from 'react'

import { RawBase as Base } from '../Base'
import { getAsArray } from '../../utils'

export interface TextProps<E extends HTMLElement = HTMLSpanElement>
  extends Omit<BaseProps<E>, 'size'> {
  bold?: boolean
  size?: string
  color?: string
  weight?: string
}

export const RawText = <E extends HTMLElement = HTMLSpanElement>({
  as = 'span',
  children,
  bold = false,
  font,
  text,
  color,
  size,
  weight,
  leading = 'normal',
  ...rest
}: TextProps<E>) => {
  const fontValue = [...getAsArray(font), bold ? 'bold' : weight].filter(
    Boolean,
  ) as string[]

  const textValue = [...getAsArray(text), color, size].filter(
    Boolean,
  ) as string[]

  return (
    <Base<E>
      as={as}
      font={fontValue}
      text={textValue}
      leading={leading}
      {...rest}
    >
      {children}
    </Base>
  )
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (props, ref) => <RawText {...props} innerRef={ref} />,
)
