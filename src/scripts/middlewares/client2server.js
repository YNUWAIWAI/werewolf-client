import * as types from '../constants/ActionTypes'
import {socketSend} from '../actions'

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
      const payload = Object.assign(
        {},
        state.base,
        {
          'clientTimestamp': getTimestamp(),
          'directionality': 'client to server',
          'extensionalDisclosureRange': [],
          'intensionalDisclosureRange': action.kind,
        },
        {
          '@context': [
            'https://werewolf.world/context/0.1/base.jsonld',
            'https://werewolf.world/context/0.1/chat.jsonld'
          ],
          '@id': 'https://werewolf.world/resource/0.1/playerMessage',
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

      store.dispatch(socketSend(payload))

      return next(action)
    }
    default:
      return next(action)
  }
}

export default client2server
