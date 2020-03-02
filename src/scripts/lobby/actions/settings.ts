import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare namespace Settings {
  type ChangeLanguage = {
    language: lobby.Language
    type: ActionTypes.Settings.CHANGE_LANGUAGE
  }
  type ChangeUserEmail = {
    type: ActionTypes.Settings.CHANGE_USER_EMAIL
    userEmail: string
  }
  type ChangeUserName = {
    userName: string
    type: ActionTypes.Settings.CHANGE_USER_NAME
  }
  type ChangeUserPassword = {
    userPassword: string
    type: ActionTypes.Settings.CHANGE_USER_PASSWORD
  }
  type SubmitLogout = {
    type: ActionTypes.Settings.LOGOUT
  }
}

const changeLanguage = (language: lobby.Language): Settings.ChangeLanguage => ({
  language,
  type: ActionTypes.Settings.CHANGE_LANGUAGE
})
const changeUserEmail = (userEmail: string): Settings.ChangeUserEmail => ({
  type: ActionTypes.Settings.CHANGE_USER_EMAIL,
  userEmail
})
const changeUserName = (userName: string): Settings.ChangeUserName => ({
  type: ActionTypes.Settings.CHANGE_USER_NAME,
  userName
})
const changeUserPassword = (userPassword: string): Settings.ChangeUserPassword => ({
  type: ActionTypes.Settings.CHANGE_USER_PASSWORD,
  userPassword
})
const submitLogout = (): Settings.SubmitLogout => ({
  type: ActionTypes.Settings.LOGOUT
})

export const settings = {
  changeLanguage,
  changeUserEmail,
  changeUserName,
  changeUserPassword,
  submitLogout
}
