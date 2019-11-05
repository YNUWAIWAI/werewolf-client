import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeDay,
  SocketMessage,
  StarChat
} from '../actions'
import {
  convertImageUrl,
  idGenerator,
  just
} from '../util'
import {village} from '../types'

const getId = idGenerator()

export interface State {
  readonly allIds: village.ChatId[]
  readonly byId: {
    readonly [id in village.ChatId]: {
      readonly characterId?: village.CharacterId
      readonly clientTimestamp: string
      readonly day: number
      readonly id: village.Payload$ChatId
      readonly image: string
      readonly intensionalDisclosureRange: village.Channel
      readonly isMarked: boolean
      readonly isMine: boolean
      readonly name: village.LanguageMap | string
      readonly phaseStartTime: string
      readonly phaseTimeLimit: number
      readonly serverTimestamp: string
      readonly text: string
      readonly type: village.ChatItemType.item
    } |
    {
      readonly day: number
      readonly type: village.ChatItemType.delimeter
    }
  }
}
type Action =
  | ChangeDay
  | SocketMessage
  | StarChat

export const initialState: State = {
  allIds: [],
  byId: {}
}
const chat = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Socket.MESSAGE: {
      switch (action.payload['@payload']) {
        case village.Message.chatMessage: {
          const payload = action.payload
          const chatId = getId()
          const id = payload.intensionalDisclosureRange === village.Channel.public ? just(payload.id) : -1

          if (payload.intensionalDisclosureRange === village.Channel.anonymousAudience) {
            return {
              allIds: [... state.allIds, chatId],
              byId: {
                ... state.byId,
                [chatId]: {
                  clientTimestamp: payload.clientTimestamp,
                  day: payload.day,
                  id,
                  image: convertImageUrl('https://werewolf.world/image/0.3/character_icons/50x50/anonymous_50x50.png'),
                  intensionalDisclosureRange: payload.intensionalDisclosureRange,
                  isMarked: false,
                  isMine: payload.isMine,
                  name: 'Anonymous',
                  phaseStartTime: payload.phaseStartTime,
                  phaseTimeLimit: payload.phaseTimeLimit,
                  serverTimestamp: payload.serverTimestamp,
                  text: payload.text['@value'],
                  type: village.ChatItemType.item
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
                  day: payload.day,
                  id,
                  image: convertImageUrl(just(payload.avatar).image),
                  intensionalDisclosureRange: payload.intensionalDisclosureRange,
                  isMarked: false,
                  isMine: payload.isMine,
                  name: just(payload.avatar).name,
                  phaseStartTime: payload.phaseStartTime,
                  phaseTimeLimit: payload.phaseTimeLimit,
                  serverTimestamp: payload.serverTimestamp,
                  text: payload.text['@value'],
                  type: village.ChatItemType.item
                }
              }
            }
          }

          return {
            allIds: [... state.allIds, chatId],
            byId: {
              ... state.byId,
              [chatId]: {
                characterId: String(just(payload.character).id),
                clientTimestamp: payload.clientTimestamp,
                day: payload.day,
                id,
                image: convertImageUrl(just(payload.character).image),
                intensionalDisclosureRange: payload.intensionalDisclosureRange,
                isMarked: false,
                isMine: payload.isMine,
                name: just(payload.character).name,
                phaseStartTime: payload.phaseStartTime,
                phaseTimeLimit: payload.phaseTimeLimit,
                serverTimestamp: payload.serverTimestamp,
                text: payload.text['@value'],
                type: village.ChatItemType.item
              }
            }
          }
        }
        default:
          return state
      }
    }
    case ActionTypes.App.CHANGE_DAY: {
      const delimeterId = getId()

      return {
        allIds: [... state.allIds, delimeterId],
        byId: {
          ... state.byId,
          [delimeterId]: {
            day: action.to,
            type: village.ChatItemType.delimeter
          }
        }
      }
    }
    case ActionTypes.App.STAR: {
      const item = state.byId[action.id]

      if (item.type === village.ChatItemType.delimeter) {
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

