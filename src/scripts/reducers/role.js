import * as ActionTypes from '../constants/ActionTypes'
import * as Message from '../constants/Message'
import {setRole} from '../actions'

const initialState = {
  agent: 'ゲルト',
  imageUrl: 'https://werewolf.world/image/0.1/Gert.jpg',
  role: '人狼'
}

const role = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (action.payload['@id'] === Message.SYSTEM_MESSAGE) {
        return setRole(action.payload)
      }

      return state
    default:
      return state
  }
}

export default role
