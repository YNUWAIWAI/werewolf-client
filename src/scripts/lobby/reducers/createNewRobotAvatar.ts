import * as ActionTypes from '../constants/ActionTypes'
import {
  AvatarImageSelect,
  CreateNewRobotAvatar
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {lobby} from '../types'

export interface State {
  readonly automation: lobby.Automation
  readonly command: MenuItem[]
  readonly image: string
  readonly language: lobby.Language
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly visibleAvatarImageSelect: boolean
}
type Action =
  | AvatarImageSelect.CloseModal
  | AvatarImageSelect.SelectAvatar
  | CreateNewRobotAvatar.ShowAvatarImageSelect
  | CreateNewRobotAvatar.ChangeAutomation
  | CreateNewRobotAvatar.ChangeAvatarLangauge
  | CreateNewRobotAvatar.ChangeAvatarName

export const initialState: State = {
  automation: lobby.Automation.full,
  command: [
    {
      id: 'CreateNewAvatar.create',
      types: [ActionTypes.SelectRobotAvatar.CREATE]
    }
  ],
  image: 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
  language: lobby.Language.en,
  menuItems: [
    {
      id: 'Menu.selectAvatar',
      types: [ActionTypes.App.SHOW_SELECT_ROBOT_AVATAR]
    },
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ],
  name: '',
  visibleAvatarImageSelect: false
}
const createNewRobotAvatar = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.AvatarImageSelect.CLOSE_MODAL:
      return {
        ... state,
        visibleAvatarImageSelect: false
      }
    case ActionTypes.AvatarImageSelect.SELECT_AVATAR:
      if (state.visibleAvatarImageSelect) {
        return {
          ... state,
          image: action.image
        }
      }

      return state
    case ActionTypes.CreateNewRobotAvatar.SHOW_AVATAR_IMAGE_SELECT:
      return {
        ... state,
        visibleAvatarImageSelect: true
      }
    case ActionTypes.CreateNewRobotAvatar.CHANGE_AUTOMATION:
      return {
        ... state,
        automation: action.automation
      }
    case ActionTypes.CreateNewRobotAvatar.CHANGE_AVATAR_LANGUAGE:
      return {
        ... state,
        language: action.language
      }
    case ActionTypes.CreateNewRobotAvatar.CHANGE_AVATAR_NAME:
      return {
        ... state,
        name: action.name
      }
    default:
      return state
  }
}

export default createNewRobotAvatar
