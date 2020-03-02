import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Settings {
  type ChangeLanguage = {
    language: lobby.Language
    type: ActionTypes.App.CHANGE_LANGUAGE
  }
  type ChangeUserEmail = {
    type: ActionTypes.App.CHANGE_USER_EMAIL
    userEmail: string
  }
  type ChangeUserName = {
    userName: string
    type: ActionTypes.App.CHANGE_USER_NAME
  }
  type ChangeUserPassword = {
    userPassword: string
    type: ActionTypes.App.CHANGE_USER_PASSWORD
  }
  type SubmitLogout = {
    type: ActionTypes.App.LOGOUT
  }
}

const changeLanguage = (language: lobby.Language): Settings.ChangeLanguage => ({
  language,
  type: ActionTypes.App.CHANGE_LANGUAGE
})
const changeUserEmail = (userEmail: string): Settings.ChangeUserEmail => ({
  type: ActionTypes.App.CHANGE_USER_EMAIL,
  userEmail
})
const changeUserName = (userName: string): Settings.ChangeUserName => ({
  type: ActionTypes.App.CHANGE_USER_NAME,
  userName
})
const changeUserPassword = (userPassword: string): Settings.ChangeUserPassword => ({
  type: ActionTypes.App.CHANGE_USER_PASSWORD,
  userPassword
})
const submitLogout = (): Settings.SubmitLogout => ({
  type: ActionTypes.App.LOGOUT
})

export const settings = {
  changeLanguage,
  changeUserEmail,
  changeUserName,
  changeUserPassword,
  submitLogout
}
