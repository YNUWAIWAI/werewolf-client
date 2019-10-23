import * as ActionTypes from '../constants/ActionTypes'
import {getChannelFromInputChennel, just, strToRoleId} from '../util'
import {Middleware} from '.'
import {socket} from '../actions'
import {village} from '../types'

const getTimestamp = () => new Date().toISOString()
const client2server: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.global.CHANGE_PREDICTION_BOARD: {
      const state = store.getState()
      const myRole = just(state.mine.role)
      const myAgent = just(state.mine.agent)
      const boardAgent = state.prediction.playerStatus.byId[action.playerId]
      const boardRole = state.prediction.roleStatus.byId[action.roleId]

      if (!boardRole) {
        return next(action)
      }
      const payload: village.Payload$boardMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Board
        ],
        '@id': `${state.base['@id']}/boardMessage`,
        'agent': {
          '@context': village.Context.Agent,
          '@id': boardAgent['@id'],
          'id': Number(boardAgent.id),
          'image': boardAgent.image,
          'name': boardAgent.name
        },
        'clientTimestamp': getTimestamp(),
        'date': state.base.date,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': village.Channel.private,
        'myAgent': {
          '@context': village.Context.Agent,
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name,
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
            'characterLimit': state.base.village.chatSettings.characterLimit,
            'limit': state.base.village.chatSettings.limit
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfAgents': state.base.village.totalNumberOfAgents
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.POST_CHAT: {
      const state = store.getState()
      const myRole = just(state.mine.role)
      const myAgent = just(state.mine.agent)
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
        'agent': {
          '@context': village.Context.Agent,
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name
        },
        'characterLimit': state.base.village.chatSettings.characterLimit,
        'clientTimestamp': getTimestamp(),
        'date': state.base.date,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': channel,
        'isMine': true,
        'isOver': false,
        'myAgent': {
          '@context': village.Context.Agent,
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name,
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
            'characterLimit': state.base.village.chatSettings.characterLimit,
            'limit': state.base.village.chatSettings.limit
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfAgents': state.base.village.totalNumberOfAgents
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.READY: {
      const payload: village.Payload$ready = {
        token: action.token,
        type: village.PayloadType.ready,
        villageId: action.villageId
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.SELECT_YES: {
      const state = store.getState()
      const votedAgent = state.commandSelection.byId[action.agentId]
      const myRole = just(state.mine.role)
      const myAgent = just(state.mine.agent)
      const payload: village.Payload$voteMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Vote
        ],
        '@id': `${state.base['@id']}/voteMessage`,
        'agent': {
          '@context': village.Context.Agent,
          '@id': votedAgent['@id'],
          'id': Number(votedAgent.id),
          'image': votedAgent.image,
          'name': votedAgent.name
        },
        'clientTimestamp': getTimestamp(),
        'date': state.base.date,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': village.Channel.private,
        'myAgent': {
          '@context': village.Context.Agent,
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name,
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
            'characterLimit': state.base.village.chatSettings.characterLimit,
            'limit': state.base.village.chatSettings.limit
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfAgents': state.base.village.totalNumberOfAgents
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.global.STAR: {
      const state = store.getState()
      const chat = state.chat.byId[action.id]

      if (chat.type !== 'item') {
        return next(action)
      }
      const myAgent = just(state.mine.agent)
      const myRole = just(state.mine.role)
      const payload: village.Payload$starMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Star
        ],
        '@id': `${state.base['@id']}/starMessage`,
        'clientTimestamp': getTimestamp(),
        'date': state.base.date,
        'directionality': village.Directionality.clientToServer,
        'extensionalDisclosureRange': [],
        'intensionalDisclosureRange': village.Channel.private,
        'myAgent': {
          '@context': village.Context.Agent,
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name,
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
            'characterLimit': state.base.village.chatSettings.characterLimit,
            'limit': state.base.village.chatSettings.limit
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfAgents': state.base.village.totalNumberOfAgents
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.socket.MESSAGE: {
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
          const payload: village.Payload$receivedFlavorTextMessage = {
            date: action.payload.date,
            phase: action.payload.phase,
            token: action.payload.token,
            type: village.PayloadType.receivedFlavorTextMessage,
            villageId: action.payload.village.id
          }

          store.dispatch(socket.send(payload))

          return next(action)
        }
        case village.Message.systemMessage: {
          const payload: village.Payload$receivedSystemMessage = {
            date: action.payload.date,
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
