import type { ReactComponentProps, HTMLElementTag } from '../../types'
import type { BaseProps, BaseWithComponentProps } from '../Base'

import React from 'react'

import { RawBase } from '../Base'
import { getAsArray } from '../../utils'

export interface TextProps<E extends HTMLElement> extends BaseProps<E> {
  bold?: boolean
  size?: string
  color?: string
  weight?: string
}

export type TextWithComponentProps<
  E extends HTMLElement = HTMLSpanElement,
  T extends HTMLElementTag = 'span'
> = TextProps<E> & ReactComponentProps<T>

const Text = <
  E extends HTMLElement = HTMLSpanElement,
  T extends HTMLElementTag = 'span'
>({
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
}: TextWithComponentProps<E, T>) => {
  const fontValue = [...getAsArray(font), bold ? 'bold' : weight].filter(
    Boolean,
  ) as string[]

  const textValue = [...getAsArray(text), color, size].filter(
    Boolean,
  ) as string[]

  return (
    <RawBase<E, T>
      as={as}
      font={fontValue}
      text={textValue}
      leading={leading}
      {...(rest as BaseWithComponentProps<E, T>)}
    >
      {children}
    </RawBase>
  )
}

export const RawText = Text

export default React.forwardRef<HTMLSpanElement, TextWithComponentProps>(
  (props, ref) => <Text {...props} innerRef={ref} />,
)
