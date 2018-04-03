// @flow
import * as types from '../constants/ActionTypes'
import type {DispatchAPI, Middleware} from 'redux'
import type {Action} from '.'
import type {ReducerState} from '../reducers'
import {getCastFromNumberOfPlayers} from '../constants/Cast'
import {socket} from '../actions'

const client2server: Middleware<ReducerState, Action, DispatchAPI<Action>> = store => next => action => {
  switch (action.type) {
    case types.BUILD_VILLAGE: {
      const state = store.getState()
      const payload = {
        avatar: state.buildVillage.village.avatar,
        comment: state.buildVillage.village.comment,
        hostPlayer: {
          isAnonymous: state.buildVillage.village.avatar === 'random',
          isHuman: state.buildVillage.village.isHuman,
          name: state.buildVillage.village.hostName
        },
        id: -1,
        name: state.buildVillage.village.villageName,
        playerSetting: {
          current: -1,
          human: {
            current: -1,
            max: state.buildVillage.village.numberOfHumans
          },
          number: state.buildVillage.village.numberOfPlayers,
          robot: {
            current: -1,
            min: state.buildVillage.village.numberOfRobots
          }
        },
        roleSetting: getCastFromNumberOfPlayers(state.buildVillage.village.numberOfPlayers)[state.buildVillage.village.member]
      }

      socket.send(payload)

      return next(action)
    }
    case types.SELECT_VILLAGE: {
      const payload = {
        village: {
          id: action.id
        }
      }

      socket.send(payload)

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_HUMAN_PLAYER: {
      const payload = {
        lobby: 'human player',
        page: 1
      }

      socket.send(payload)

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_AUDIENCE: {
      const payload = {
        lobby: 'audience',
        page: 1
      }

      socket.send(payload)

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_ROBOT_PLAYER: {
      const payload = {
        lobby: 'robot player',
        page: 1
      }

      socket.send(payload)

      return next(action)
    }
    default:
      return next(action)
  }
}

export default client2server
