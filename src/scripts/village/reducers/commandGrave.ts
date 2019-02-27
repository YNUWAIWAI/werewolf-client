import * as ActionTypes from '../constants/ActionTypes'
import {ClickNavigationButton} from '../actions'

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
  | ClickNavigationButton

export const initialState: State = {
  navigation: [
    {
      className: 'return-to-lobby expand',
      id: 'CommandNavigation.returnToLobby',
      type: ActionTypes.Navigation.RETURN_TO_LOBBY
    }
  ]
}
const commandGrave = (state: State = initialState, action: Action): State => {
  switch (action.type) {
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

export default commandGrave
