import type { BaseProps } from '../Base'

import React from 'react'

import { RawBase as Base } from '../Base'
import { Box } from '../Box'

export interface ImageProps<E extends HTMLElement = HTMLImageElement>
  extends BaseProps<E> {
  aspectRatio?: number
}

export const RawImage = <E extends HTMLElement = HTMLImageElement>({
  as = 'img',
  children,
  aspectRatio = 1,
  bg,
  w = 'full',
  text,
  ...rest
}: ImageProps<E>) => (
  <Box relative w={w} text={text}>
    <Box bg={bg} style={{ paddingBottom: `${100 / aspectRatio}%` }} />
    <Base<E> as={as} absolute inset={0} w="full" {...rest} />
    {children && (
      <Box absolute inset={0} flex items="end">
        {children}
      </Box>
    )}
  </Box>
)

export const Image = React.forwardRef<
  HTMLImageElement,
  ImageProps<HTMLImageElement>
>((props, ref) => <RawImage {...props} innerRef={ref} />)
