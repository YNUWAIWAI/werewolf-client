import * as ActionTypes from '../constants/ActionTypes'
import * as village from '../types'
import {SocketMessage} from '../actions'

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
    case ActionTypes.socket.MESSAGE:
      if (action.payload['@payload'] === village.Message.systemMessage) {
        const payload = action.payload
        const isDead = (() => {
          if (typeof payload.agent === 'undefined') {
            return state.isDead
          }

          const maybe = payload.agent.find(a => a.isMine)

          if (!maybe) {
            return false
          }

          return maybe.status !== village.AgentStatus.alive
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

            if (payload.date === 0) {
              return {
                content: Content.CommandSelection,
                isDead
              }
            } else if (payload.date === -1) {
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
