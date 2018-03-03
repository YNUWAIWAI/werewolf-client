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
