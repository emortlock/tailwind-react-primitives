import includes from 'lodash.includes'

export default <T extends {} = Record<string, unknown>>(
  componentProps: T,
  filterList: string[],
) =>
  Object.keys(componentProps).reduce((newProps, prop) => {
    if (includes(filterList, prop)) {
      return newProps
    }
    return {
      ...newProps,
      [prop]: componentProps[prop as keyof T],
    }
  }, {})
