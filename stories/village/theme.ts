import {village} from './types'

const label = 'Theme'
const options = {
  dark: village.Theme.dark,
  light: village.Theme.light
}
const defaultValue = options.light

export const theme = {
  defaultValue,
  label,
  options
}
