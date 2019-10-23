import * as ActionTypes from '../constants/ActionTypes'
import {ChangeDate, SocketMessage, StarChat} from '../actions'
import {idGenerater, just} from '../util'
import {village} from '../types'

const getChatId = idGenerater('chat')
const getDelimeterId = idGenerater('delimeter')

export interface State {
  readonly allIds: village.ChatId[]
  readonly byId: {
    readonly [id in village.ChatId]: {
      readonly agentId?: village.AgentId
      readonly clientTimestamp: string
      readonly date: number
      readonly id: number
      readonly image: string
      readonly intensionalDisclosureRange: village.Channel
      readonly isMarked: boolean
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
  | StarChat

export const initialState: State = {
  allIds: [],
  byId: {}
}
const chat = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload['@payload']) {
        case village.Message.chatMessage: {
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
                  date: payload.date,
                  id,
                  image: 'https://werewolf.world/image/0.3/agent_icons/120x120/anonymous_120x120.png',
                  intensionalDisclosureRange: payload.intensionalDisclosureRange,
                  isMarked: false,
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
                  date: payload.date,
                  id,
                  image: just(payload.avatar).image,
                  intensionalDisclosureRange: payload.intensionalDisclosureRange,
                  isMarked: false,
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
                agentId: String(just(payload.agent).id),
                clientTimestamp: payload.clientTimestamp,
                date: payload.date,
                id,
                image: just(payload.agent).image,
                intensionalDisclosureRange: payload.intensionalDisclosureRange,
                isMarked: false,
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
    case ActionTypes.global.STAR: {
      const item = state.byId[action.id]

      if (item.type === 'delimeter') {
        return state
      }

      return {
        ... state,
        byId: {
          ... state.byId,
          [action.id]: {
            ... item,
            isMarked: action.isMarked
          }
        }
      }
    }
    default:
      return state
  }
}

export default chat

