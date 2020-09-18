import type { TailwindProps } from '../../types'

import React from 'react'
import classnames from 'classnames'

import { filterProps, getTailwindClassNames, tailwindProps } from '../../utils'

export interface SvgProps<E extends SVGElement = SVGElement>
  extends TailwindProps,
    Omit<
      React.SVGProps<E>,
      'pointerEvents' | 'overflow' | 'focusable' | 'cursor'
    > {
  as?: React.ElementType
  innerRef?:
    | ((instance: E | null) => void)
    | React.MutableRefObject<E | null>
    | null
}

export const RawSvg = <E extends SVGElement = SVGElement>({
  as = 'div',
  children,
  className,
  focusable,
  innerRef,
  ...rest
}: SvgProps<E>) => {
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

export const Svg = React.forwardRef<SVGElement, SvgProps<SVGElement>>(
  (props, ref) => <RawSvg {...props} innerRef={ref} />,
)
