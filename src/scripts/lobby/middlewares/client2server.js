// @flow
import * as types from '../constants/ActionTypes'
import type {DispatchAPI, Middleware} from 'redux'
import type {Action} from '.'
import type {Payload$Ping} from 'lobby'
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

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.LEAVE_WAITING_PAGE: {
      const state = store.getState()
      const me = state.waitingForPlayers.players.find(v => v.isMe)

      if (me) {
        const payload = {
          leave: me.token
        }

        store.dispatch(socket.send(payload))
      }

      return next(action)
    }
    case types.KICK_OUT_PLAYER: {
      const payload = {
        players: [
          {
            token: action.token
          }
        ]
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.SELECT_VILLAGE: {
      const payload = {
        village: {
          id: action.id
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_AUDIENCE: {
      store.dispatch(socket.send({
        lobby: 'audience',
        page: 1
      }))
      store.dispatch(socket.send({
        type: 'avatar'
      }))

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_HUMAN_PLAYER: {
      store.dispatch(socket.send({
        lobby: 'human player',
        page: 1
      }))
      store.dispatch(socket.send({
        type: 'avatar'
      }))

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_ROBOT_PLAYER: {
      store.dispatch(socket.send({
        lobby: 'robot player',
        page: 1
      }))
      store.dispatch(socket.send({
        type: 'avatar'
      }))

      return next(action)
    }
    case types.SOCKET_MESSAGE:
      if (action.payload.type === 'ping') {
        const state = store.getState()
        const payload: Payload$Ping = action.payload

        store.dispatch(socket.send({
          id: payload.id,
          token: state.ping.myToken,
          type: 'pong'
        }))
      }

      return next(action)
    default:
      return next(action)
  }
}

export default client2server
