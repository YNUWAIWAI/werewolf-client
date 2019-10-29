import * as ActionTypes from '../constants/ActionTypes'
import {SocketMessage} from '../actions'
import {village} from '../types'

export const enum Content {
  CommandGrave = 'CommandGrave',
  CommandSelection = 'CommandSelection',
  CommandInputBox = 'CommandInputBox',
  CommandPostMortem = 'CommandPostMortem'
}
export interface State {
  readonly content: Content
  readonly isDead: boolean
}
type Action =
  | SocketMessage

export const initialState = {
  content: Content.CommandSelection,
  isDead: false
}
const command = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Socket.MESSAGE:
      if (action.payload['@payload'] === village.Message.systemMessage) {
        const payload = action.payload
        const isDead = (() => {
          if (typeof payload.character === 'undefined') {
            return state.isDead
          }

          const maybe = payload.character.find(c => c.isMine)

          if (!maybe) {
            return false
          }

          return maybe.status !== village.CharacterStatus.alive
        })()

        switch (action.payload.phase) {
          case village.Phase.noon:
          case village.Phase.night:
            if (isDead) {
              return {
                content: Content.CommandGrave,
                isDead
              }
            }

            return {
              content: Content.CommandSelection,
              isDead
            }
          case village.Phase.flavorText:
            if (isDead) {
              return {
                content: Content.CommandGrave,
                isDead
              }
            }

            if (payload.day === 0) {
              return {
                content: Content.CommandSelection,
                isDead
              }
            } else if (payload.day === -1) {
              return {
                content: Content.CommandPostMortem,
                isDead
              }
            }

            return {
              content: Content.CommandInputBox,
              isDead
            }
          case village.Phase.morning:
            if (isDead) {
              return {
                content: Content.CommandGrave,
                isDead
              }
            }

            return {
              content: Content.CommandInputBox,
              isDead
            }
          case village.Phase.postMortem:
          case village.Phase.result:
            return {
              content: Content.CommandPostMortem,
              isDead
            }
          default:
            throw Error(`Unknown: ${action.payload.phase}`)
        }
      }

      return state
    default:
      return state
  }
}

export default command
