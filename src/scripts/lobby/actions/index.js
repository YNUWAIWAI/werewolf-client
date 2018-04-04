// @flow
import * as types from '../constants/ActionTypes'
import type {Avatar, Member, Payload, Target} from 'lobby'

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

export const changeAvatar = (avatar: Avatar): {avatar: Avatar, type: 'CHANGE_AVATAR'} => ({
  avatar,
  type: types.CHANGE_AVATAR
})
export const changeComment = (comment: string): {comment: string, type: 'CHANGE_COMMENT'} => ({
  comment,
  type: types.CHANGE_COMMENT
})
export const changeHostName = (hostName: string): {hostName: string, type: 'CHANGE_HOST_NAME'} => ({
  hostName,
  type: types.CHANGE_HOST_NAME
})
export const changeMember = (member: Member): {member: Member, type: 'CHANGE_MEMBER'} => ({
  member,
  type: types.CHANGE_MEMBER
})
export const changeNumberOfPlayers = (numberOfPlayers: number): {numberOfPlayers: number, type: 'CHANGE_NUMBER_OF_PLAYERS'} => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: types.CHANGE_NUMBER_OF_PLAYERS
})
export const changeNumberOfRobots = (numberOfRobots: number): {numberOfRobots: number, type: 'CHANGE_NUMBER_OF_ROBOTS'} => ({
  numberOfRobots: Number(numberOfRobots),
  type: types.CHANGE_NUMBER_OF_ROBOTS
})
export const changeVillageName = (villageName: string): {type: 'CHANGE_VILLAGE_NAME', villageName: string} => ({
  type: types.CHANGE_VILLAGE_NAME,
  villageName
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
export type ChangeAvatar = $Call<typeof changeAvatar, Avatar>
export type ChangeComment = $Call<typeof changeComment, string>
export type ChangeHostName = $Call<typeof changeHostName, string>
export type ChangeMember = $Call<typeof changeMember, Member>
export type ChangeNumberOfPlayers = $Call<typeof changeNumberOfPlayers, number>
export type ChangeNumberOfRobots = $Call<typeof changeNumberOfRobots, number>
export type ChangeVillageName = $Call<typeof changeVillageName, string>
export type SelectVillage = $Call<typeof selectVillage, number>
export type Transition = $Call<typeof transition, Target>
