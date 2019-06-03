import reducer, {initialState} from './mine'
import Agent from '../constants/Agent'
import ImagePath from '../constants/ImagePath'
import {Role} from '../constants/Role'
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
      'image': ImagePath.Agent.a,
      'name': Agent.a
    },
    role: {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': 'seer',
      'image': ImagePath.Role.seer,
      'name': Role.seer
    }
  })
})
