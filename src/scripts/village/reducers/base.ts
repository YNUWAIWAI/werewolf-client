/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage} from '../actions'
import {getBaseUri} from '../util'

export interface State {
  readonly '@id': string // ^https://licos.online/state/0.2/village#[0-9]+$
  readonly clientTimestamp: string
  readonly date: number
  readonly intensionalDisclosureRange: village.Channel
  readonly phase: village.Phase
  readonly phaseStartTime: string
  readonly phaseTimeLimit: number
  readonly serverTimestamp: string
  readonly token: village.Token
  readonly village: {
    readonly '@context': village.Context.Village
    readonly '@id': string
    readonly characterLimit: number
    readonly id: number
    readonly lang: village.Language
    readonly name: string
    readonly totalNumberOfAgents: number
  }
}
type Action =
  | SocketMessage

export const initialState: State = {
  '@id': '',
  'clientTimestamp': '',
  'date': 0,
  'intensionalDisclosureRange': village.Channel.public,
  'phase': village.Phase.night,
  'phaseStartTime': '',
  'phaseTimeLimit': -1,
  'serverTimestamp': '',
  'token': '',
  'village': {
    '@context': village.Context.Village,
    '@id': '',
    'characterLimit': 10,
    'id': 0,
    'lang': village.Language.en,
    'name': '',
    'totalNumberOfAgents': 0
  }
}
const base = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.socket.MESSAGE) {
    if (
      action.payload['@payload'] === village.Message.boardMessage ||
      action.payload['@payload'] === village.Message.errorMessage ||
      action.payload['@payload'] === village.Message.flavorTextMessage ||
      action.payload['@payload'] === village.Message.playerMessage ||
      action.payload['@payload'] === village.Message.scrollMessage ||
      action.payload['@payload'] === village.Message.systemMessage ||
      action.payload['@payload'] === village.Message.voteMessage
    ) {
      return {
        '@id': getBaseUri(action.payload['@id']),
        'clientTimestamp': action.payload.clientTimestamp,
        'date': action.payload.date,
        'intensionalDisclosureRange': action.payload.intensionalDisclosureRange,
        'phase': action.payload.phase,
        'phaseStartTime': action.payload.phaseStartTime,
        'phaseTimeLimit': action.payload.phaseTimeLimit,
        'serverTimestamp': action.payload.serverTimestamp,
        'token': action.payload.token,
        'village': {
          '@context': action.payload.village['@context'],
          '@id': action.payload.village['@id'],
          'characterLimit': action.payload.village.characterLimit,
          'id': action.payload.village.id,
          'lang': action.payload.village.lang,
          'name': action.payload.village.name,
          'totalNumberOfAgents': action.payload.village.totalNumberOfAgents
        }
      }
    }
  }

  return state
}

export default base
