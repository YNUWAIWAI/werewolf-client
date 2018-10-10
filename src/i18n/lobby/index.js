// @flow
import type {Language} from 'village'
import en from './en'
import fr from './fr'
import it from './it'
import ja from './ja'

export const getMessages = (locale: Language) => {
  switch (locale) {
    case 'en':
      return en
    case 'fr':
      return fr
    case 'it':
      return it
    case 'ja':
      return ja
    default:
      throw Error(`${locale} is unsuported`)
  }
}
