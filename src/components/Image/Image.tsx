import type { HTMLElementTag, ReactComponentProps } from '../../types'
import type { BaseProps, BaseWithComponentProps } from '../Base'

import React from 'react'

import { RawBase as Base } from '../Base'
import { Box } from '../Box'

export interface ImageProps<E extends HTMLElement> extends BaseProps<E> {
  aspectRatio?: number
}

export type ImageWithComponentProps<
  E extends HTMLElement = HTMLImageElement,
  T extends HTMLElementTag = 'img'
> = ImageProps<E> & ReactComponentProps<T>

const Image = <
  E extends HTMLElement = HTMLImageElement,
  T extends HTMLElementTag = 'img'
>({
  as = 'img',
  children,
  aspectRatio = 1,
  bg,
  w = 'full',
  text,
  ...rest
}: ImageWithComponentProps<E, T>) => (
  <Box relative w={w} text={text}>
    <Box bg={bg} style={{ paddingBottom: `${100 / aspectRatio}%` }} />
    <Base<E, T>
      as={as}
      absolute
      inset={0}
      w="full"
      {...(rest as BaseWithComponentProps<E, T>)}
    />
    {children && (
      <Box absolute inset={0} flex items="end">
        {children}
      </Box>
    )}
  </Box>
)

export const RawImage = Image

export default React.forwardRef<HTMLImageElement, ImageWithComponentProps>(
  (props, ref) => <Image {...props} innerRef={ref} />,
)
