/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types'

const display = {
  block: PropTypes.bool,
  hidden: PropTypes.bool,
  inline: PropTypes.bool,
  inlineBlock: PropTypes.bool,
  table: PropTypes.bool,
  tableCell: PropTypes.bool,
  tableRow: PropTypes.bool,
}

const floats = {
  clearfix: PropTypes.bool,
  float: PropTypes.oneOf(['none', 'right', 'left']),
}

const overflow = {
  overflow: PropTypes.oneOf(['hidden', 'auto', 'scroll']),
  overflowX: PropTypes.oneOf(['hidden', 'auto', 'scroll']),
  overflowY: PropTypes.oneOf(['hidden', 'auto', 'scroll']),
}

const position = {
  absolute: PropTypes.bool,
  fixed: PropTypes.bool,
  inset: PropTypes.oneOfType([
    PropTypes.oneOf(['0', 'y-0', 'x-0', 'auto']),
    PropTypes.number,
  ]),
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  relative: PropTypes.bool,
  static: PropTypes.bool,
}

const zIndex = {
  z: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

const typography = {
  align: PropTypes.string,
  break: PropTypes.oneOf(['words', 'normal']),
  capitalize: PropTypes.bool,
  font: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  italic: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tracking: PropTypes.string,
  leading: PropTypes.string,
  lineThrough: PropTypes.bool,
  lowercase: PropTypes.bool,
  normalCase: PropTypes.bool,
  noUnderline: PropTypes.bool,
  notItalic: PropTypes.bool,
  truncate: PropTypes.bool,
  underline: PropTypes.bool,
  uppercase: PropTypes.bool,
  whitespace: PropTypes.oneOf([
    'normal',
    'no-wrap',
    'pre',
    'pre-line',
    'pre-wrap',
  ]),
}

const backgrounds = {
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

const borders = {
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  borderB: PropTypes.number,
  borderL: PropTypes.number,
  borderR: PropTypes.number,
  borderT: PropTypes.number,
  rounded: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedB: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedBl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedBr: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedL: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedR: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedT: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedTl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  roundedTr: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

const flexValues = [
  true,
  'row',
  'row-reverse',
  'col',
  'col-reverse',
  'no-wrap',
  'wrap',
  'wrap-reverse',
  'initial',
  1,
  'auto',
  'none',
  'grow',
  'shrink',
  'grow-0',
  'shrink-0',
]

const flexAlignment = ['start', 'center', 'end']

const flex = {
  content: PropTypes.oneOf([...flexAlignment, 'between', 'around']),
  flex: PropTypes.oneOfType([
    PropTypes.oneOf(flexValues),
    PropTypes.arrayOf(PropTypes.oneOf(flexValues)),
  ]),
  inlineFlex: PropTypes.bool,
  items: PropTypes.oneOf([...flexAlignment, 'stretch', 'baseline']),
  self: PropTypes.oneOf([...flexAlignment, 'auto', 'stretch']),
  justify: PropTypes.oneOf([...flexAlignment, 'between', 'around']),
}

const spacingShape = {
  t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  r: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  l: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const spacing = {
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(spacingShape),
  ]),
  nm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(spacingShape),
  ]),
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(spacingShape),
  ]),
}

const sizing = {
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxH: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minH: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxW: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minW: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const misc = {
  container: PropTypes.bool,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  list: PropTypes.oneOf(['none', 'list', 'decimal']),
  outline: PropTypes.string,
  appearance: PropTypes.string,
  select: PropTypes.string,
  pointerEvents: PropTypes.string,
  fill: PropTypes.string,
  cursor: PropTypes.oneOf([
    'auto',
    'default',
    'pointer',
    'wait',
    'text',
    'move',
    'not-allowed',
  ]),
}

const plugins = {
  visuallyHidden: PropTypes.bool,
  visuallyHiddenFocusable: PropTypes.bool,
  focusable: PropTypes.bool, // Helper prop to apply focus ring classes
}

export const propTypes = {
  ...display,
  ...floats,
  ...overflow,
  ...position,
  ...zIndex,
  ...typography,
  ...backgrounds,
  ...borders,
  ...flex,
  ...spacing,
  ...sizing,
  ...misc,
  ...plugins,
}

/**
 * Custom Tailwind `variant:` classes that customise when a style is applied
 * TODO: Should handle custom breakpoints
 */
export const propVariants = ['hover', 'focus', 'hocus', 'sm', 'md', 'lg', 'xl']

/**
 *  Custom QoL props that don't follow the normal transformation conventions
 */
export const helperPropsMap = {
  'w-auto': ['flex-1'],
  'focusable': ['focus:outline-none', 'focus:shadow-outline'],
  'size': ['text'],
  'color': ['text'],
  'weight': ['font'],
  'bold': ['font-bold'],
}

export default [
  ...Object.keys(propTypes),
  ...propVariants.reduce(
    (variantProps, variant) => [
      ...variantProps,
      ...Object.keys(propTypes).map((prop) => `${prop}-${variant}`),
    ],
    [] as string[],
  ),
]
