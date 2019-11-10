import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'

export interface State {
  readonly menuItems: MenuItem[]
}
type Action = void

export const initialState: State = {
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ]
}
const connectingToRobotPlayer = (state: State = initialState, action: Action): State => state

export default connectingToRobotPlayer
