import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import {UNPLAYABLE_AGENT} from '../constants/Agent'
import {RESULTS} from '../constants/Phase'

const initialState = {
  isVisible: false
}
const result = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (
        action.payload['@context'].includes(Contexts.BASE) &&
        action.payload['@context'].includes(Contexts.AGENT) &&
        action.payload['@context'].includes(Contexts.ROLE) &&
        action.payload.phase === RESULTS
      ) {
        const agents = action.payload.agent
          .filter(agent => !UNPLAYABLE_AGENT.includes(agent['@id']))

        return {
          agents,
          isVisible: true
        }
      }

      return state
    default:
      return state
  }
}

export default result
