import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  image: 'https://werewolf.world/image/0.1/Pamela.jpg',
  items: [
    {
      text: 'Lobby for Audience',
      type: ActionTypes.SHOW_LOBBY_FOR_AUDIENCE
    },
    {
      text: 'Lobby for Robot Player',
      type: ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER
    },
    {
      text: 'Lobby for Human Player',
      type: ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER
    },
    {
      text: 'History',
      type: ActionTypes.SHOW_HISTORY
    },
    {
      text: 'Setting',
      type: ActionTypes.SHOW_SETTING
    }
  ],
  name: 'Pamela'
}

const home = (state = initialState, action) => {
  return state
}

export default home
