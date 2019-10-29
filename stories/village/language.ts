import {village} from './types'

const label = 'Language'
const options = {
  en: village.Language.en,
  ja: village.Language.ja
}
const defaultValue = options.en

export const language = {
  defaultValue,
  label,
  options
}
