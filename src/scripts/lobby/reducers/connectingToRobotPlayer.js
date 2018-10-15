// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem} from 'lobby'

export type State = {
  +menuItems: MenuItem[]
}
type Action = void

export const initialState = {
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.SHOW_MAIN]
    }
  ]
}
const connectingToRobotPlayer = (state: State = initialState, action: Action): State => state

export default connectingToRobotPlayer
