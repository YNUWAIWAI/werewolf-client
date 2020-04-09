import * as ActionTypes from '../constants/ActionTypes'
import {CreateNewHumanAvatar} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {lobby} from '../types'

export interface State {
  readonly command: MenuItem[]
  readonly image: string
  readonly language: lobby.Language
  readonly menuItems: MenuItem[]
  readonly name: string
}
type Action =
  | CreateNewHumanAvatar.ChangeAvatarImage
  | CreateNewHumanAvatar.ChangeAvatarLangauge
  | CreateNewHumanAvatar.ChangeAvatarName

export const initialState: State = {
  command: [
    {
      id: 'CreateNewAvatar.create',
      types: [ActionTypes.SelectRobotAvatar.CREATE]
    }
  ],
  image: '',
  language: lobby.Language.en,
  menuItems: [
    {
      id: 'Menu.selectAvatar',
      types: [ActionTypes.App.SHOW_SELECT_HUMAN_AVATAR]
    },
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ],
  name: ''
}
const createNewHumanAvatar = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_IMAGE:
      return {
        ... state,
        image: action.image
      }
    case ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_LANGUAGE:
      return {
        ... state,
        language: action.language
      }
    case ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_NAME:
      return {
        ... state,
        name: action.name
      }
    default:
      return state
  }
}

export default createNewHumanAvatar
