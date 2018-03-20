// @flow
/* eslint sort-keys: 0 */
import React from 'react'
import Result from './Result'
import {shallow} from 'enzyme'

const agents = {
  all: [
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
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Moritz',
      'agentIsMine': false,
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      },
      'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
      'id': 2,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/werewolf',
        'roleName': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg'
      },
      'status': 'alive',
      'result': 'lose',
      'userName': 'Takahashi',
      'userAvatar': 'https://werewolf.world/image/0.1/Alvin.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Simson',
      'agentIsMine': false,
      'name': {
        'en': 'Simson',
        'ja': 'ジムゾン'
      },
      'image': 'https://werewolf.world/image/0.1/Simson.jpg',
      'id': 3,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/hunter',
        'roleName': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/hunter.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': 'Tanaka',
      'userAvatar': 'https://werewolf.world/image/0.1/Friedel.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Thomas',
      'agentIsMine': false,
      'name': {
        'en': 'Thomas',
        'ja': 'トーマス'
      },
      'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
      'id': 4,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/medium',
        'roleName': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'roleImage': 'https://werewolf.world/image/0.1/medium.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': 'Ito',
      'userAvatar': 'https://werewolf.world/image/0.1/Dieter.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Nicholas',
      'agentIsMine': false,
      'name': {
        'en': 'Nicholas',
        'ja': 'ニコラス'
      },
      'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
      'id': 5,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/werehumster',
        'roleName': {
          'en': 'Werehuster',
          'ja': 'ハムスター人間'
        },
        'roleImage': 'https://werewolf.world/image/0.1/werehumster.jpg'
      },
      'status': 'death by fear',
      'result': 'lose',
      'userName': 'Watanabe',
      'userAvatar': 'https://werewolf.world/image/0.1/Erna.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Dieter',
      'agentIsMine': false,
      'name': {
        'en': 'Dieter',
        'ja': 'ディーター'
      },
      'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
      'id': 6,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/madman',
        'roleName': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/madman.jpg'
      },
      'status': 'death by execution',
      'result': 'lose',
      'userName': 'Yamamoto',
      'userAvatar': 'https://werewolf.world/image/0.1/Jacob.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Peter',
      'agentIsMine': false,
      'name': {
        'en': 'Peter',
        'ja': 'ペーター'
      },
      'image': 'https://werewolf.world/image/0.1/Peter.jpg',
      'id': 7,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/werewolf',
        'roleName': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg'
      },
      'status': 'unnatural death',
      'result': 'lose',
      'userName': 'Nakamura',
      'userAvatar': 'https://werewolf.world/image/0.1/Nicholas.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Lisa',
      'agentIsMine': false,
      'name': {
        'en': 'Lisa',
        'ja': 'リーザ'
      },
      'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
      'id': 8,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'unnatural death',
      'result': 'win',
      'userName': 'Kobayashi',
      'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Alvin',
      'agentIsMine': false,
      'name': {
        'en': 'Alvin',
        'ja': 'アルビン'
      },
      'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
      'id': 9,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'unnatural death',
      'result': 'win',
      'userName': 'Yoshida',
      'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Otto',
      'agentIsMine': false,
      'name': {
        'en': 'Otto',
        'ja': 'オットー'
      },
      'image': 'https://werewolf.world/image/0.1/Otto.jpg',
      'id': 11,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/mason',
        'roleName': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'roleImage': 'https://werewolf.world/image/0.1/mason.jpg'
      },
      'status': 'unnatural death',
      'result': 'win',
      'userName': 'Sasaki',
      'userAvatar': 'https://werewolf.world/image/0.1/Simson.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Joachim',
      'agentIsMine': false,
      'name': {
        'en': 'Joachim',
        'ja': 'ヨアヒム'
      },
      'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
      'id': 12,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'death by werewolf attack',
      'result': 'win',
      'userName': '山口',
      'userAvatar': 'https://werewolf.world/image/0.1/Otto.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Pamela',
      'agentIsMine': false,
      'name': {
        'en': 'Pamela',
        'ja': 'パメラ'
      },
      'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
      'id': 13,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': '松本',
      'userAvatar': 'https://werewolf.world/image/0.1/Joachim.jpg'
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Jacob',
      'agentIsMine': false,
      'name': {
        'en': 'Jacob',
        'ja': 'ヤコブ'
      },
      'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
      'id': 14,
      'role': {
        '@id': 'https://werewolf.world/resource/0.1/villager',
        'roleName': {
          'en': 'Villager',
          'ja': '村人'
        },
        'roleImage': 'https://werewolf.world/image/0.1/villager.jpg'
      },
      'status': 'alive',
      'result': 'win',
      'userName': '井上',
      'userAvatar': 'https://werewolf.world/image/0.1/Catalina.jpg'
    }
  ],
  mine: {
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
}

test('<Result visible />', () => {
  const wrapper = shallow(<Result agents={agents} visible />)

  expect(wrapper.find('.result').exists()).toBe(true)
})
test('<Result visible={false} />', () => {
  const wrapper = shallow(<Result agents={agents} visible={false} />)

  expect(wrapper.find('.result').exists()).toBe(false)
})
