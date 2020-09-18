import type { BaseProps } from '../Base'

import React from 'react'

import { RawBase as Base } from '../Base'

const focusableElements = ['input', 'select', 'textarea', 'button', 'a']

export interface TouchableProps<E extends HTMLElement = HTMLButtonElement>
  extends BaseProps<E> {
  onTouch?: (e: React.MouseEvent<E> | React.KeyboardEvent<E>) => void
  disabled?: boolean
}

export const RawTouchable = <E extends HTMLElement = HTMLButtonElement>({
  as = 'button',
  children,
  tabIndex,
  disabled = false,
  onTouch,
  ...rest
}: TouchableProps<E>) => {
  const handleKeyPress = React.useCallback(
    (e: React.KeyboardEvent<E>) => {
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
    <Base<E>
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
      {...rest}
    >
      {children}
    </Base>
  )
}

export const Touchable = React.forwardRef<
  HTMLButtonElement,
  TouchableProps<HTMLButtonElement>
>((props, ref) => <RawTouchable {...props} innerRef={ref} />)
