import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  image: 'https://werewolf.world/image/0.1/Pamela.jpg',
  items: [
    {
      text: 'Lobby for Audience'
    },
    {
      text: 'Lobby for Robot Player'
    },
    {
      text: 'Lobby for Human Player'
    },
    {
      text: 'History'
    },
    {
      text: 'Setting'
    }
  ],
  name: 'Pamela'
}

const home = (state = initialState, action) => {
  return state
}

export default home
