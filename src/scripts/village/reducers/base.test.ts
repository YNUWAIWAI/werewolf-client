import reducer, {initialState} from './base'
import {VERSION} from '../constants/Version'
import {firstMorning} from './fakeServer'
import {message} from '../actions'
import {village} from '../types'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      message.systemMessage(firstMorning)
    )
  ).toStrictEqual({
    '@id': `https://licos.online/state/${VERSION}/village#3`,
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'day': 1,
    'intensionalDisclosureRange': village.Channel.private,
    'phase': village.Phase.morning,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
    'village': {
      '@id': `https://licos.online/state/${VERSION}/village`,
      'chatSettings': {
        maxLengthOfUnicodeCodePoints: 140,
        maxNumberOfChatMessages: 10
      },
      'id': 3,
      'language': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfPlayers': 15
    }
  })
})
