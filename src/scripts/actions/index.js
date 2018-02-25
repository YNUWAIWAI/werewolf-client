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

export const postChat = props => ({
  kind: props.kind,
  text: props.text,
  type: types.POST_CHAT
})

export const setIsSendable = ({isSendable, kind}) => ({
  isSendable,
  kind,
  type: types.SET_IS_SENDABLE,
})

export const handleBoardClick = (nextState, playerId, roleId) => ({
  nextState,
  playerId,
  roleId,
  type: types.CHANGE_PREDICTION_BOARD
})

export const wait = () => ({
  type: types.WAIT
})

export const ready = () => ({
  type: types.READY
})
