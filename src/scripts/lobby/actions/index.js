// @flow
import * as types from '../constants/ActionTypes'

export const socket = {
  close: (event: CloseEvent) => ({
    event,
    type: types.SOCKET_CLOSE
  }),
  error: (event: Event) => ({
    event,
    type: types.SOCKET_ERROR
  }),
  message: (event: MessageEvent) => ({
    payload: JSON.parse(event.data),
    type: types.SOCKET_MESSAGE
  }),
  open: (event: Event) => ({
    event,
    type: types.SOCKET_OPEN
  }),
  send: (payload: Object) => ({
    payload,
    type: types.SOCKET_SEND
  })
}

export const selectVillage = (id: number) => ({
  id,
  type: types.SELECT_A_VILLAGE
})
export const changeAvatar = (avatar: Avatar) => ({
  avatar,
  type: types.CHANGE_AVATAR
})
export const changeComment = (comment: string) => ({
  comment,
  type: types.CHANGE_COMMENT
})
export const changeHostName = (hostName: string) => ({
  hostName,
  type: types.CHANGE_HOST_NAME
})
export const changeMember = (member: Member) => ({
  member,
  type: types.CHANGE_MEMBER
})
export const changeNumberOfPlayers = (numberOfPlayers: number) => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: types.CHANGE_NUMBER_OF_PLAYERS
})
export const changeNumberOfRobots = (numberOfRobots: number) => ({
  numberOfRobots: Number(numberOfRobots),
  type: types.CHANGE_NUMBER_OF_ROBOTS
})
export const changeVillageName = (villageName: string) => ({
  type: types.CHANGE_VILLAGE_NAME,
  villageName
})

export type SocketClose = $ReadOnly<$Call<typeof socket.close, *>>
export type SocketError = $ReadOnly<$Call<typeof socket.error, *>>
export type SocketMessage = $ReadOnly<$Call<typeof socket.message, *>>
export type SocketOpen = $ReadOnly<$Call<typeof socket.open, *>>
export type SocketSend = $ReadOnly<$Call<typeof socket.send, *>>
export type SelectVillage = $ReadOnly<$Call<typeof selectVillage, *>>
export type ChangeAvatar = $ReadOnly<$Call<typeof changeAvatar, *>>
export type ChangeComment = $ReadOnly<$Call<typeof changeComment, *>>
export type ChangeHostName = $ReadOnly<$Call<typeof changeHostName, *>>
export type ChangeMember = $ReadOnly<$Call<typeof changeMember, *>>
export type ChangeNumberOfPlayers = $ReadOnly<$Call<typeof changeNumberOfPlayers, *>>
export type ChangeNumberOfRobots = $ReadOnly<$Call<typeof changeNumberOfRobots, *>>
export type ChangeVillageName = $ReadOnly<$Call<typeof changeVillageName, *>>
