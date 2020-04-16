import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'
import {getCastFromNumberOfPlayers} from '../util'
import {lobby} from '../types'
import {socket} from '../actions'

const client2server: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.AdvancedSearch.SEARCH: {
      const state = store.getState()
      const payload: lobby.Payload$AdvancedSearch = {
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
    case ActionTypes.BuildVillage.BUILD: {
      const state = store.getState()
      const payload: lobby.Payload$BuildVillage = {
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
    case ActionTypes.IdSearch.SEARCH: {
      const state = store.getState()

      if (state.idSearch.id === -1) {
        return next(action)
      }
      const payload: lobby.Payload$IdSearch = {
        idForSearching: state.idSearch.id,
        lobby: state.token.lobby,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.idSearch
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Settings.CHANGE_LANGUAGE: {
      const payload: lobby.Payload$ChangeLanguage = {
        language: action.language,
        type: lobby.PayloadType.changeLanguage
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Settings.CHANGE_USER_EMAIL: {
      const payload: lobby.Payload$ChangeUserEmail = {
        type: lobby.PayloadType.changeUserEmail,
        userEmail: action.userEmail
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Settings.CHANGE_USER_NAME: {
      const payload: lobby.Payload$ChangeUserName = {
        type: lobby.PayloadType.changeUserName,
        userName: action.userName
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Settings.CHANGE_USER_PASSWORD: {
      const payload: lobby.Payload$ChangeUserPassword = {
        type: lobby.PayloadType.changeUserPassword,
        userPassword: action.userPassword
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.WaitingPage.KICK_OUT_PLAYER: {
      const state = store.getState()
      const payload: lobby.Payload$KickOutPlayer = {
        players: [
          {
            token: state.waitingForPlayers.kickOutToken
          }
        ],
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.kickOutPlayer
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.WaitingPage.LEAVE_WAITING_PAGE: {
      const state = store.getState()
      const me = state.waitingForPlayers.players.find(v => v.isMe)

      if (me && state.waitingForPlayers.village) {
        const payload: lobby.Payload$LeaveWaitingPage = {
          lobby: state.token.lobby,
          token: me.token,
          type: lobby.PayloadType.leaveWaitingPage,
          villageId: state.waitingForPlayers.village.id
        }

        store.dispatch(socket.send(payload))
      }

      return next(action)
    }
    case ActionTypes.WaitingPage.PLAY_GAME: {
      const state = store.getState()

      if (!state.waitingForPlayers.village) {
        return next(action)
      }
      const payload: lobby.Payload$Play = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.play,
        villageId: state.waitingForPlayers.village.id
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.App.SELECT_VILLAGE: {
      const state = store.getState()
      const payload: lobby.Payload$SelectVillage = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.selectVillage,
        villageId: action.id
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE: {
      const state = store.getState()
      const enterLobby: lobby.Payload$EnterLobby = {
        lobby: lobby.LobbyType.onymousAudience,
        page: 1,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.enterLobby
      }
      const getAvatar: lobby.Payload$GetAvatar = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.getAvatar
      }

      store.dispatch(socket.send(enterLobby))
      store.dispatch(socket.send(getAvatar))

      return next(action)
    }
    case ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER: {
      const state = store.getState()
      const enterLobby: lobby.Payload$EnterLobby = {
        lobby: lobby.LobbyType.human,
        page: 1,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.enterLobby
      }
      const getAvatar: lobby.Payload$GetAvatar = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.getAvatar
      }

      store.dispatch(socket.send(enterLobby))
      store.dispatch(socket.send(getAvatar))

      return next(action)
    }
    case ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER: {
      const state = store.getState()
      const enterLobby: lobby.Payload$EnterLobby = {
        lobby: lobby.LobbyType.robot,
        page: 1,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.enterLobby
      }
      const getAvatar: lobby.Payload$GetAvatar = {
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.getAvatar
      }

      store.dispatch(socket.send(enterLobby))
      store.dispatch(socket.send(getAvatar))

      return next(action)
    }
    case ActionTypes.App.SHOW_SETTINGS: {
      const payload: lobby.Payload$GetSettings = {
        type: lobby.PayloadType.getSettings
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Message.PING: {
      const state = store.getState()
      const payload: lobby.Payload$Pong = {
        id: action.payload.id,
        token: state.token[state.token.lobby],
        type: lobby.PayloadType.pong
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.AvatarImageSelect.SELECT_AVATAR: {
      const state = store.getState()

      switch (state.avatarImageList.scope) {
        case ActionTypes.Scope.SelectHumanAvatar: {
          const payload: lobby.Payload$ChangeAvatar = {
            image: action.image,
            language: null,
            lobby: lobby.LobbyType.human,
            name: null,
            token: state.avatarImageList.token,
            type: lobby.PayloadType.changeAvatar
          }

          store.dispatch(socket.send(payload))

          return next(action)
        }
        case ActionTypes.Scope.SelectRobotAvatar: {
          const payload: lobby.Payload$ChangeAvatar = {
            image: action.image,
            language: null,
            lobby: lobby.LobbyType.robot,
            name: null,
            token: state.avatarImageList.token,
            type: lobby.PayloadType.changeAvatar
          }

          store.dispatch(socket.send(payload))

          return next(action)
        }
        default:
          return next(action)
      }
    }
    case ActionTypes.SelectRobotAvatar.AUTHORIZATION_REQUEST_ACCEPTED: {
      const payload: lobby.Payload$AuthorizationRequestAccepted = {
        accessToken: action.accessToken,
        type: lobby.PayloadType.authorizationRequestAccepted
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_IMAGE: {
      const payload: lobby.Payload$ChangeAvatar = {
        image: action.image,
        language: null,
        lobby: lobby.LobbyType.robot,
        name: null,
        token: action.token,
        type: lobby.PayloadType.changeAvatar
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_LANGUAGE: {
      const payload: lobby.Payload$ChangeAvatar = {
        image: null,
        language: action.language,
        lobby: lobby.LobbyType.robot,
        name: null,
        token: action.token,
        type: lobby.PayloadType.changeAvatar
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_NAME: {
      const payload: lobby.Payload$ChangeAvatar = {
        image: null,
        language: null,
        lobby: lobby.LobbyType.robot,
        name: action.name,
        token: action.token,
        type: lobby.PayloadType.changeAvatar
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SelectRobotAvatar.DELETE: {
      const state = store.getState()
      const avatar = state.selectRobotAvatar.avatar
      const token = avatar.allIds
        .filter(id => avatar.byId[id].checked)
        .map(id => avatar.byId[id].token)
      const payload: lobby.Payload$DeleteAvatar = {
        lobby: lobby.LobbyType.robot,
        token,
        type: lobby.PayloadType.deleteAvatar
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SelectRobotAvatar.RENEW_AVATAR_TOKEN: {
      const payload: lobby.Payload$RenewAvatarToken = {
        lobby: lobby.LobbyType.robot,
        token: action.token,
        type: lobby.PayloadType.renewAvatarToken
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND: {
      const state = store.getState()
      const avatar = state.selectRobotAvatar.avatar
      const token = avatar.allIds
        .filter(id => avatar.byId[id].checked)
        .map(id => avatar.byId[id].token)
      const payload: lobby.Payload$RunRobotPlayerInTheBackground = {
        token,
        type: lobby.PayloadType.runRobotPlayerInTheBackground
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SelectRobotAvatar.STOP: {
      const state = store.getState()
      const avatar = state.selectRobotAvatar.avatar
      const token = avatar.allIds
        .filter(id => avatar.byId[id].checked)
        .map(id => avatar.byId[id].token)
      const payload: lobby.Payload$StopRobotPlayer = {
        token,
        type: lobby.PayloadType.stopRobotPlayer
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    default:
      return next(action)
  }
}

export default client2server
