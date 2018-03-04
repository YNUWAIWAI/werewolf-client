import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  menuItems: [
    {
      text: 'Return to the Main Page',
      type: ActionTypes.SHOW_MAIN
    }
  ]
}
const settings = (state = initialState, action) => state

export default settings
