// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem} from 'lobby'

export type State = {
  +menuItems: MenuItem[]
}
type Action = any

export const initialState = {
  menuItems: [
    {
      text: 'Return to the Main Page',
      types: [ActionTypes.SHOW_MAIN]
    }
  ]
}
const settings = (state: State = initialState, action: Action): State => state

export default settings
