import * as types from '../constants/ActionTypes'

export const socket = {
  close: event => ({
    event,
    type: types.SOCKET_CLOSE
  }),
  error: event => ({
    event,
    type: types.SOCKET_ERROR
  }),
  message: event => ({
    payload: JSON.parse(event.data),
    type: types.SOCKET_MESSAGE
  }),
  open: event => ({
    event,
    type: types.SOCKET_OPEN
  }),
  send: payload => ({
    payload,
    type: types.SOCKET_SEND
  })
}

export const selectVillage = id => ({
  id,
  type: types.SELECT_A_VILLAGE
})
export const changeAvatar = avatar => ({
  avatar,
  type: types.CHANGE_AVATAR
})
export const changeComment = comment => ({
  comment,
  type: types.CHANGE_COMMENT
})
export const changeHostName = hostName => ({
  hostName,
  type: types.CHANGE_HOST_NAME
})
export const changeMember = member => ({
  member,
  type: types.CHANGE_MEMBER
})
export const changeNumberOfPlayers = numberOfPlayers => ({
  numberOfPlayers: Number(numberOfPlayers),
  type: types.CHANGE_NUMBER_OF_PLAYERS
})
export const changeNumberOfRobots = numberOfRobots => ({
  numberOfRobots: Number(numberOfRobots),
  type: types.CHANGE_NUMBER_OF_ROBOTS
})
export const changeVillageName = villageName => ({
  type: types.CHANGE_VILLAGE_NAME,
  villageName
})
