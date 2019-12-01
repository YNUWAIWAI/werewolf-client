import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage} from '../actions'
import {getBaseUri} from '../util'
import {village} from '../types'

export interface State {
  readonly '@id': string // ^https://licos.online/state/0.3/village#[0-9]+$
  readonly clientTimestamp: string
  readonly day: number
  readonly intensionalDisclosureRange: village.Channel
  readonly phase: village.Phase
  readonly phaseStartTime: string
  readonly phaseTimeLimit: number
  readonly serverTimestamp: string
  readonly token: village.Token
  readonly village: {
    readonly '@id': string // https://licos.online/state/0.3/village
    readonly chatSettings: {
      readonly maxLengthOfUnicodeCodePoints: number
      readonly maxNumberOfChatMessages: number
    }
    readonly id: number
    readonly language: village.Language
    readonly name: string
    readonly totalNumberOfPlayers: number
  }
}
type Action =
  | SocketMessage

export const initialState: State = {
  '@id': '',
  'clientTimestamp': '',
  'day': 0,
  'intensionalDisclosureRange': village.Channel.public,
  'phase': village.Phase.night,
  'phaseStartTime': '',
  'phaseTimeLimit': -1,
  'serverTimestamp': '',
  'token': '',
  'village': {
    '@id': '',
    'chatSettings': {
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10
    },
    'id': 0,
    'language': village.Language.en,
    'name': '',
    'totalNumberOfPlayers': 0
  }
}
const base = (state: State = initialState, action: Action): State => {
  if (action.type === ActionTypes.Socket.MESSAGE) {
    if (
      action.payload['@payload'] === village.Message.boardMessage ||
      action.payload['@payload'] === village.Message.errorMessage ||
      action.payload['@payload'] === village.Message.flavorTextMessage ||
      action.payload['@payload'] === village.Message.scrollMessage ||
      action.payload['@payload'] === village.Message.systemMessage ||
      action.payload['@payload'] === village.Message.voteMessage
    ) {
      return {
        '@id': getBaseUri(action.payload['@id']),
        'clientTimestamp': action.payload.clientTimestamp,
        'day': action.payload.day,
        'intensionalDisclosureRange': action.payload.intensionalDisclosureRange,
        'phase': action.payload.phase,
        'phaseStartTime': action.payload.phaseStartTime,
        'phaseTimeLimit': action.payload.phaseTimeLimit,
        'serverTimestamp': action.payload.serverTimestamp,
        'token': action.payload.token,
        'village': {
          '@id': action.payload.village['@id'],
          'chatSettings': {
            maxLengthOfUnicodeCodePoints: action.payload.village.chatSettings.maxLengthOfUnicodeCodePoints,
            maxNumberOfChatMessages: action.payload.village.chatSettings.maxNumberOfChatMessages
          },
          'id': action.payload.village.id,
          'language': action.payload.village.language,
          'name': action.payload.village.name,
          'totalNumberOfPlayers': action.payload.village.totalNumberOfPlayers
        }
      }
    }
  }

  return state
}

export default base
