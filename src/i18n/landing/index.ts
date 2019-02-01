import en from './en'
import fr from './fr'
import it from './it'
import ja from './ja'

export const enum Language {
  en = 'en',
  fr = 'fr',
  it = 'it',
  ja = 'ja'
}
interface Messages {
  [id: string]: string
}

export const getMessages = (locale: Language): Messages => {
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
