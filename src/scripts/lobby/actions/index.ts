import * as ActionTypes from '../constants/ActionTypes'
import {lobby} from '../types'

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: ActionTypes.Socket.CLOSE} => ({
    event,
    type: ActionTypes.Socket.CLOSE
  }),
  error: (event: Event): {event: Event, type: ActionTypes.Socket.ERROR} => ({
    event,
    type: ActionTypes.Socket.ERROR
  }),
  message: (event: MessageEvent): {payload: lobby.Payload, type: ActionTypes.Socket.MESSAGE} => ({
    payload: JSON.parse(event.data),
    type: ActionTypes.Socket.MESSAGE
  }),
  open: (event: Event): {event: Event, type: ActionTypes.Socket.OPEN} => ({
    event,
    type: ActionTypes.Socket.OPEN
  }),
  send: (payload: lobby.Payload): {payload: lobby.Payload, type: ActionTypes.Socket.SEND} => ({
    payload,
    type: ActionTypes.Socket.SEND
  })
}

export const changeAvatar = (scope: ActionTypes.Scope.AdvancedSearch | ActionTypes.Scope.BuildVillage) => (avatar: lobby.Avatar): {avatar: lobby.Avatar, type: ActionTypes.AdvancedSearch.CHANGE_AVATAR} | {avatar: lobby.Avatar, type: ActionTypes.BuildVillage.CHANGE_AVATAR} => {
  if (scope === ActionTypes.Scope.AdvancedSearch) {
    return {
      avatar,
      type: ActionTypes[scope].CHANGE_AVATAR
    }
  }

  return {
    avatar,
    type: ActionTypes[scope].CHANGE_AVATAR
  }
}
export const changeCheckbox = (scope: ActionTypes.Scope.AdvancedSearch) => (propName: string) => (checked: boolean): {propName: string, checked: boolean, type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX} => ({
  checked,
  propName,
  type: ActionTypes[scope].CHANGE_CHECKBOX
})
export const changeComment = (scope: ActionTypes.Scope.AdvancedSearch | ActionTypes.Scope.BuildVillage) => (comment: string): {comment: string, type: ActionTypes.AdvancedSearch.CHANGE_COMMENT} | {comment: string, type: ActionTypes.BuildVillage.CHANGE_COMMENT} => {
  if (scope === ActionTypes.Scope.AdvancedSearch) {
    return {
      comment,
      type: ActionTypes[scope].CHANGE_COMMENT
    }
  }

  return {
    comment,
    type: ActionTypes[scope].CHANGE_COMMENT
  }
}
export const changeHostName = (scope: ActionTypes.Scope.AdvancedSearch) => (hostName: string): {hostName: string, type: ActionTypes.AdvancedSearch.CHANGE_HOST_NAME} => ({
  hostName,
  type: ActionTypes[scope].CHANGE_HOST_NAME
})
export const changeLanguage = (language: lobby.Language): {language: lobby.Language, type: ActionTypes.App.CHANGE_LANGUAGE} => ({
  language,
  type: ActionTypes.App.CHANGE_LANGUAGE
})
export const changeLobby = (lobby: lobby.LobbyType): {lobby: lobby.LobbyType, type: ActionTypes.App.CHANGE_LOBBY} => ({
  lobby,
  type: ActionTypes.App.CHANGE_LOBBY
})
export const changeMaximum = (scope: ActionTypes.Scope.AdvancedSearch) => (maximum: number): {maximum: number, type: ActionTypes.AdvancedSearch.CHANGE_MAXIMUM} => ({
  maximum: Number(maximum),
  type: ActionTypes[scope].CHANGE_MAXIMUM
})
export const changeMember = (scope: ActionTypes.Scope.BuildVillage) => (member: lobby.Member): {member: lobby.Member, type: ActionTypes.BuildVillage.CHANGE_MEMBER} => ({
  member,
  type: ActionTypes[scope].CHANGE_MEMBER
})
export const changeMinimum = (scope: ActionTypes.Scope.AdvancedSearch) => (minimum: number): {minimum: number, type: ActionTypes.AdvancedSearch.CHANGE_MINIMUM} => ({
  minimum: Number(minimum),
  type: ActionTypes[scope].CHANGE_MINIMUM
})
export const changeNumberOfPlayers = (scope: ActionTypes.Scope.BuildVillage) => (numberOfPlayers: number): {numberOfPlayers: number, type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS} => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: ActionTypes[scope].CHANGE_NUMBER_OF_PLAYERS
})
export const changeNumberOfRobots = (scope: ActionTypes.Scope.BuildVillage) => (numberOfRobots: number): {numberOfRobots: number, type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS} => ({
  numberOfRobots: Number(numberOfRobots),
  type: ActionTypes[scope].CHANGE_NUMBER_OF_ROBOTS
})
export const changeSearchId = (id: number): {id: number, type: ActionTypes.IdSearch.CHANGE_SEARCH_ID} => ({
  id,
  type: ActionTypes.IdSearch.CHANGE_SEARCH_ID
})
export const changeToken = ({lobby, token}: {lobby: lobby.LobbyType, token: string}): {lobby: lobby.LobbyType, token: string, type: ActionTypes.App.CHANGE_TOKEN} => ({
  lobby,
  token,
  type: ActionTypes.App.CHANGE_TOKEN
})
export const changeUserEmail = (userEmail: string): {type: ActionTypes.App.CHANGE_USER_EMAIL, userEmail: string} => ({
  type: ActionTypes.App.CHANGE_USER_EMAIL,
  userEmail
})
export const changeUserName = (userName: string): {userName: string, type: ActionTypes.App.CHANGE_USER_NAME} => ({
  type: ActionTypes.App.CHANGE_USER_NAME,
  userName
})
export const changeUserPassword = (userPassword: string): {userPassword: string, type: ActionTypes.App.CHANGE_USER_PASSWORD} => ({
  type: ActionTypes.App.CHANGE_USER_PASSWORD,
  userPassword
})
export const changeValidity = (scope: ActionTypes.Scope.AdvancedSearch | ActionTypes.Scope.BuildVillage | ActionTypes.Scope.IdSearch) => (propName: string) => (validity: boolean): {propName: string, type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY, validity: boolean} | {propName: string, type: ActionTypes.BuildVillage.CHANGE_VALIDITY, validity: boolean} | {propName: string, type: ActionTypes.IdSearch.CHANGE_VALIDITY, validity: boolean} => {
  if (scope === ActionTypes.Scope.AdvancedSearch) {
    return {
      propName,
      type: ActionTypes[scope].CHANGE_VALIDITY,
      validity
    }
  } else if (scope === ActionTypes.Scope.BuildVillage) {
    return {
      propName,
      type: ActionTypes[scope].CHANGE_VALIDITY,
      validity
    }
  }

  return {
    propName,
    type: ActionTypes[scope].CHANGE_VALIDITY,
    validity
  }
}
export const changeVillageName = (scope: ActionTypes.Scope.AdvancedSearch | ActionTypes.Scope.BuildVillage) => (villageName: string): {type: ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME, villageName: string} | {type: ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME, villageName: string} => {
  if (scope === ActionTypes.Scope.AdvancedSearch) {
    return {
      type: ActionTypes[scope].CHANGE_VILLAGE_NAME,
      villageName
    }
  }

  return {
    type: ActionTypes[scope].CHANGE_VILLAGE_NAME,
    villageName
  }
}
export const confirmKickOutPlayer = (values: {name: string, token: lobby.Token}): {name: string, token: lobby.Token, type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER} => ({
  name: values.name,
  token: values.token,
  type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER
})
export const kickOutPlayer = (): {type: ActionTypes.App.KICK_OUT_PLAYER} => ({
  type: ActionTypes.App.KICK_OUT_PLAYER
})
export const selectNo = (): {type: ActionTypes.App.SELECT_NO} => ({
  type: ActionTypes.App.SELECT_NO
})
export const selectVillage = (id: number): {id: number, type: ActionTypes.App.SELECT_VILLAGE} => ({
  id,
  type: ActionTypes.App.SELECT_VILLAGE
})
export const selectYes = (): {type: ActionTypes.App.SELECT_YES} => ({
  type: ActionTypes.App.SELECT_YES
})
export const showVillage = (): {type: ActionTypes.App.SHOW_VILLAGE} => ({
  type: ActionTypes.App.SHOW_VILLAGE
})
export const submitLogout = (): {type: ActionTypes.App.LOGOUT} => ({
  type: ActionTypes.App.LOGOUT
})
export type Target =
  | ActionTypes.App.ADVANCED_SEARCH
  | ActionTypes.App.BUILD_VILLAGE
  | ActionTypes.App.ID_SEARCH
  | ActionTypes.App.LEAVE_WAITING_PAGE
  | ActionTypes.App.PLAY_GAME
  | ActionTypes.App.REFRESH
  | ActionTypes.App.SHOW_ADVANCED_SEARCH
  | ActionTypes.App.SHOW_BUILD_VILLAGE
  | ActionTypes.App.SHOW_CONNECTING_TO_ROBOT_PLAYER
  | ActionTypes.App.SHOW_CREDITS
  | ActionTypes.App.SHOW_HISTORY
  | ActionTypes.App.SHOW_HOW_TO_PLAY
  | ActionTypes.App.SHOW_ID_SEARCH
  | ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE
  | ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER
  | ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER
  | ActionTypes.App.SHOW_MAIN
  | ActionTypes.App.SHOW_SETTINGS
  | ActionTypes.App.SHOW_VILLAGE
