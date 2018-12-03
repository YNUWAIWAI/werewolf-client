// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import type {DispatchAPI, Middleware} from 'redux'
import type {Payload$boardMessage, Payload$playerMessage, Payload$voteMessage} from 'village'
import {getAgent, getChannelFromInputChennel, getRole, just, strToRoleId} from '../util'
import type {Action} from '.'
import type {ReducerState} from '../reducers'
import {socket} from '../actions'

const getTimestamp = () => new Date().toISOString()
const client2server: Middleware<ReducerState, Action, DispatchAPI<Action>> = store => next => action => {
  switch (action.type) {
    case ActionTypes.CHANGE_PREDICTION_BOARD: {
      const state = store.getState()
      const myRole = just(state.roles.mine)
      const myAgent = just(state.agents.mine)
      const boardAgent = getAgent(state.agents.all, action.playerId)
      const boardRole = getRole(state.roles.all, action.roleId)
      const payload: Payload$boardMessage = {
        '@context': [
          'https://werewolf.world/context/0.2/base.jsonld',
          'https://werewolf.world/context/0.2/board.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.2/boardMessage',
        'village': {
          '@context': 'https://werewolf.world/context/0.2/village.jsonld',
          '@id': state.base.village['@id'],
          'id': state.base.village.id,
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
        'directionality': 'client to server',
        'intensionalDisclosureRange': 'private',
        'extensionalDisclosureRange': [],
        'myAgent': {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name,
          'role': {
            '@context': 'https://werewolf.world/context/0.2/role.jsonld',
            '@id': myRole['@id'],
            'image': myRole.image,
            'name': myRole.name
          }
        },
        'agent': {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': boardAgent['@id'],
          'id': boardAgent.id,
          'image': boardAgent.image,
          'name': boardAgent.name
        },
        'prediction': action.nextState,
        'role': {
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': boardRole['@id'],
          'image': boardRole.image,
          'name': boardRole.name
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.POST_CHAT: {
      const state = store.getState()
      const myRole = just(state.roles.mine)
      const myAgent = just(state.agents.mine)
      const channel = getChannelFromInputChennel({
        inputChannel: action.kind,
        role: strToRoleId(myRole.name.en)
      })
      const payload: Payload$playerMessage = {
        '@context': [
          'https://werewolf.world/context/0.2/base.jsonld',
          'https://werewolf.world/context/0.2/chat.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.2/playerMessage',
        'village': {
          '@context': 'https://werewolf.world/context/0.2/village.jsonld',
          '@id': state.base.village['@id'],
          'id': state.base.village.id,
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
        'directionality': 'client to server',
        'intensionalDisclosureRange': channel,
        'extensionalDisclosureRange': [],
        'myAgent': {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name,
          'role': {
            '@context': 'https://werewolf.world/context/0.2/role.jsonld',
            '@id': myRole['@id'],
            'image': myRole.image,
            'name': myRole.name
          }
        },
        'agent': {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name
        },
        'characterLimit': 140,
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
    case ActionTypes.READY: {
      const payload = {
        token: action.token,
        type: 'ready',
        villageId: action.villageId
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case ActionTypes.SELECT_YES: {
      const state = store.getState()
      const votedAgent = getAgent(state.agents.all, action.agentId)
      const myRole = just(state.roles.mine)
      const myAgent = just(state.agents.mine)
      const payload: Payload$voteMessage = {
        '@context': [
          'https://werewolf.world/context/0.2/base.jsonld',
          'https://werewolf.world/context/0.2/vote.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.2/voteMessage',
        'village': {
          '@context': 'https://werewolf.world/context/0.2/village.jsonld',
          '@id': state.base.village['@id'],
          'id': state.base.village.id,
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
        'directionality': 'client to server',
        'intensionalDisclosureRange': 'private',
        'extensionalDisclosureRange': [],
        'myAgent': {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': myAgent['@id'],
          'id': myAgent.id,
          'image': myAgent.image,
          'name': myAgent.name,
          'role': {
            '@context': 'https://werewolf.world/context/0.2/role.jsonld',
            '@id': myRole['@id'],
            'image': myRole.image,
            'name': myRole.name
          }
        },
        'agent': {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': votedAgent['@id'],
          'id': votedAgent.id,
          'image': votedAgent.image,
          'name': votedAgent.name
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    default:
      return next(action)
  }
}

export default client2server
