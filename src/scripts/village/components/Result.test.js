// @flow
/* eslint sort-keys: 0 */
import React from 'react'
import Result from './Result'
import {shallow} from 'enzyme'

const rows = [
  {
    'agentId': 1,
    'agentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
    'agentName': 'ヴァルター',
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/seer.jpg',
    'roleName': '占い師',
    'status': 'alive',
    'userAvatar': 'https://werewolf.world/image/0.1/Gert.jpg',
    'userName': 'Suzuki'
  },
  {
    'agentId': 2,
    'agentImage': 'https://werewolf.world/image/0.1/Moritz.jpg',
    'agentName': 'モーリッツ',
    'result': 'lose',
    'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg',
    'roleName': '人狼',
    'status': 'alive',
    'userAvatar': 'https://werewolf.world/image/0.1/Alvin.jpg',
    'userName': 'Takahashi'
  },
  {
    'agentId': 3,
    'agentImage': 'https://werewolf.world/image/0.1/Simson.jpg',
    'agentName': 'ジムゾン',
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/hunter.jpg',
    'roleName': '狩人',
    'status': 'alive',
    'userAvatar': 'https://werewolf.world/image/0.1/Friedel.jpg',
    'userName': 'Tanaka'
  },
  {
    'agentId': 4,
    'agentImage': 'https://werewolf.world/image/0.1/Thomas.jpg',
    'agentName': 'トーマス',
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/medium.jpg',
    'roleName': '霊媒師',
    'status': 'alive',
    'userAvatar': 'https://werewolf.world/image/0.1/Dieter.jpg',
    'userName': 'Ito'
  },
  {
    'agentId': 5,
    'agentImage': 'https://werewolf.world/image/0.1/Nicholas.jpg',
    'agentName': 'ニコラス',
    'result': 'lose',
    'roleImage': 'https://werewolf.world/image/0.1/werehumster.jpg',
    'roleName': 'ハムスター人間',
    'status': 'death by fear',
    'userName': 'Watanabe',
    'userAvatar': 'https://werewolf.world/image/0.1/Erna.jpg'
  },
  {
    'agentId': 6,
    'agentImage': 'https://werewolf.world/image/0.1/Dieter.jpg',
    'agentName': 'ディーター',
    'result': 'lose',
    'roleImage': 'https://werewolf.world/image/0.1/madman.jpg',
    'roleName': '狂人',
    'status': 'death by execution',
    'userName': 'Yamamoto',
    'userAvatar': 'https://werewolf.world/image/0.1/Jacob.jpg'
  },
  {
    'agentId': 7,
    'agentImage': 'https://werewolf.world/image/0.1/Peter.jpg',
    'agentName': 'ペーター',
    'result': 'lose',
    'roleImage': 'https://werewolf.world/image/0.1/werewolf.jpg',
    'roleName': '人狼',
    'status': 'unnatural death',
    'userName': 'Nakamura',
    'userAvatar': 'https://werewolf.world/image/0.1/Nicholas.jpg'
  },
  {
    'agentImage': 'https://werewolf.world/image/0.1/Lisa.jpg',
    'agentName': 'リーザ',
    'agentId': 8,
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
    'roleName': '村人',
    'status': 'unnatural death',
    'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg',
    'userName': 'Kobayashi'
  },
  {
    'agentId': 9,
    'agentImage': 'https://werewolf.world/image/0.1/Alvin.jpg',
    'agentName': 'アルビン',
    'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
    'roleName': '村人',
    'status': 'unnatural death',
    'result': 'win',
    'userAvatar': 'https://werewolf.world/image/0.1/Peter.jpg',
    'userName': 'Yoshida'
  },
  {
    'agentId': 11,
    'agentImage': 'https://werewolf.world/image/0.1/Otto.jpg',
    'agentName': 'オットー',
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/mason.jpg',
    'roleName': '共有者',
    'status': 'unnatural death',
    'userAvatar': 'https://werewolf.world/image/0.1/Simson.jpg',
    'userName': 'Sasaki'
  },
  {
    'agentId': 12,
    'agentImage': 'https://werewolf.world/image/0.1/Joachim.jpg',
    'agentName': 'ヨアヒム',
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
    'roleName': '村人',
    'status': 'death by werewolf attack',
    'userAvatar': 'https://werewolf.world/image/0.1/Otto.jpg',
    'userName': '山口'
  },
  {
    'agentName': 'パメラ',
    'agentImage': 'https://werewolf.world/image/0.1/Pamela.jpg',
    'agentId': 13,
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
    'roleName': '村人',
    'status': 'alive',
    'userAvatar': 'https://werewolf.world/image/0.1/Joachim.jpg',
    'userName': '松本'
  },
  {
    'agentId': 14,
    'agentImage': 'https://werewolf.world/image/0.1/Jacob.jpg',
    'agentName': 'ヤコブ',
    'result': 'win',
    'roleImage': 'https://werewolf.world/image/0.1/villager.jpg',
    'roleName': '村人',
    'status': 'alive',
    'userAvatar': 'https://werewolf.world/image/0.1/Catalina.jpg',
    'userName': '井上'
  }
]
const summary = {
  isPlayer: true,
  result: 'win',
  role: 'https://werewolf.world/resource/0.1/seer'
}

test('<Result visible />', () => {
  const wrapper = shallow(<Result rows={rows} summary={summary} visible />)

  expect(wrapper.find('.result').exists()).toBe(true)
})
test('<Result visible={false} />', () => {
  const wrapper = shallow(<Result rows={rows} summary={summary} visible={false} />)

  expect(wrapper.find('.result').exists()).toBe(false)
})
