// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {Avatar, Language, Lobby, Member, Payload, Target} from 'lobby'

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: 'socket/CLOSE'} => ({
    event,
    type: ActionTypes.socket.CLOSE
  }),
  error: (event: Event): {event: Event, type: 'socket/ERROR'} => ({
    event,
    type: ActionTypes.socket.ERROR
  }),
  message: (event: MessageEvent): {payload: Payload<*>, type: 'socket/MESSAGE'} => ({
    payload: JSON.parse(event.data),
    type: ActionTypes.socket.MESSAGE
  }),
  open: (event: Event): {event: Event, type: 'socket/OPEN'} => ({
    event,
    type: ActionTypes.socket.OPEN
  }),
  send: (payload: Object): {payload: Object, type: 'socket/SEND'} => ({
    payload,
    type: ActionTypes.socket.SEND
  })
}
export const changeAvatar = (scope: 'advancedSearch' | 'buildVillage') => (avatar: Avatar): {avatar: Avatar, type: 'advancedSearch/CHANGE_AVATAR' | 'buildVillage/CHANGE_AVATAR'} => ({
  avatar,
  type: ActionTypes[scope].CHANGE_AVATAR
})
export const changeCheckbox = (scope: 'advancedSearch') => (propName: string) => (checked: boolean): {propName: string, checked: boolean, type: 'advancedSearch/CHANGE_CHECKBOX'} => ({
  checked,
  propName,
  type: ActionTypes[scope].CHANGE_CHECKBOX
})
export const changeComment = (scope: 'advancedSearch' | 'buildVillage') => (comment: string): {comment: string, type: 'advancedSearch/CHANGE_COMMENT' | 'buildVillage/CHANGE_COMMENT'} => ({
  comment,
  type: ActionTypes[scope].CHANGE_COMMENT
})
export const changeHostName = (scope: 'advancedSearch' | 'buildVillage') => (hostName: string): {hostName: string, type: 'advancedSearch/CHANGE_HOST_NAME' | 'buildVillage/CHANGE_HOST_NAME'} => ({
  hostName,
  type: ActionTypes[scope].CHANGE_HOST_NAME
})
export const changeLanguage = (language: Language): {language: Language, type: 'CHANGE_LANGUAGE'} => ({
  language,
  type: ActionTypes.CHANGE_LANGUAGE
})
export const changeLobby = (lobby: Lobby): {lobby: Lobby, type: 'CHANGE_LOBBY'} => ({
  lobby,
  type: ActionTypes.CHANGE_LOBBY
})
export const changeMaximum = (scope: 'advancedSearch') => (maximum: number): {maximum: number, type: 'advancedSearch/CHANGE_MAXIMUM'} => ({
  maximum: Number(maximum),
  type: ActionTypes[scope].CHANGE_MAXIMUM
})
export const changeMember = (scope: 'buildVillage') => (member: Member): {member: Member, type: 'buildVillage/CHANGE_MEMBER'} => ({
  member,
  type: ActionTypes[scope].CHANGE_MEMBER
})
export const changeMinimum = (scope: 'advancedSearch') => (minimum: number): {minimum: number, type: 'advancedSearch/CHANGE_MINIMUM'} => ({
  minimum: Number(minimum),
  type: ActionTypes[scope].CHANGE_MINIMUM
})
export const changeNumberOfPlayers = (scope: 'buildVillage') => (numberOfPlayers: number): {numberOfPlayers: number, type: 'buildVillage/CHANGE_NUMBER_OF_PLAYERS'} => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: ActionTypes[scope].CHANGE_NUMBER_OF_PLAYERS
})
export const changeNumberOfRobots = (scope: 'buildVillage') => (numberOfRobots: number): {numberOfRobots: number, type: 'buildVillage/CHANGE_NUMBER_OF_ROBOTS'} => ({
  numberOfRobots: Number(numberOfRobots),
  type: ActionTypes[scope].CHANGE_NUMBER_OF_ROBOTS
})
export const changeSearchId = (id: number): {id: number, type: 'idSearch/CHANGE_SEARCH_ID'} => ({
  id,
  type: ActionTypes.idSearch.CHANGE_SEARCH_ID
})
export const changeToken = ({lobby, token}: {lobby: Lobby, token: string}): {lobby: Lobby, token: string, type: 'CHANGE_TOKEN'} => ({
  lobby,
  token,
  type: ActionTypes.CHANGE_TOKEN
})
export const changeUserEmail = (userEmail: string): {userEmail: string, type: 'CHANGE_USER_EMAIL'} => ({
  type: ActionTypes.CHANGE_USER_EMAIL,
  userEmail
})
export const changeUserName = (userName: string): {userName: string, type: 'CHANGE_USER_NAME'} => ({
  type: ActionTypes.CHANGE_USER_NAME,
  userName
})
export const changeUserPassword = (userPassword: string): {userPassword: string, type: 'CHANGE_USER_PASSWORD'} => ({
  type: ActionTypes.CHANGE_USER_PASSWORD,
  userPassword
})
export const changeValidity = (scope: 'advancedSearch' | 'buildVillage' | 'idSearch') => (propName: string) => (validity: boolean): {propName: string, type: 'advancedSearch/CHANGE_VALIDITY' | 'buildVillage/CHANGE_VALIDITY' | 'idSearch/CHANGE_VALIDITY', validity: boolean} => ({
  propName,
  type: ActionTypes[scope].CHANGE_VALIDITY,
  validity
})
export const changeVillageName = (scope: 'advancedSearch' | 'buildVillage') => (villageName: string): {type: 'advancedSearch/CHANGE_VILLAGE_NAME' | 'buildVillage/CHANGE_VILLAGE_NAME', villageName: string} => ({
  type: ActionTypes[scope].CHANGE_VILLAGE_NAME,
  villageName
})
export const kickOutPlayer = (token: string): {token: string, type: 'KICK_OUT_PLAYER'} => ({
  token,
  type: ActionTypes.KICK_OUT_PLAYER
})
export const selectVillage = (id: number): {id: number, type: 'SELECT_VILLAGE'} => ({
  id,
  type: ActionTypes.SELECT_VILLAGE
})
export const transition = (target: Target): {type: Target} => ({
  type: target
})

