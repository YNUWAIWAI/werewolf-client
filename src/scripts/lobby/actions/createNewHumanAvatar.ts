import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace CreateNewHumanAvatar {
  type ChangeAvatarLangauge = {
    language: lobby.Language
    type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_LANGUAGE
  }
  type ChangeAvatarName = {
    name: string
    type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_NAME
  }
  type ShowAvatarImageSelect = {
    image: string
    type: ActionTypes.CreateNewHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
  }
}

const changeAvatarLanguage = (language: lobby.Language): CreateNewHumanAvatar.ChangeAvatarLangauge => ({
  language,
  type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_LANGUAGE
})
const changeAvatarName = (name: string): CreateNewHumanAvatar.ChangeAvatarName => ({
  name,
  type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_NAME
})
const showAvatarImageSelect = (image: string): CreateNewHumanAvatar.ShowAvatarImageSelect => ({
  image,
  type: ActionTypes.CreateNewHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
})

export const createNewHumanAvatar = {
  changeAvatarLanguage,
  changeAvatarName,
  showAvatarImageSelect
}
