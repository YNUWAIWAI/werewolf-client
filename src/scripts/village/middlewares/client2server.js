import * as types from '../constants/ActionTypes'
import {socket} from '../actions'
import {trimBaseUri} from '../module/util'

const getTimestamp = () => {
  const zeropad = num => String(num).padStart(2, '0')
  const now = new Date()
  const Y = now.getFullYear()
  const M = zeropad(now.getMonth() + 1)
  const D = zeropad(now.getDate())
  const h = zeropad(now.getHours())
  const m = zeropad(now.getMinutes())
  const s = zeropad(now.getSeconds())
  const ms = String(now.getMilliseconds()).padStart(3, '0')
  const to = now.getTimezoneOffset()
  const tz = `${to >= '0' ? '-' : '+'}${zeropad(Math.floor(Math.abs(to) / 60))}:${zeropad(to % 60)}`

  return `${Y}-${M}-${D}T${h}:${m}:${s}.${ms}${tz}`
}

const client2server = store => next => action => {
  switch (action.type) {
    case types.POST_CHAT: {
      const state = store.getState()
      const channnel = (kind => {
        switch (kind) {
          case 'public':
            return kind
          case 'private':
            return kind
          case 'limited':
            return trimBaseUri(state.mine.myRole['@id'])
          case 'grave':
            return kind
          case 'master':
            return kind
          default:
            return 'public'
        }
      })(action.kind)
      const payload = Object.assign(
        {},
        state.base,
        {
          '@context': [
            'https://werewolf.world/context/0.1/base.jsonld',
            'https://werewolf.world/context/0.1/chat.jsonld'
          ],
          '@id': 'https://werewolf.world/resource/0.1/playerMessage',
          'clientTimestamp': getTimestamp(),
          'directionality': 'client to server',
          'extensionalDisclosureRange': [],
          'intensionalDisclosureRange': channnel,
        },
        {
          'chatAgent': {
            '@id': state.mine['@id'],
            'chatAgentId': state.mine.myAgentId,
            'chatAgentImage': state.mine.myAgentImage,
            'chatAgentName': state.mine.myAgentName
          },
          'chatCharacterLimit': 140,
          'chatIsMine': true,
          'chatIsOver': false,
          'chatLanguage': 'ja',
          'chatText': action.text,
          // 'chatUserName': '',
          // 'chatUserAvatar': '',
          'myAgent': state.mine
        }
      )

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.CHANGE_PREDICTION_BOARD: {
      const state = store.getState()
      const payload = Object.assign(
        {},
        state.base,
        {
          '@context': [
            'https://werewolf.world/context/0.1/base.jsonld',
            'https://werewolf.world/context/0.1/board.jsonld'
          ],
          '@id': 'https://werewolf.world/resource/0.1/boardMessage',
          'clientTimestamp': getTimestamp(),
          'directionality': 'client to server',
          'extensionalDisclosureRange': [],
          'intensionalDisclosureRange': 'private',
          'myAgent': state.mine
        },
        {
          'boardAgent': {
            '@id': state.mine['@id'],
            'agentId': state.mine.myAgentId,
            'agentImage': state.mine.myAgentImage,
            'agentName': state.mine.myAgentName
          },
          'boardPrediction': action.state,
          'boardRole': {
            '@id': state.mine.myRole['@id'],
            'roleImage': state.mine.myRole.myRoleImage,
            'roleName': state.mine.myRole.myRoleName
          }
        }
      )

      store.dispatch(socket.send(payload))

      return next(action)
    }
    case types.SELECT_YES: {
      const state = store.getState()
      const agent = state.agents.filter(a => a.id === action.agentId)[0]
      const payload = Object.assign(
        {},
        state.base,
        {
          '@context': [
            'https://werewolf.world/context/0.1/base.jsonld',
            'https://werewolf.world/context/0.1/vote.jsonld'
          ],
          '@id': 'https://werewolf.world/resource/0.1/voteMessage',
          'clientTimestamp': getTimestamp(),
          'directionality': 'client to server',
          'extensionalDisclosureRange': [],
          'intensionalDisclosureRange': 'private',
          'myAgent': state.mine
        },
        {
          'votedAgent': {
            '@id': agent['@id'],
            'votedAgentId': agent.id,
            'votedAgentImage': agent.image,
            'votedAgentName': agent.name
          }
        }
      )

      store.dispatch(socket.send(payload))

      return next(action)
    }
    default:
      return next(action)
  }
}

export default client2server
