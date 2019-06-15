import enMessages from './en.json'
import frMessages from './fr.json'
import itMessages from './it.json'
import jaMessages from './ja.json'

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
