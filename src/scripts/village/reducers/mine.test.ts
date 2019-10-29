import reducer, {initialState} from './mine'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import {firstMorning} from './fakeServer'
import {socket} from '../actions'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      socket.message(firstMorning)
    )
  ).toStrictEqual({
    character: {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
      'id': 1,
      'image': ImagePath.Character.a,
      'name': Character.a
    },
    role: {
      '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
      'id': 'seer',
      'image': ImagePath.Role.seer,
      'name': Role.seer
    }
  })
})
