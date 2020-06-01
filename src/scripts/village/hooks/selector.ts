import * as React from 'react'

export const useSelector = (initialData: number) => {
  const [selectedItem, setSelectedItem] = React.useState(initialData)
  const [length, setLength] = React.useState(0)

  const refresh = () => {
    setSelectedItem(0)
  }
  const next = () => {
    setSelectedItem((selectedItem + 1) % length)
  }
  const prev = () => {
    setSelectedItem((selectedItem - 1 + length) % length)
  }

  return {
    next,
    prev,
    refresh,
    selectedItem,
    setLength
  }
}
