import type { BaseProps, BaseWithComponentProps } from '../Base'
import type { HTMLElementTag, ReactComponentProps } from 'types'

import React from 'react'

import { RawBase as Base } from '../Base'

const focusableElements = ['input', 'select', 'textarea', 'button', 'a']

export interface TouchableProps<E extends HTMLElement> extends BaseProps<E> {
  onTouch?: (e: React.MouseEvent | React.KeyboardEvent) => void
  disabled?: boolean
}

export type TouchableWithComponentProps<
  E extends HTMLElement = HTMLButtonElement,
  T extends HTMLElementTag = 'button'
> = TouchableProps<E> & ReactComponentProps<T>

const Touchable = <
  E extends HTMLElement = HTMLButtonElement,
  T extends HTMLElementTag = 'button'
>({
  as = 'button',
  children,
  tabIndex,
  disabled = false,
  onTouch,
  ...rest
}: TouchableWithComponentProps<E, T>) => {
  const handleKeyPress = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (
        onTouch &&
        (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')
      ) {
        e.preventDefault()
        onTouch(e)
      }
    },
    [onTouch],
  )

  const isSemantic = typeof as === 'string' && focusableElements.includes(as)

  return (
    <Base<E, T>
      as={as}
      select="none"
      cursor={disabled ? 'default' : 'pointer'}
      pointerEvents={disabled ? 'none' : undefined}
      focusable
      role={!isSemantic ? 'button' : undefined}
      tabIndex={tabIndex || (!isSemantic && !disabled ? 0 : undefined)}
      opacity={disabled ? 50 : undefined}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={!disabled ? onTouch : undefined}
      onKeyPress={!isSemantic && !disabled ? handleKeyPress : undefined}
      {...(rest as BaseWithComponentProps<E, T>)}
    >
      {children}
    </Base>
  )
}

export const RawTouchable = Touchable

export default React.forwardRef<HTMLButtonElement, TouchableWithComponentProps>(
  (props, ref) => <Touchable {...props} innerRef={ref} />,
)
