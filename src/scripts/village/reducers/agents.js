import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import {UNPLAYABLE_AGENT} from '../constants/Agent'

const initialState = []
const agents = (state = initialState, action) => {
  if (
    action.type === ActionTypes.SOCKET_MESSAGE &&
    action.payload['@context'].includes(Contexts.AGENT)
  ) {
    return action.payload.agent.filter(a => !UNPLAYABLE_AGENT.includes(a['@id']))
  }

  return state
}

export default agents
