// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Contexts from '../constants/Contexts'
import type {Channel, Phase} from 'village'
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
  +village: {
    +'@id': string,
    +id: number,
    +name: string,
    +totalNumberOfAgents: number
  }
}
type Action =
  | SocketMessage

export const initialState = {
  clientTimestamp: '',
  date: 0,
  intensionalDisclosureRange: 'public',
  phase: 'night',
  phaseStartTime: '',
  phaseTimeLimit: -1,
  serverTimestamp: '',
  token: '',
  village: {
    '@id': '',
    'id': 0,
    'name': '',
    'totalNumberOfAgents': 0
  }
}
const base = (state: State = initialState, action: Action): State => {
  if (
    action.type === ActionTypes.socket.MESSAGE &&
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
      village: {
        '@id': action.payload.village['@id'],
        'id': action.payload.village.id,
        'name': action.payload.village.name,
        'totalNumberOfAgents': action.payload.village.totalNumberOfAgents
      }
    }
  }

  return state
}

export default base
