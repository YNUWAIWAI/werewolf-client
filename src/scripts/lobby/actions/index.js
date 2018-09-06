// @flow
import * as types from '../constants/ActionTypes'
import type {Avatar, Lobby, Member, Payload, Target} from 'lobby'

export const socket = {
  close: (event: CloseEvent): {event: CloseEvent, type: 'SOCKET:CLOSE'} => ({
    event,
    type: types.SOCKET_CLOSE
  }),
  error: (event: Event): {event: Event, type: 'SOCKET:ERROR'} => ({
    event,
    type: types.SOCKET_ERROR
  }),
  message: (event: MessageEvent): {payload: Payload<*>, type: 'SOCKET:MESSAGE'} => ({
    payload: JSON.parse(event.data),
    type: types.SOCKET_MESSAGE
  }),
  open: (event: Event): {event: Event, type: 'SOCKET:OPEN'} => ({
    event,
    type: types.SOCKET_OPEN
  }),
  send: (payload: Object): {payload: Object, type: 'SOCKET:SEND'} => ({
    payload,
    type: types.SOCKET_SEND
  })
}
export const changeAvatar = (scope: 'advancedSearch' | 'buildVillage') => (avatar: Avatar): {avatar: Avatar, type: 'advancedSearch/CHANGE_AVATAR' | 'buildVillage/CHANGE_AVATAR'} => ({
  avatar,
  type: types[scope].CHANGE_AVATAR
})
export const changeCheckbox = (scope: 'advancedSearch') => (propName: string) => (checked: boolean): {propName: string, checked: boolean, type: 'advancedSearch/CHANGE_CHECKBOX'} => ({
  checked,
  propName,
  type: types[scope].CHANGE_CHECKBOX
})
export const changeComment = (scope: 'advancedSearch' | 'buildVillage') => (comment: string): {comment: string, type: 'advancedSearch/CHANGE_COMMENT' | 'buildVillage/CHANGE_COMMENT'} => ({
  comment,
  type: types[scope].CHANGE_COMMENT
})
export const changeHostName = (scope: 'advancedSearch' | 'buildVillage') => (hostName: string): {hostName: string, type: 'advancedSearch/CHANGE_HOST_NAME' | 'buildVillage/CHANGE_HOST_NAME'} => ({
  hostName,
  type: types[scope].CHANGE_HOST_NAME
})
export const changeLobby = (lobby: Lobby): {lobby: Lobby, type: 'CHANGE_LOBBY'} => ({
  lobby,
  type: types.CHANGE_LOBBY
})
export const changeMaximum = (scope: 'advancedSearch') => (maximum: number): {maximum: number, type: 'advancedSearch/CHANGE_MAXIMUM'} => ({
  maximum: Number(maximum),
  type: types[scope].CHANGE_MAXIMUM
})
export const changeMember = (scope: 'buildVillage') => (member: Member): {member: Member, type: 'buildVillage/CHANGE_MEMBER'} => ({
  member,
  type: types[scope].CHANGE_MEMBER
})
export const changeMinimum = (scope: 'advancedSearch') => (minimum: number): {minimum: number, type: 'advancedSearch/CHANGE_MINIMUM'} => ({
  minimum: Number(minimum),
  type: types[scope].CHANGE_MINIMUM
})
export const changeNumberOfPlayers = (scope: 'buildVillage') => (numberOfPlayers: number): {numberOfPlayers: number, type: 'buildVillage/CHANGE_NUMBER_OF_PLAYERS'} => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: types[scope].CHANGE_NUMBER_OF_PLAYERS
})
export const changeNumberOfRobots = (scope: 'buildVillage') => (numberOfRobots: number): {numberOfRobots: number, type: 'buildVillage/CHANGE_NUMBER_OF_ROBOTS'} => ({
  numberOfRobots: Number(numberOfRobots),
  type: types[scope].CHANGE_NUMBER_OF_ROBOTS
})
export const changeSearchId = (id: number): {id: number, type: 'CHANGE_SEARCH_ID'} => ({
  id,
  type: types.CHANGE_SEARCH_ID
})
export const changeToken = ({lobby, token}: {lobby: Lobby, token: string}): {lobby: Lobby, token: string, type: 'CHANGE_TOKEN'} => ({
  lobby,
  token,
  type: types.CHANGE_TOKEN
})
export const changeValidity = (scope: 'advancedSearch' | 'buildVillage') => (propName: string) => (validity: boolean): {propName: string, type: 'advancedSearch/CHANGE_VALIDITY' | 'buildVillage/CHANGE_VALIDITY', validity: boolean} => ({
  propName,
  type: types[scope].CHANGE_VALIDITY,
  validity
})
export const changeVillageName = (scope: 'advancedSearch' | 'buildVillage') => (villageName: string): {type: 'advancedSearch/CHANGE_VILLAGE_NAME' | 'buildVillage/CHANGE_VILLAGE_NAME', villageName: string} => ({
  type: types[scope].CHANGE_VILLAGE_NAME,
  villageName
})
export const kickOutPlayer = (token: string): {token: string, type: 'KICK_OUT_PLAYER'} => ({
  token,
  type: types.KICK_OUT_PLAYER
})
export const selectVillage = (id: number): {id: number, type: 'SELECT_VILLAGE'} => ({
  id,
  type: types.SELECT_VILLAGE
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
export type ChangeLobby = $Call<typeof changeLobby, Lobby>
export type ChangeSearchId = $Call<typeof changeSearchId, number>
export type ChangeToken = $Call<typeof changeToken, {lobby: Lobby, token: string}>
export type KickOutPlayer = $Call<typeof kickOutPlayer, string>
export type SelectVillage = $Call<typeof selectVillage, number>
export type Transition = $Call<typeof transition, Target>
