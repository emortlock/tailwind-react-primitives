import type {
  TailwindProps,
  InnerRef,
  ReactComponentProps,
  HTMLElementTag,
} from '../../types'
import React from 'react'
import classnames from 'classnames'

import { filterProps, getTailwindClassNames, tailwindProps } from '../../utils'

export interface BaseProps<E extends HTMLElement>
  extends TailwindProps,
    InnerRef<E> {
  as?: React.ElementType
}

export type BaseWithComponentProps<
  E extends HTMLElement = HTMLDivElement,
  T extends HTMLElementTag = 'div'
> = BaseProps<E> & ReactComponentProps<T>

const Base = <
  E extends HTMLElement = HTMLDivElement,
  T extends HTMLElementTag = 'div'
>({
  as = 'div',
  children,
  className,
  focusable,
  innerRef,
  ...rest
}: BaseWithComponentProps<E, T>) => {
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

export const RawBase = Base

export default React.forwardRef<HTMLDivElement, BaseWithComponentProps>(
  (props, ref) => <Base {...props} innerRef={ref} />,
)
