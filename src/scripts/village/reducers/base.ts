import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage} from '../actions'

export interface State {
  readonly clientTimestamp: string
  readonly date: number
  readonly intensionalDisclosureRange: village.Channel
  readonly phase: village.Phase
  readonly phaseStartTime: string
  readonly phaseTimeLimit: number
  readonly serverTimestamp: string
  readonly token: village.Token
  readonly village: {
    readonly '@id': string
    readonly id: number
    readonly lang: village.Language
    readonly name: string
    readonly totalNumberOfAgents: number
  }
}
type Action =
  | SocketMessage

export const initialState: State = {
  clientTimestamp: '',
  date: 0,
  intensionalDisclosureRange: village.Channel.public,
  phase: village.Phase.night,
  phaseStartTime: '',
  phaseTimeLimit: -1,
  serverTimestamp: '',
  token: '',
  village: {
    '@id': '',
    'id': 0,
    'lang': village.Language.en,
    'name': '',
    'totalNumberOfAgents': 0
  }
}
const base = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.socket.MESSAGE) {
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
        'lang': action.payload.village.lang,
        'name': action.payload.village.name,
        'totalNumberOfAgents': action.payload.village.totalNumberOfAgents
      }
    }
  }

  return state
}

export default base
