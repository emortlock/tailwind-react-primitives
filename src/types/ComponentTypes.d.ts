export type ReactComponentProps<T extends keyof JSX.IntrinsicElements> = Omit<
  React.ComponentProps<T>,
  'ref'
>

export type HTMLElementTag = keyof JSX.IntrinsicElements

export type InnerRef<E extends HTMLElement = HTMLDivElement> = {
  innerRef?:
    | ((instance: E | null) => void)
    | React.MutableRefObject<E | null>
    | null
}
