import * as ActionTypes from '../constants/ActionTypes'
import {ActivateNextButton, ClickNavigationButton, DeactivateNextButton} from '../actions'

export interface State {
  readonly navigation: {
    readonly className?: string
    readonly disabled?: boolean
    readonly id: string
    readonly isLoading?: boolean
    readonly type: ActionTypes.Navigation
  }[]
}
type Action =
  | ActivateNextButton
  | ClickNavigationButton
  | DeactivateNextButton

export const initialState: State = {
  navigation: [
    {
      className: 'show-result',
      id: 'CommandNavigation.showResult',
      type: ActionTypes.Navigation.SHOW_RESULT
    },
    {
      className: 'next-game',
      disabled: true,
      id: 'CommandNavigation.nextGame',
      type: ActionTypes.Navigation.NEXT_GAME
    },
    {
      className: 'return-to-lobby',
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.Navigation.RETURN_TO_LOBBY
    }
  ]
}
const commandPostMortem = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.ACTIVATE_NEXT_BUTTON:
      return {
        navigation: [
          {
            className: 'show-result',
            id: 'CommandNavigation.showResult',
            type: ActionTypes.Navigation.SHOW_RESULT
          },
          {
            className: 'next-game',
            id: 'CommandNavigation.nextGame',
            type: ActionTypes.Navigation.NEXT_GAME
          },
          {
            className: 'return-to-lobby',
            id: 'CommandNavigation.returnToLobby',
            type: ActionTypes.Navigation.RETURN_TO_LOBBY
          }
        ]
      }
    case ActionTypes.global.DEACTIVATE_NEXT_BUTTON:
      return {
        navigation: [
          {
            className: 'show-result',
            id: 'CommandNavigation.showResult',
            type: ActionTypes.Navigation.SHOW_RESULT
          },
          {
            className: 'return-to-lobby expand',
            id: 'CommandNavigation.returnToLobby',
            type: ActionTypes.Navigation.RETURN_TO_LOBBY
          }
        ]
      }
    case ActionTypes.Navigation.NEXT_GAME:
      return {
        navigation: state.navigation.map(item => {
          if (item.type === ActionTypes.Navigation.NEXT_GAME) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.Navigation.RETURN_TO_LOBBY:
      return {
        navigation: state.navigation.map(item => {
          if (item.type === ActionTypes.Navigation.RETURN_TO_LOBBY) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    default:
      return state
  }
}

export default commandPostMortem
