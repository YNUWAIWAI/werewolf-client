import enMessages from './en'
import frMessages from './fr'
import itMessages from './it'
import jaMessages from './ja'

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
      return enMessages
    case 'fr':
      return frMessages
    case 'it':
      return itMessages
    case 'ja':
      return jaMessages
    default:
      throw Error(`${locale} is unsuported`)
  }
}
