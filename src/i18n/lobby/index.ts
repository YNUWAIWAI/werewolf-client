/// <reference types="lobby" />
import en from './en'
import fr from './fr'
import it from './it'
import ja from './ja'

export const getMessages = (locale: lobby.Language) => {
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
