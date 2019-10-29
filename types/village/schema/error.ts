/*
  'https://werewolf.world/village/schema/0.3/error.json'
*/
import {
  LanguageMap,
  Severity
} from '..'

export interface Error {
  content: LanguageMap
  isFromServer: boolean
  severity: Severity
  source: string
}
