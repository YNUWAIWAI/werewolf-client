import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace CreateNewHumanAvatar {
  type ChangeAvatarImage = {
    image: string
    type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_IMAGE
  }
  type ChangeAvatarLangauge = {
    language: lobby.Language
    type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_LANGUAGE
  }
  type ChangeAvatarName = {
    name: string
    type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_NAME
  }
}

const changeAvatarImage = (image: string): CreateNewHumanAvatar.ChangeAvatarImage => ({
  image,
  type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_IMAGE
})
const changeAvatarLanguage = (language: lobby.Language): CreateNewHumanAvatar.ChangeAvatarLangauge => ({
  language,
  type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_LANGUAGE
})
const changeAvatarName = (name: string): CreateNewHumanAvatar.ChangeAvatarName => ({
  name,
  type: ActionTypes.CreateNewHumanAvatar.CHANGE_AVATAR_NAME
})

export const createNewHumanAvatar = {
  changeAvatarImage,
  changeAvatarLanguage,
  changeAvatarName
}
