import * as ActionTypes from '../constants/ActionTypes'
import * as Message from '../constants/Message'
import {ANONYMOUS_AUDIENCE, ONYMOUS_AUDIENCE, PUBLIC} from '../constants/Channels'
import {ChangeDate, SocketMessage} from '../actions'
import {idGenerater, just} from '../util'

const getChatId = idGenerater('chat')
const getDelimeterId = idGenerater('delimeter')

export interface State {
  readonly allIds: string[]
  readonly byId: {
    [id: string]: {
      readonly id: number
      readonly image: string
      readonly intensionalDisclosureRange: village.Channel
      readonly isMine: boolean
      readonly name: village.LanguageMap | string
      readonly phaseStartTime: string
      readonly phaseTimeLimit: number
      readonly serverTimestamp: string
      readonly text: string
      readonly type: 'item'
    } |
    {
      readonly date: number
      readonly type: 'delimeter'
    }
  }
}
type Action =
  | ChangeDate
  | SocketMessage

export const initialState: State = {
  allIds: [],
  byId: {}
}
const chat = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload['@payload']) {
        case Message.PLAYER_MESSAGE: {
          const payload = action.payload
          const chatId = getChatId()
          const id = payload.intensionalDisclosureRange === PUBLIC ? just(payload.id) : -1

          if (payload.intensionalDisclosureRange === ANONYMOUS_AUDIENCE) {
            return {
              allIds: [chatId, ... state.allIds],
              byId: {
                ... state.byId,
                [chatId]: {
                  id,
                  image: 'Anonymous',
                  intensionalDisclosureRange: payload.intensionalDisclosureRange,
                  isMine: payload.isMine,
                  name: 'Anonymous',
                  phaseStartTime: payload.phaseStartTime,
                  phaseTimeLimit: payload.phaseTimeLimit,
                  serverTimestamp: payload.serverTimestamp,
                  text: payload.text['@value'],
                  type: 'item'
                }
              }
            }
          } else if (payload.intensionalDisclosureRange === ONYMOUS_AUDIENCE) {
            return {
              allIds: [chatId, ... state.allIds],
              byId: {
                ... state.byId,
                [chatId]: {
                  id,
                  image: just(payload.avatar).image,
                  intensionalDisclosureRange: payload.intensionalDisclosureRange,
                  isMine: payload.isMine,
                  name: just(payload.avatar).name,
                  phaseStartTime: payload.phaseStartTime,
                  phaseTimeLimit: payload.phaseTimeLimit,
                  serverTimestamp: payload.serverTimestamp,
                  text: payload.text['@value'],
                  type: 'item'
                }
              }
            }
          }

          return {
            allIds: [chatId, ... state.allIds],
            byId: {
              ... state.byId,
              [chatId]: {
                id,
                image: just(payload.agent).image,
                intensionalDisclosureRange: payload.intensionalDisclosureRange,
                isMine: payload.isMine,
                name: just(payload.agent).name,
                phaseStartTime: payload.phaseStartTime,
                phaseTimeLimit: payload.phaseTimeLimit,
                serverTimestamp: payload.serverTimestamp,
                text: payload.text['@value'],
                type: 'item'
              }
            }
          }
        }
        default:
          return state
      }
    }
    case ActionTypes.global.CHANGE_DATE: {
      const delimeterId = getDelimeterId()

      return {
        allIds: [delimeterId, ... state.allIds],
        byId: {
          ... state.byId,
          [delimeterId]: {
            date: action.to,
            type: 'delimeter'
          }
        }
      }
    }
    default:
      return state
  }
}

export default chat

