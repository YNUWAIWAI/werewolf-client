import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'

const initialState = {
  date: 0,
  phase: 'day conversation'
}
const game = (state = initialState, action) => {
  if (
    action.type === ActionTypes.SOCKET_MESSAGE &&
    action.payload['@context'].includes(Contexts.BASE)
  ) {
    return {
      date: action.payload.date,
      phase: action.payload.phase,
      phaseStartTime: action.payload.phaseStartTime,
      phaseTimeLimit: action.payload.phaseTimeLimit,
      serverTimestamp: action.payload.serverTimestamp,
      token: action.payload.token,
      totalNumberOfAgents: action.payload.totalNumberOfAgents,
      villageId: action.payload.villageId,
      villageName: action.payload.villageName
    }
  }

  return state
}

export default game
