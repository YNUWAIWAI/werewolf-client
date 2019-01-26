/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {getCastFromNumberOfPlayers} from '../util'
import {socket} from '../actions'

const client2server: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.Target.ADVANCED_SEARCH: {
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
    case ActionTypes.Target.BUILD_VILLAGE: {
      const state = store.getState()
      const payload = {
        avatar: state.buildVillage.value.avatar,
        comment: state.buildVillage.value.comment,
        hostPlayer: {
          isAnonymous: state.buildVillage.value.avatar === 'random',
          isHuman: state.buildVillage.value.isHuman,
          name: state.buildVillage.value.hostName
        },
        id: -1,
        idForSearching: -1,
        name: state.buildVillage.value.villageName,
        playerSetting: {
          current: -1,
          human: {
            current: -1,
            max: state.buildVillage.value.numberOfHumans
          },
          number: state.buildVillage.value.numberOfPlayers,
          robot: {
            current: -1,
            min: state.buildVillage.value.numberOfRobots
          }
        },
        roleSetting: getCastFromNumberOfPlayers(state.buildVillage.value.numberOfPlayers)[state.buildVillage.value.member],
        token: state.token[state.token.lobby],
        type: 'buildVillage'
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_LANGUAGE: {
      const payload = {
        lang: action.language,
        type: 'changeLang'
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_USER_EMAIL: {
      const payload = {
        type: 'changeUserEmail',
        userEmail: action.userEmail
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_USER_NAME: {
      const payload = {
        type: 'changeUserName',
        userName: action.userName
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_USER_PASSWORD: {
      const payload = {
        type: 'changeUserPassword',
        userPassword: action.userPassword
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Target.LEAVE_WAITING_PAGE: {
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
    case ActionTypes.global.KICK_OUT_PLAYER: {
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
    case ActionTypes.Target.PLAY_GAME: {
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
    case ActionTypes.Target.ID_SEARCH: {
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
    case ActionTypes.global.SELECT_VILLAGE: {
      const state = store.getState()
      const payload = {
        token: state.token[state.token.lobby],
        type: 'selectVillage',
        villageId: action.id
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE: {
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
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER: {
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
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER: {
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
    case ActionTypes.Target.SHOW_SETTINGS: {
      store.dispatch(socket.send({
        type: 'getSettings'
      }))

      return next(action)
    }
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case lobby.PayloadType.ping: {
          const state = store.getState()
          const payload = action.payload

          store.dispatch(socket.send({
            id: payload.id,
            token: state.token[state.token.lobby],
            type: 'pong'
          }))

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
