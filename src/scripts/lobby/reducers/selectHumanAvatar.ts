import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SocketMessage} from '../actions'

export interface State {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      [key in string]: {
        readonly checked: boolean
        readonly name: string
      }
    }
  }
  readonly command: MenuItem[]
  readonly createNewAvatar: {
    readonly command: MenuItem[]
  }
  readonly menuItems: MenuItem[]
}
type Action =
  | SocketMessage

export const initialState: State = {
  avatar: {
    allIds: [],
    byId: {}
  },
  command: [],
  createNewAvatar: {
    command: [
      {
        id: 'CreateNewAvatar.create',
        types: [ActionTypes.SelectHumanAvatar.CREATE]
      }
    ]
  },
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ]
}
const selectHumanAvatar = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default selectHumanAvatar
