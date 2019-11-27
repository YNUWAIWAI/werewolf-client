import * as ActionTypes from '../constants/ActionTypes'
import {
  getChannelFromInputChennel,
  just,
  strToRoleId
} from '../util'
import {
  lobby,
  village
} from '../types'
import {Middleware} from '.'
import {socket} from '../actions'

const getTimestamp = () => new Date().toISOString()
const client2server: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_PREDICTION_BOARD: {
      const state = store.getState()
      const myRole = just(state.mine.role)
      const myCharacter = just(state.mine.character)
      const boardCharacter = state.prediction.characterStatus.byId[action.characterId]
      const boardRole = state.prediction.roleStatus.byId[action.roleId]

      if (!boardRole) {
        return next(action)
      }
      const payload: village.Payload$BoardMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Board
        ],
        '@id': `${state.base['@id']}/boardMessage`,
        'character': {
          '@context': village.Context.Character,
          '@id': boardCharacter['@id'],
          'id': Number(boardCharacter.id),
          'image': boardCharacter.image,
          'name': boardCharacter.name
        },
        'clientTimestamp': getTimestamp(),
        'day': state.base.day,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': village.Channel.private,
        'myCharacter': {
          '@context': village.Context.Character,
          '@id': myCharacter['@id'],
          'id': myCharacter.id,
          'image': myCharacter.image,
          'name': myCharacter.name,
          'role': {
            '@context': village.Context.Role,
            '@id': myRole['@id'],
            'image': myRole.image,
            'name': myRole.name
          }
        },
        'phase': state.base.phase,
        'phaseStartTime': state.base.phaseStartTime,
        'phaseTimeLimit': state.base.phaseTimeLimit,
        'prediction': action.nextState,
        'role': {
          '@context': village.Context.Role,
          '@id': boardRole['@id'],
          'image': boardRole.image,
          'name': boardRole.name
        },
        'serverTimestamp': state.base.serverTimestamp,
        'token': state.base.token,
        'village': {
          '@context': village.Context.Village,
          '@id': state.base.village['@id'],
          'chatSettings': {
            '@context': village.Context.ChatSettings,
            '@id': `${state.base['@id']}/chatSettings`,
            'maxLengthOfUnicodeCodePoints': state.base.village.chatSettings.maxLengthOfUnicodeCodePoints,
            'maxNumberOfChatMessages': state.base.village.chatSettings.maxNumberOfChatMessages
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfPlayers': state.base.village.totalNumberOfPlayers
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.App.POST_CHAT: {
      const state = store.getState()
      const myRole = just(state.mine.role)
      const myCharacter = just(state.mine.character)
      const channel = getChannelFromInputChennel({
        inputChannel: action.channel,
        role: strToRoleId(myRole.name.en)
      })
      const payload: village.Payload$ChatMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Chat
        ],
        '@id': `${state.base['@id']}/chatMessage`,
        'character': {
          '@context': village.Context.Character,
          '@id': myCharacter['@id'],
          'id': myCharacter.id,
          'image': myCharacter.image,
          'name': myCharacter.name
        },
        'clientTimestamp': getTimestamp(),
        'day': state.base.day,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': channel,
        'isFromServer': true,
        'isMine': true,
        'isOver': false,
        'maxLengthOfUnicodeCodePoints': state.base.village.chatSettings.maxLengthOfUnicodeCodePoints,
        'myCharacter': {
          '@context': village.Context.Character,
          '@id': myCharacter['@id'],
          'id': myCharacter.id,
          'image': myCharacter.image,
          'name': myCharacter.name,
          'role': {
            '@context': village.Context.Role,
            '@id': myRole['@id'],
            'image': myRole.image,
            'name': myRole.name
          }
        },
        'phase': state.base.phase === village.Phase.result ? village.Phase.postMortem : state.base.phase,
        'phaseStartTime': state.base.phaseStartTime,
        'phaseTimeLimit': state.base.phaseTimeLimit,
        'serverTimestamp': state.base.serverTimestamp,
        'text': {
          '@language': state.language,
          '@value': action.text
        },
        'token': state.base.token,
        'village': {
          '@context': village.Context.Village,
          '@id': state.base.village['@id'],
          'chatSettings': {
            '@context': village.Context.ChatSettings,
            '@id': `${state.base['@id']}/chatSettings`,
            'maxLengthOfUnicodeCodePoints': state.base.village.chatSettings.maxLengthOfUnicodeCodePoints,
            'maxNumberOfChatMessages': state.base.village.chatSettings.maxNumberOfChatMessages
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfPlayers': state.base.village.totalNumberOfPlayers
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.App.READY: {
      const payload: village.Payload$Ready = {
        token: action.token,
        type: lobby.PayloadType.ready,
        villageId: action.villageId
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.App.SELECT_YES: {
      const state = store.getState()
      const votedCharacter = state.commandSelection.byId[action.characterId]
      const myRole = just(state.mine.role)
      const myCharacter = just(state.mine.character)
      const payload: village.Payload$VoteMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Vote
        ],
        '@id': `${state.base['@id']}/voteMessage`,
        'character': {
          '@context': village.Context.Character,
          '@id': votedCharacter['@id'],
          'id': Number(votedCharacter.id),
          'image': votedCharacter.image,
          'name': votedCharacter.name
        },
        'clientTimestamp': getTimestamp(),
        'day': state.base.day,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': village.Channel.private,
        'myCharacter': {
          '@context': village.Context.Character,
          '@id': myCharacter['@id'],
          'id': myCharacter.id,
          'image': myCharacter.image,
          'name': myCharacter.name,
          'role': {
            '@context': village.Context.Role,
            '@id': myRole['@id'],
            'image': myRole.image,
            'name': myRole.name
          }
        },
        'phase': state.base.phase,
        'phaseStartTime': state.base.phaseStartTime,
        'phaseTimeLimit': state.base.phaseTimeLimit,
        'serverTimestamp': state.base.serverTimestamp,
        'token': state.base.token,
        'village': {
          '@context': village.Context.Village,
          '@id': state.base.village['@id'],
          'chatSettings': {
            '@context': village.Context.ChatSettings,
            '@id': `${state.base['@id']}/chatSettings`,
            'maxLengthOfUnicodeCodePoints': state.base.village.chatSettings.maxLengthOfUnicodeCodePoints,
            'maxNumberOfChatMessages': state.base.village.chatSettings.maxNumberOfChatMessages
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfPlayers': state.base.village.totalNumberOfPlayers
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.App.STAR: {
      const state = store.getState()
      const chat = state.chat.byId[action.id]

      if (chat.type !== 'item') {
        return next(action)
      }
      const myCharacter = just(state.mine.character)
      const myRole = just(state.mine.role)
      const payload: village.Payload$StarMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Star
        ],
        '@id': `${state.base['@id']}/starMessage`,
        'clientTimestamp': getTimestamp(),
        'day': state.base.day,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': village.Channel.private,
        'myCharacter': {
          '@context': village.Context.Character,
          '@id': myCharacter['@id'],
          'id': myCharacter.id,
          'image': myCharacter.image,
          'name': myCharacter.name,
          'role': {
            '@context': village.Context.Role,
            '@id': myRole['@id'],
            'image': myRole.image,
            'name': myRole.name
          }
        },
        'phase': state.base.phase,
        'phaseStartTime': state.base.phaseStartTime,
        'phaseTimeLimit': state.base.phaseTimeLimit,
        'serverTimestamp': state.base.serverTimestamp,
        'star': {
          '@context': village.Context.Star,
          '@id': `${state.base['@id']}/star`,
          'clientTimestamp': chat.clientTimestamp,
          'isMarked': action.isMarked,
          'serverTimestamp': chat.serverTimestamp,
          'token': state.base.token
        },
        'token': state.base.token,
        'village': {
          '@context': village.Context.Village,
          '@id': state.base.village['@id'],
          'chatSettings': {
            '@context': village.Context.ChatSettings,
            '@id': `${state.base['@id']}/chatSettings`,
            'maxLengthOfUnicodeCodePoints': state.base.village.chatSettings.maxLengthOfUnicodeCodePoints,
            'maxNumberOfChatMessages': state.base.village.chatSettings.maxNumberOfChatMessages
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfPlayers': state.base.village.totalNumberOfPlayers
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.Socket.MESSAGE: {
      switch (action.payload['@payload']) {
        case village.Message.chatMessage: {
          if (action.payload.phase === village.Phase.flavorText || action.payload.phase === village.Phase.result) {
            return next(action)
          }
          const payload: village.Payload$ReceivedChatMessage = {
            clientTimestamp: action.payload.clientTimestamp,
            serverTimestamp: action.payload.serverTimestamp,
            token: action.payload.token,
            type: village.PayloadType.receivedChatMessage,
            villageId: action.payload.village.id
          }

          store.dispatch(socket.send(payload))

          return next(action)
        }

        case village.Message.flavorTextMessage: {
          const payload: village.Payload$ReceivedFlavorTextMessage = {
            day: action.payload.day,
            phase: action.payload.phase,
            token: action.payload.token,
            type: village.PayloadType.receivedFlavorTextMessage,
            villageId: action.payload.village.id
          }

          store.dispatch(socket.send(payload))

          return next(action)
        }
        case village.Message.systemMessage: {
          const payload: village.Payload$ReceivedSystemMessage = {
            day: action.payload.day,
            phase: action.payload.phase,
            token: action.payload.token,
            type: village.PayloadType.receivedSystemMessage,
            villageId: action.payload.village.id
          }

          store.dispatch(socket.send(payload))

          return next(action)
        }
        default:
          return next(action)
      }
    }
    default:
      return next(action)
  }
}

export default client2server
