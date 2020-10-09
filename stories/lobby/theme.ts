import {lobby} from './types'

const label = 'Theme'
const options = {
  dark: lobby.Theme.dark,
  light: lobby.Theme.light
}
const defaultValue = options.dark

export const theme = {
  defaultValue,
  label,
  options
}
