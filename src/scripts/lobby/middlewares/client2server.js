// @flow
import * as types from '../constants/ActionTypes'
import type {Action} from '.'
import type {Middleware} from 'redux'
import type {Payload$Ping} from 'lobby'
import type {ReducerState} from '../reducers'
import {getCastFromNumberOfPlayers} from '../constants/Cast'
import {socket} from '../actions'

const client2server: Middleware<ReducerState, Action> = store => next => action => {
  switch (action.type) {
    case types.ADVANCED_SEARCH: {
      const state = store.getState()
      const payload = {
        avatar: state.advancedSearch.validity.avatar ? state.advancedSearch.value.avatar : 'random',
        comment: state.advancedSearch.validity.comment ? state.advancedSearch.value.comment : null,
        hostName: state.advancedSearch.validity.hostName ? state.advancedSearch.value.hostName : null,
        lobby: state.token.lobby,
        maximum: state.advancedSearch.validity.maximum ? state.advancedSearch.value.maximum : null,
        minimum: state.advancedSearch.validity.minimum ? state.advancedSearch.value.minimum : null,
        token: state.token[state.token.lobby],
        type: 'advancedSearch',
        villageName: state.advancedSearch.validity.villageName ? state.advancedSearch.value.villageName : null
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
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
        idForSearching: -1,
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
    case types.PLAY_GAME: {
      const state = store.getState()

      if (!state.waitingForPlayers.village) {
        return next(action)
      }
      const payload = {
        token: state.token[state.token.lobby],
        type: 'play',
        villageId: state.waitingForPlayers.village.id
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.ID_SEARCH: {
      const state = store.getState()

      if (state.idSearch.id === -1) {
        return next(action)
      }
      const payload = {
        idForSearching: state.idSearch.id,
        lobby: state.token.lobby,
        token: state.token[state.token.lobby],
        type: 'idSearch'
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.SELECT_VILLAGE: {
      const state = store.getState()
      const payload = {
        token: state.token[state.token.lobby],
        type: 'selectVillage',
        villageId: action.id
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
      switch (action.payload.type) {
        case 'ping': {
          const state = store.getState()
          const payload: Payload$Ping = action.payload

          store.dispatch(socket.send({
            id: payload.id,
            token: state.token[state.token.lobby],
            type: 'pong'
          }))

          return next(action)
        }
        case 'played': {
          window.location.replace(`${window.location.origin}/village`)

          return next(action)
        }
        default:
          return next(action)
      }
    default:
      return next(action)
  }
}

export default client2server
