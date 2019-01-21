import reducer, {initialState} from './base'
import {firstMorning} from './fakeServer'
import {socket} from '../actions'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      socket.message(firstMorning)
    )
  ).toEqual({
    '@id': 'https://licos.online/state/0.2/village#3',
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'date': 1,
    'intensionalDisclosureRange': 'private',
    'phase': 'morning',
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@id': 'https://licos.online/state/0.2/village',
      'id': 3,
      'lang': 'ja',
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  })
})
