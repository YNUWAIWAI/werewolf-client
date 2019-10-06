import * as village from '../../../types/village'
import en from './en.json'
import fr from './fr.json'
import it from './it.json'
import ja from './ja.json'

export const getMessages = (locale: village.Language) => {
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
