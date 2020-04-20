import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace CreateNewRobotAvatar {
  type ChangeAutomation = {
    automation: lobby.Automation
    type: ActionTypes.CreateNewRobotAvatar.CHANGE_AUTOMATION
  }
  type ChangeAvatarLangauge = {
    language: lobby.Language
    type: ActionTypes.CreateNewRobotAvatar.CHANGE_AVATAR_LANGUAGE
  }
  type ChangeAvatarName = {
    name: string
    type: ActionTypes.CreateNewRobotAvatar.CHANGE_AVATAR_NAME
  }
  type ShowAvatarImageSelect = {
    image: string
    type: ActionTypes.CreateNewRobotAvatar.SHOW_AVATAR_IMAGE_SELECT
  }
}

const changeAutomation = (automation: lobby.Automation): CreateNewRobotAvatar.ChangeAutomation => ({
  automation,
  type: ActionTypes.CreateNewRobotAvatar.CHANGE_AUTOMATION
})
const changeAvatarLanguage = (language: lobby.Language): CreateNewRobotAvatar.ChangeAvatarLangauge => ({
  language,
  type: ActionTypes.CreateNewRobotAvatar.CHANGE_AVATAR_LANGUAGE
})
const changeAvatarName = (name: string): CreateNewRobotAvatar.ChangeAvatarName => ({
  name,
  type: ActionTypes.CreateNewRobotAvatar.CHANGE_AVATAR_NAME
})
const showAvatarImageSelect = (image: string): CreateNewRobotAvatar.ShowAvatarImageSelect => ({
  image,
  type: ActionTypes.CreateNewRobotAvatar.SHOW_AVATAR_IMAGE_SELECT
})

export const createNewRobotAvatar = {
  changeAutomation,
  changeAvatarLanguage,
  changeAvatarName,
  showAvatarImageSelect
}
