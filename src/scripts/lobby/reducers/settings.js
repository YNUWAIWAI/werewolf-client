// @flow
import * as ActionTypes from '../constants/ActionTypes'

export type State = {
  menuItems: MenuItem[]
}
type Action = any

const initialState = {
  menuItems: [
    {
      text: 'Return to the Main Page',
      type: ActionTypes.SHOW_MAIN
    }
  ]
}
const settings = (state: State = initialState, action: Action) => state

export default settings
