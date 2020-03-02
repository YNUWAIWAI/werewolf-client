import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SelectRobotAvatar} from '../actions'

export interface State {
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
type Action =
  | SelectRobotAvatar.ChangeCheckbox

export const initialState: State = {
  command: [
    {
      id: 'CreateNewAvatar.create',
      types: [ActionTypes.SelectRobotAvatar.CREATE]
    }
  ],
  menuItems: [
    {
      id: 'Menu.selectAvatar',
      types: [ActionTypes.App.SHOW_SELECT_ROBOT_AVATAR]
    },
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ]
}
const createNewRobotAvatar = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default createNewRobotAvatar
