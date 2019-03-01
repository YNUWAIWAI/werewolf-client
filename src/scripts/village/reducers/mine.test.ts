import reducer, {initialState} from './mine'
import {firstMorning} from './fakeServer'
import {socket} from '../actions'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      socket.message(firstMorning)
    )
  ).toEqual({
    agent: {
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        en: 'Walter',
        ja: 'ヴァルター'
      }
    },
    role: {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': 'seer',
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'name': {
        en: 'Seer',
        ja: '占い師'
      }
    }
  })
})
