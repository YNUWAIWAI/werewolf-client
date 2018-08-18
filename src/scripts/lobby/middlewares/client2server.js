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
        roleSetting: getCastFromNumberOfPlayers(state.buildVillage.village.numberOfPlayers)[state.buildVillage.village.member],
        token: state.token[state.token.lobby],
        type: 'buildVillage'
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.LEAVE_WAITING_PAGE: {
      const state = store.getState()
      const me = state.waitingForPlayers.players.find(v => v.isMe)

      if (me && state.waitingForPlayers.village) {
        const payload = {
          lobby: state.token.lobby,
          token: me.token,
          type: 'leaveWaitingPage',
          villageId: state.waitingForPlayers.village.id
        }

        store.dispatch(socket.send(payload))
      }

      return next(action)
    }
    case types.KICK_OUT_PLAYER: {
      const state = store.getState()
      const payload = {
        players: [
          {
            token: action.token
          }
        ],
        token: state.token[state.token.lobby],
        type: 'kickOutPlayer'
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.SELECT_VILLAGE: {
      const state = store.getState()
      const payload = {
        token: state.token[state.token.lobby],
        type: 'selectVillage',
        village: {
          id: action.id
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_AUDIENCE: {
      const state = store.getState()

      store.dispatch(socket.send({
        lobby: 'onymous audience',
        page: 1,
        token: state.token[state.token.lobby],
        type: 'enterLobby'
      }))
      store.dispatch(socket.send({
        token: state.token[state.token.lobby],
        type: 'getAvatar'
      }))

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_HUMAN_PLAYER: {
      const state = store.getState()

      store.dispatch(socket.send({
        lobby: 'human player',
        page: 1,
        token: state.token[state.token.lobby],
        type: 'enterLobby'
      }))
      store.dispatch(socket.send({
        token: state.token[state.token.lobby],
        type: 'getAvatar'
      }))

      return next(action)
    }
    case types.SHOW_LOBBY_FOR_ROBOT_PLAYER: {
      const state = store.getState()

      store.dispatch(socket.send({
        lobby: 'robot player',
        page: 1,
        token: state.token[state.token.lobby],
        type: 'enterLobby'
      }))
      store.dispatch(socket.send({
        token: state.token[state.token.lobby],
        type: 'getAvatar'
      }))

      return next(action)
    }
    case types.SOCKET_MESSAGE:
      if (action.payload.type === 'ping') {
        const state = store.getState()
        const payload: Payload$Ping = action.payload

        store.dispatch(socket.send({
          id: payload.id,
          token: state.token[state.token.lobby],
          type: 'pong'
        }))
      }

      return next(action)
    default:
      return next(action)
  }
}

export default client2server
