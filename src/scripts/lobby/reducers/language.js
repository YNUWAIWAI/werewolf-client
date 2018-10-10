// @flow
import type {ChangeLanguage} from '../actions'
import type {Language} from 'lobby'

export type State = Language
type Action =
  | ChangeLanguage

export const initialState = 'ja'
const language = (state: State = initialState, action: Action): State => state

export default language
