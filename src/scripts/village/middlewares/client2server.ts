/* global village */
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {getAgent, getChannelFromInputChennel, getRole, just, strToRoleId} from '../util'
import {Middleware} from '.'
import {socket} from '../actions'

const getTimestamp = () => new Date().toISOString()
const client2server: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.global.CHANGE_PREDICTION_BOARD: {
      const state = store.getState()
      const myRole = just(state.mine.role)
      const myAgent = just(state.mine.agent)
      const boardAgent = getAgent(state.prediction.playerStatus, action.playerId)
      const boardRole = getRole(state.prediction.roleStatus, action.roleId)
      const payload: village.Payload$boardMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Board
        ],
        '@id': `${state.base['@id']}/boardMessage`,
        'village': {
          '@context': village.Context.Village,
          '@id': state.base.village['@id'],
          'chatSettings': {
            '@context': village.Context.ChatSettings,
            '@id': `${state.base['@id']}/chatSettings`,
            characterLimit: state.base.village.chatSettings.characterLimit,
            limit: state.base.village.chatSettings.limit
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfAgents': state.base.village.totalNumberOfAgents
        },
        'token': state.base.token,
        'phase': state.base.phase,
        'date': state.base.date,
        'phaseTimeLimit': state.base.phaseTimeLimit,
        'phaseStartTime': state.base.phaseStartTime,
        'serverTimestamp': state.base.serverTimestamp,
        'clientTimestamp': getTimestamp(),
        'directionality': village.Directionality.clientToServer,
        'intensionalDisclosureRange': village.Channel.private,
        'extensionalDisclosureRange': [],
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
        'agent': {
          '@context': village.Context.Agent,
          '@id': boardAgent['@id'],
          'id': boardAgent.id,
          'image': boardAgent.image,
          'name': boardAgent.name
        },
        'prediction': action.nextState,
        'role': {
          '@context': village.Context.Role,
          '@id': boardRole['@id'],
          'image': boardRole.image,
          'name': boardRole.name
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
      const payload: village.Payload$playerMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Chat
        ],
        '@id': `${state.base['@id']}/playerMessage`,
        'village': {
          '@context': village.Context.Village,
          '@id': state.base.village['@id'],
          'chatSettings': {
            '@context': village.Context.ChatSettings,
            '@id': `${state.base['@id']}/chatSettings`,
            characterLimit: state.base.village.chatSettings.characterLimit,
            limit: state.base.village.chatSettings.limit
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfAgents': state.base.village.totalNumberOfAgents
        },
        'token': state.base.token,
        'phase': state.base.phase === village.Phase.result ? village.Phase.postMortem : state.base.phase,
        'date': state.base.date,
        'phaseTimeLimit': state.base.phaseTimeLimit,
        'phaseStartTime': state.base.phaseStartTime,
        'serverTimestamp': state.base.serverTimestamp,
        'clientTimestamp': getTimestamp(),
        'directionality': village.Directionality.clientToServer,
        'intensionalDisclosureRange': channel,
        'extensionalDisclosureRange': [],
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
        'agent': {
          '@context': village.Context.Agent,
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name
        },
        'characterLimit': state.base.village.chatSettings.characterLimit,
        'isMine': true,
        'isOver': false,
        'text': {
          '@language': state.language,
          '@value': action.text
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
      const votedAgent = getAgent(state.commandSelection.agents, action.agentId)
      const myRole = just(state.mine.role)
      const myAgent = just(state.mine.agent)
      const payload: village.Payload$voteMessage = {
        '@context': [
          village.BaseContext.Base,
          village.BaseContext.Vote
        ],
        '@id': `${state.base['@id']}/voteMessage`,
        'village': {
          '@context': village.Context.Village,
          '@id': state.base.village['@id'],
          'chatSettings': {
            '@context': village.Context.ChatSettings,
            '@id': `${state.base['@id']}/chatSettings`,
            characterLimit: state.base.village.chatSettings.characterLimit,
            limit: state.base.village.chatSettings.limit
          },
          'id': state.base.village.id,
          'lang': state.base.village.lang,
          'name': state.base.village.name,
          'totalNumberOfAgents': state.base.village.totalNumberOfAgents
        },
        'token': state.base.token,
        'phase': state.base.phase,
        'date': state.base.date,
        'phaseTimeLimit': state.base.phaseTimeLimit,
        'phaseStartTime': state.base.phaseStartTime,
        'serverTimestamp': state.base.serverTimestamp,
        'clientTimestamp': getTimestamp(),
        'directionality': village.Directionality.clientToServer,
        'intensionalDisclosureRange': village.Channel.private,
        'extensionalDisclosureRange': [],
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
        'agent': {
          '@context': village.Context.Agent,
          '@id': votedAgent['@id'],
          'id': votedAgent.id,
          'image': votedAgent.image,
          'name': votedAgent.name
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload['@payload']) {
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
        case village.Message.playerMessage: {
          if (action.payload.phase === village.Phase.flavorText || action.payload.phase === village.Phase.result) {
            return next(action)
          }
          const payload: village.Payload$receivedPlayerMessage = {
            clientTimestamp: action.payload.clientTimestamp,
            serverTimestamp: action.payload.serverTimestamp,
            token: action.payload.token,
            type: village.PayloadType.receivedPlayerMessage,
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
