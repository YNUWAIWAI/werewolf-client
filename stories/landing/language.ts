import {Language} from '../../src/i18n/landing'

const label = 'Language'
const options = {
  en: Language.en,
  ja: Language.ja
}
const defaultValue = options.en

export const language = {
  defaultValue,
  label,
  options
}
