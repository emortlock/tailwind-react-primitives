import type { TailwindProps } from '../../types'
import React from 'react'
import classnames from 'classnames'

import { filterProps, getTailwindClassNames, tailwindProps } from '../../utils'

export interface BaseProps<E extends HTMLElement = HTMLDivElement>
  extends TailwindProps,
    Omit<React.HTMLProps<E>, 'as' | 'list' | 'content'> {
  as?: React.ElementType
  innerRef?:
    | ((instance: E | null) => void)
    | React.MutableRefObject<E | null>
    | null
}

export const RawBase = <E extends HTMLElement = HTMLDivElement>({
  as = 'div',
  children,
  className,
  focusable,
  innerRef,
  ...rest
}: BaseProps<E>) => {
  const Component = as

  const focusProps = focusable
    ? {
        'outline-focus': 'none',
        'shadow-focus': 'outline',
      }
    : {}

  return (
    <Component
      {...filterProps(rest as Record<string, unknown>, tailwindProps)}
      className={classnames(
        getTailwindClassNames(
          {
            ...rest,
            ...focusProps,
          },
          // TODO: { prefix: theme.prefix },
        ),
        className,
      )}
      ref={innerRef}
    >
      {children}
    </Component>
  )
}

export const Base = React.forwardRef<HTMLDivElement, BaseProps<HTMLDivElement>>(
  (props, ref) => <RawBase {...props} innerRef={ref} />,
)
