// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {SocketMessage} from '../actions'

export type State = {
  +clientTimestamp: string,
  +date: number,
  +intensionalDisclosureRange: Channel,
  +phase: Phase,
  +phaseStartTime: string,
  +phaseTimeLimit: number,
  +serverTimestamp: string,
  +token: string,
  +totalNumberOfAgents: number,
  +villageId: number,
  +villageName: string
}
type Action =
  | SocketMessage

export const initialState = {
  clientTimestamp: '',
  date: 0,
  intensionalDisclosureRange: 'public',
  phase: 'night',
  phaseStartTime: '',
  phaseTimeLimit: 0,
  serverTimestamp: '',
  token: '',
  totalNumberOfAgents: 0,
  villageId: 0,
  villageName: ''
}
const base = (state: State = initialState, action: Action): State => {
  if (
    action.type === ActionTypes.SOCKET_MESSAGE &&
    action.payload['@context'].includes(Contexts.BASE)
  ) {
    return {
      clientTimestamp: action.payload.clientTimestamp,
      date: action.payload.date,
      intensionalDisclosureRange: action.payload.intensionalDisclosureRange,
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

export default base
