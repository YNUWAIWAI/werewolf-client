// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem} from 'lobby'

export type State = {
  +image: string,
  +menuItems: MenuItem[],
  +name: string
}
type Action = void

export const initialState = {
  image: 'https://werewolf.world/image/0.1/Pamela.jpg',
  menuItems: [
    {
      text: 'Lobby for Audience',
      types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
    },
    {
      text: 'Lobby for Robot Player',
      types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
    },
    {
      text: 'Lobby for Human Player',
      types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      text: 'History',
      types: [ActionTypes.SHOW_HISTORY]
    },
    {
      text: 'Settings',
      types: [ActionTypes.SHOW_SETTINGS]
    }
  ],
  name: 'Pamela'
}

const main = (state: State = initialState, action: Action): State => state

export default main
