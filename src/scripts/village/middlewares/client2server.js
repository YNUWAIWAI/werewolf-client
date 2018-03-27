// @flow
/* eslint sort-keys: 0 */
import * as types from '../constants/ActionTypes'
import type {DispatchAPI, Middleware} from 'redux'
import {getMyAgent, getMyRole, getVotedAgent} from '../module/util'
import type {Action} from '.'
import type {ReducerState} from '../reducers'
import {getChannelFromInputChennel} from '../constants/Channels'
import {getRoleId} from '../constants/Role'
import {socket} from '../actions'

const getTimestamp = () => new Date().toISOString()
const client2server: Middleware<ReducerState, Action, DispatchAPI<Action>> = store => next => action => {
  switch (action.type) {
    case types.POST_CHAT: {
      const state = store.getState()
      const myRole = getMyRole(state.roles.all)
      const myAgent = getMyAgent(state.agents.all)
      const channel = getChannelFromInputChennel(action.kind, getRoleId(myRole['@id']))
      const payload: C2SPayload<C2SChat> = {
        '@context': [
          'https://werewolf.world/context/0.1/base.jsonld',
          'https://werewolf.world/context/0.1/chat.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.1/playerMessage',
        'villageId': state.base.villageId,
        'villageName': state.base.villageName,
        'totalNumberOfAgents': state.base.totalNumberOfAgents,
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
          '@id': myAgent['@id'],
          'myAgentId': myAgent.id,
          'myAgentImage': myAgent.image,
          'myAgentName': myAgent.name,
          'myRole': {
            '@id': myRole['@id'],
            'myRoleImage': myRole.image,
            'myRoleName': myRole.name
          }
        },
        'chatAgent': {
          '@id': myAgent['@id'],
          'chatAgentId': myAgent.id,
          'chatAgentImage': myAgent.image,
          'chatAgentName': myAgent.name
        },
        'chatCharacterLimit': 140,
        'chatIsMine': true,
        'chatIsOver': false,
        'chatLanguage': 'ja',
        'chatText': action.text,
        'chatUserName': '',
        'chatUserAvatar': ''
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.CHANGE_PREDICTION_BOARD: {
      const state = store.getState()
      const myRole = getMyRole(state.roles.all)
      const myAgent = getMyAgent(state.agents.all)
      const payload: C2SPayload<C2SBoard> = {
        '@context': [
          'https://werewolf.world/context/0.1/base.jsonld',
          'https://werewolf.world/context/0.1/board.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.1/boardMessage',
        'villageId': state.base.villageId,
        'villageName': state.base.villageName,
        'totalNumberOfAgents': state.base.totalNumberOfAgents,
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
          '@id': myAgent['@id'],
          'myAgentId': myAgent.id,
          'myAgentImage': myAgent.image,
          'myAgentName': myAgent.name,
          'myRole': {
            '@id': myRole['@id'],
            'myRoleImage': myRole.image,
            'myRoleName': myRole.name
          }
        },
        'boardAgent': {
          '@id': myAgent['@id'],
          'agentId': myAgent.id,
          'agentImage': myAgent.image,
          'agentName': myAgent.name
        },
        'boardPrediction': action.nextState,
        'boardRole': {
          '@id': myRole['@id'],
          'roleImage': myRole.image,
          'roleName': myRole.name
        }
      }

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.SELECT_YES: {
      const state = store.getState()
      const votedAgent = getVotedAgent(state.agents.all, action.agentId)
      const myRole = getMyRole(state.roles.all)
      const myAgent = getMyAgent(state.agents.all)
      const payload: C2SPayload<C2SVote> = {
        '@context': [
          'https://werewolf.world/context/0.1/base.jsonld',
          'https://werewolf.world/context/0.1/vote.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.1/voteMessage',
        'villageId': state.base.villageId,
        'villageName': state.base.villageName,
        'totalNumberOfAgents': state.base.totalNumberOfAgents,
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
          '@id': myAgent['@id'],
          'myAgentId': myAgent.id,
          'myAgentImage': myAgent.image,
          'myAgentName': myAgent.name,
          'myRole': {
            '@id': myRole['@id'],
            'myRoleImage': myRole.image,
            'myRoleName': myRole.name
          }
        },
        'votedAgent': {
          '@id': votedAgent['@id'],
          'votedAgentId': votedAgent.id,
          'votedAgentImage': votedAgent.image,
          'votedAgentName': votedAgent.name
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
