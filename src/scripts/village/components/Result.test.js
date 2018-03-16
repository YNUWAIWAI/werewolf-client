// @flow
import React from 'react'
import Result from './Result'
import {shallow} from 'enzyme'

const agents = [
  {
    '@id': 'https://werewolf.world/resource/0.1/Walter',
    'agentIsMine': true,
    'name': {
      'en': 'Walter',
      'ja': 'ヴァルター'
    },
    'image': 'https://werewolf.world/image/0.1/Walter.jpg',
    'id': 1,
    'role': {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'roleName': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'roleImage': 'https://werewolf.world/image/0.1/seer.jpg'
    },
    'status': 'alive',
    'result': 'win',
    'userName': 'Suzuki',
    'userAvatar': 'https://werewolf.world/image/0.1/Gert.jpg'
  }
]

test('<Result visible />', () => {
  const wrapper = shallow(<Result agents={agents} visible />)

  expect(wrapper.find('.result').exists()).toBe(true)
})
test('<Result visible={false} />', () => {
  const wrapper = shallow(<Result agents={agents} visible={false} />)

  expect(wrapper.find('.result').exists()).toBe(false)
})
