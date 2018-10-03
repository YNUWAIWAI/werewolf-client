// @flow
import type {Language} from 'village'
import en from './en'
import ja from './ja'

export const getMessages = (locale: Language) => {
  switch (locale) {
    case 'en':
      return en
    case 'ja':
      return ja
    default:
      throw Error(`${locale} is unsuported`)
  }
}
