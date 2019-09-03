import * as lobby from 'types/lobby'

const label = 'Language'
const options = {
  en: lobby.Language.en,
  ja: lobby.Language.ja
}
const defaultValue = options.en

export default {
  defaultValue,
  label,
  options
}
