import {lobby} from './types'

const label = 'Language'
const options = {
  en: lobby.Language.en,
  ja: lobby.Language.ja
}
const defaultValue = options.en

export const language = {
  defaultValue,
  label,
  options
}