export const transition = (target: Target): {type: Target} => ({
  type: target
})

export type AdvancedSearch$ChangeAvatar = ReturnType<ReturnType<typeof changeAvatar>>
export type AdvancedSearch$ChangeCheckbox = ReturnType<ReturnType<ReturnType<typeof changeCheckbox>>>
export type AdvancedSearch$ChangeComment = ReturnType<ReturnType<typeof changeComment>>
export type AdvancedSearch$ChangeHostName = ReturnType<ReturnType<typeof changeHostName>>
export type AdvancedSearch$ChangeMaximum = ReturnType<ReturnType<typeof changeMaximum>>
export type AdvancedSearch$ChangeMinimum = ReturnType<ReturnType<typeof changeMinimum>>
export type AdvancedSearch$ChangeValidity = ReturnType<ReturnType<ReturnType<typeof changeValidity>>>
export type AdvancedSearch$ChangeVillageName = ReturnType<ReturnType<typeof changeVillageName>>
export type BuildVillage$ChangeAvatar = ReturnType<ReturnType<typeof changeAvatar>>
export type BuildVillage$ChangeComment = ReturnType<ReturnType<typeof changeComment>>
export type BuildVillage$ChangeMember = ReturnType<ReturnType<typeof changeMember>>
export type BuildVillage$ChangeNumberOfPlayers = ReturnType<ReturnType<typeof changeNumberOfPlayers>>
export type BuildVillage$ChangeNumberOfRobots = ReturnType<ReturnType<typeof changeNumberOfRobots>>
export type BuildVillage$ChangeValidity = ReturnType<ReturnType<ReturnType<typeof changeValidity>>>
export type BuildVillage$ChangeVillageName = ReturnType<ReturnType<typeof changeVillageName>>
export type ChangeLanguage = ReturnType<typeof changeLanguage>
export type ChangeLobby = ReturnType<typeof changeLobby>
export type ChangeToken = ReturnType<typeof changeToken>
export type ChangeUserEmail = ReturnType<typeof changeUserEmail>
export type ChangeUserName = ReturnType<typeof changeUserName>
export type ChangeUserPassword = ReturnType<typeof changeUserPassword>
export type ConfirmKickOutPlayer = ReturnType<typeof confirmKickOutPlayer>
export type IdSearch$ChangeSearchId = ReturnType<typeof changeSearchId>
export type IdSearch$ChangeValidity = ReturnType<ReturnType<ReturnType<typeof changeValidity>>>
export type KickOutPlayer = ReturnType<typeof kickOutPlayer>
export type SelectNo = ReturnType<typeof selectNo>
export type SelectVillage = ReturnType<typeof selectVillage>
export type SelectYes = ReturnType<typeof selectYes>
export type ShowVillage = ReturnType<typeof showVillage>
export type SocketClose = ReturnType<typeof socket.close>
export type SocketError = ReturnType<typeof socket.error>
export type SocketMessage = ReturnType<typeof socket.message>
export type SocketOpen = ReturnType<typeof socket.open>
export type SocketSend = ReturnType<typeof socket.send>
export type SubmitLogout = ReturnType<typeof submitLogout>
export type Transition = ReturnType<typeof transition>
