// @flow
import * as ActionTypes from '../constants/ActionTypes'
import * as Message from '../constants/Message'
import {ANONYMOUS_AUDIENCE, ONYMOUS_AUDIENCE, PUBLIC} from '../constants/Channels'
import type {ChangeDate, SocketMessage} from '../actions'
import type {Channel, LanguageMap, Payload$playerMessage} from 'village'
import {idGenerater, just, strToMessage} from '../util'

const getChatId = idGenerater('chat')
const getDelimeterId = idGenerater('delimeter')

export type State = {
  +allIds: string[],
  +byId: {
    [string]: {
      +id: number,
      +image: string,
      +intensionalDisclosureRange: Channel,
      +isMine: boolean,
      +name: LanguageMap | string,
      +phaseStartTime: string,
      +phaseTimeLimit: number,
      +serverTimestamp: string,
      +text: string,
      +type: 'item'
    } |
    {
      +date: number,
      +type: 'delimeter'
    }
  }
}
type Action =
  | ChangeDate
  | SocketMessage

export const initialState = {
  allIds: [],
  byId: {}
}
const chat = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      switch (strToMessage(action.payload['@id'])) {
        case Message.PLAYER_MESSAGE: {
          const payload: Payload$playerMessage = action.payload
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
    case ActionTypes.CHANGE_DATE: {
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

