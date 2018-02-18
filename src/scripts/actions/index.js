import * as types from '../constants/ActionTypes'

export const socketOpen = event => ({
  event,
  type: types.SOCKET_OPEN
})

export const socketClose = event => ({
  event,
  type: types.SOCKET_CLOSE
})

export const socketError = event => ({
  event,
  type: types.SOCKET_ERROR
})

export const socketMessage = event => ({
  payload: JSON.parse(event.data),
  type: types.SOCKET_MESSAGE
})

export const setDay = payload => ({
  date: payload.date,
  phase: payload.phase,
  type: types.SET_DAY
})

export const setRole = payload => {
  const role = payload.role.filter(r => r.roleIsMine)[0]
  const agent = payload.agent.filter(a => a.agentIsMine)[0]

  return {
    agent: agent.name.ja,
    imageUrl: agent.image,
    role: role.name.ja,
    type: types.SET_ROLE
  }
}

export const toggleObfucator = visible => ({
  type: types.TOGGLE_OBFUCATOR,
  visible
})
