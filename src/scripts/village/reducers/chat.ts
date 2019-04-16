/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {ChangeDate, SocketMessage} from '../actions'
import {idGenerater, just} from '../util'

const getChatId = idGenerater('chat')
const getDelimeterId = idGenerater('delimeter')

export interface State {
  readonly allIds: string[]
  readonly byId: {
    readonly [id: string]: {
      readonly clientTimestamp: string
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
        case village.Message.playerMessage: {
          const payload = action.payload
          const chatId = getChatId()
          const id = payload.intensionalDisclosureRange === village.Channel.public ? just(payload.id) : -1

          if (payload.intensionalDisclosureRange === village.Channel.anonymousAudience) {
            return {
              allIds: [... state.allIds, chatId],
              byId: {
                ... state.byId,
                [chatId]: {
                  clientTimestamp: payload.clientTimestamp,
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
          } else if (payload.intensionalDisclosureRange === village.Channel.onymousAudience) {
            return {
              allIds: [... state.allIds, chatId],
              byId: {
                ... state.byId,
                [chatId]: {
                  clientTimestamp: payload.clientTimestamp,
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
            allIds: [... state.allIds, chatId],
            byId: {
              ... state.byId,
              [chatId]: {
                clientTimestamp: payload.clientTimestamp,
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
        allIds: [... state.allIds, delimeterId],
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