export type SocketClose = $Call<typeof socket.close, CloseEvent>
export type SocketError = $Call<typeof socket.error, Event>
export type SocketMessage = $Call<typeof socket.message, MessageEvent>
export type SocketOpen = $Call<typeof socket.open, Event>
export type SocketSend = $Call<typeof socket.send, Object>
export type AdvancedSearch$ChangeAvatar = $Call<$Call<typeof changeAvatar, 'advancedSearch'>, Avatar>
export type AdvancedSearch$ChangeCheckbox = $Call<$Call<$Call<typeof changeCheckbox, 'advancedSearch'>, string>, boolean>
export type AdvancedSearch$ChangeComment = $Call<$Call<typeof changeComment, 'advancedSearch'>, string>
export type AdvancedSearch$ChangeHostName = $Call<$Call<typeof changeHostName, 'advancedSearch'>, string>
export type AdvancedSearch$ChangeMaximum = $Call<$Call<typeof changeMaximum, 'advancedSearch'>, number>
export type AdvancedSearch$ChangeMinimum = $Call<$Call<typeof changeMinimum, 'advancedSearch'>, number>
export type AdvancedSearch$ChangeValidity = $Call<$Call<$Call<typeof changeValidity, 'advancedSearch'>, string>, boolean>
export type AdvancedSearch$ChangeVillageName = $Call<$Call<typeof changeVillageName, 'advancedSearch'>, string>
export type BuildVillage$ChangeAvatar = $Call<$Call<typeof changeAvatar, 'buildVillage'>, Avatar>
export type BuildVillage$ChangeComment = $Call<$Call<typeof changeComment, 'buildVillage'>, string>
export type BuildVillage$ChangeHostName = $Call<$Call<typeof changeHostName, 'buildVillage'>, string>
export type BuildVillage$ChangeMember = $Call<$Call<typeof changeMember, 'buildVillage'>, Member>
export type BuildVillage$ChangeNumberOfPlayers = $Call<$Call<typeof changeNumberOfPlayers, 'buildVillage'>, number>
export type BuildVillage$ChangeNumberOfRobots = $Call<$Call<typeof changeNumberOfRobots, 'buildVillage'>, number>
export type BuildVillage$ChangeValidity = $Call<$Call<$Call<typeof changeValidity, 'buildVillage'>, string>, boolean>
export type BuildVillage$ChangeVillageName = $Call<$Call<typeof changeVillageName, 'buildVillage'>, string>
export type ChangeLanguage = $Call<typeof changeLanguage, *>
export type ChangeLobby = $Call<typeof changeLobby, Lobby>
export type ChangeToken = $Call<typeof changeToken, {lobby: Lobby, token: string}>
export type ChangeUserEmail = $Call<typeof changeUserEmail, *>
export type ChangeUserName = $Call<typeof changeUserName, *>
export type ChangeUserPassword = $Call<typeof changeUserPassword, *>
export type KickOutPlayer = $Call<typeof kickOutPlayer, string>
export type IdSearch$ChangeSearchId = $Call<typeof changeSearchId, number>
export type IdSearch$ChangeValidity = $Call<$Call<$Call<typeof changeValidity, 'idSearch'>, string>, boolean>
export type SelectVillage = $Call<typeof selectVillage, number>
export type Transition = $Call<typeof transition, Target>
