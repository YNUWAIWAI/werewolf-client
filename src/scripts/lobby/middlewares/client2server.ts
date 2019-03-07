/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {getCastFromNumberOfPlayers} from '../util'
import {socket} from '../actions'

const client2server: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.Target.ADVANCED_SEARCH: {
      const state = store.getState()
      const payload: lobby.Payload$advancedSearch = {
        avatar: state.advancedSearch.validity.avatar ? state.advancedSearch.value.avatar : lobby.Avatar.random,
        comment: state.advancedSearch.validity.comment ? state.advancedSearch.value.comment : null,
        hostName: state.advancedSearch.validity.hostName ? state.advancedSearch.value.hostName : null,
        lobby: state.token.lobby,
        maximum: state.advancedSearch.validity.maximum ? state.advancedSearch.value.maximum : null,
        minimum: state.advancedSearch.validity.minimum ? state.advancedSearch.value.minimum : null,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.advancedSearch,
        villageName: state.advancedSearch.validity.villageName ? state.advancedSearch.value.villageName : null
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Target.BUILD_VILLAGE: {
      const state = store.getState()
      const payload: lobby.Payload$buildVillage = {
        avatar: state.buildVillage.value.avatar,
        comment: state.buildVillage.value.comment,
        hostPlayer: {
          isAnonymous: state.buildVillage.value.avatar === lobby.Avatar.random,
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
        type: lobby.PayloadType.buildVillage
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_LANGUAGE: {
      const payload: lobby.Payload$changeLang = {
        lang: action.language,
        type: lobby.PayloadType.changeLang
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_USER_EMAIL: {
      const payload: lobby.Payload$changeUserEmail = {
        type: lobby.PayloadType.changeUserEmail,
        userEmail: action.userEmail
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_USER_NAME: {
      const payload: lobby.Payload$changeUserName = {
        type: lobby.PayloadType.changeUserName,
        userName: action.userName
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.CHANGE_USER_PASSWORD: {
      const payload: lobby.Payload$changeUserPassword = {
        type: lobby.PayloadType.changeUserPassword,
        userPassword: action.userPassword
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Target.ID_SEARCH: {
      const state = store.getState()

      if (state.idSearch.id === -1) {
        return next(action)
      }
      const payload: lobby.Payload$idSearch = {
        idForSearching: state.idSearch.id,
        lobby: state.token.lobby,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.idSearch
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.KICK_OUT_PLAYER: {
      const state = store.getState()
      const payload: lobby.Payload$kickOutPlayer = {
        players: [
          {
            token: action.token
          }
        ],
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.kickOutPlayer
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Target.LEAVE_WAITING_PAGE: {
      const state = store.getState()
      const me = state.waitingForPlayers.players.find(v => v.isMe)

      if (me && state.waitingForPlayers.village) {
        const payload: lobby.Payload$leaveWaitingPage = {
          lobby: state.token.lobby,
          token: me.token,
          type: lobby.PayloadType.leaveWaitingPage,
          villageId: state.waitingForPlayers.village.id
        }

        store.dispatch(socket.send(payload))
      }

      return next(action)
    }
    case ActionTypes.Target.PLAY_GAME: {
      const state = store.getState()

      if (!state.waitingForPlayers.village) {
        return next(action)
      }
      const payload: lobby.Payload$play = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.play,
        villageId: state.waitingForPlayers.village.id
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.SELECT_VILLAGE: {
      const state = store.getState()
      const payload: lobby.Payload$selectVillage = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.selectVillage,
        villageId: action.id
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE: {
      const state = store.getState()
      const enterLobby: lobby.Payload$enterLobby = {
        lobby: lobby.Lobby.audience,
        page: 1,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.enterLobby
      }
      const getAvatar: lobby.Payload$getAvatar = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.getAvatar
      }

      store.dispatch(socket.send(enterLobby))
      store.dispatch(socket.send(getAvatar))

      return next(action)
    }
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER: {
      const state = store.getState()
      const enterLobby: lobby.Payload$enterLobby = {
        lobby: lobby.Lobby.human,
        page: 1,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.enterLobby
      }
      const getAvatar: lobby.Payload$getAvatar = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.getAvatar
      }

      store.dispatch(socket.send(enterLobby))
      store.dispatch(socket.send(getAvatar))

      return next(action)
    }
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER: {
      const state = store.getState()
      const enterLobby: lobby.Payload$enterLobby = {
        lobby: lobby.Lobby.robot,
        page: 1,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.enterLobby
      }
      const getAvatar: lobby.Payload$getAvatar = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.getAvatar
      }

      store.dispatch(socket.send(enterLobby))
      store.dispatch(socket.send(getAvatar))

      return next(action)
    }
    case ActionTypes.Target.SHOW_SETTINGS: {
      const payload: lobby.Payload$getSettings = {
        type: lobby.PayloadType.getSettings
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case lobby.PayloadType.ping: {
          const state = store.getState()
          const payload: lobby.Payload$pong = {
            id: action.payload.id,
            token: state.token[state.token.lobby],
            type: lobby.PayloadType.pong
          }

          store.dispatch(socket.send(payload))

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
