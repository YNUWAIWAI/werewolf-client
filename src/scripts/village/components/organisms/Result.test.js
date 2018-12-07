// @flow
import React from 'react'
import Result from './Result'
import {shallow} from 'enzyme'

const agents = {
  agent0: {
    agentId: 1,
    agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
    agentName: 'ヴァルター',
    avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
    avatarName: 'Suzuki',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
    roleName: '占い師',
    status: 'alive'
  },
  agent1: {
    agentId: 2,
    agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
    agentName: 'モーリッツ',
    avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
    avatarName: 'Takahashi',
    result: 'lose',
    roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
    roleName: '人狼',
    status: 'alive'
  },
  agent2: {
    agentId: 3,
    agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
    agentName: 'ジムゾン',
    avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
    avatarName: 'Tanaka',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
    roleName: '狩人',
    status: 'alive'
  },
  agent3: {
    agentId: 4,
    agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
    agentName: 'トーマス',
    avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
    avatarName: 'Ito',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
    roleName: '霊媒師',
    status: 'alive'
  },
  agent4: {
    agentId: 5,
    agentImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
    agentName: 'ニコラス',
    avatarImage: 'https://werewolf.world/image/0.2/Erna.jpg',
    avatarName: 'Watanabe',
    result: 'lose',
    roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
    roleName: 'ハムスター人間',
    status: 'death by fear'
  },
  agent5: {
    agentId: 6,
    agentImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
    agentName: 'ディーター',
    avatarImage: 'https://werewolf.world/image/0.2/Jacob.jpg',
    avatarName: 'Yamamoto',
    result: 'lose',
    roleImage: 'https://werewolf.world/image/0.2/madman.jpg',
    roleName: '狂人',
    status: 'death by execution'
  },
  agent6: {
    agentId: 7,
    agentImage: 'https://werewolf.world/image/0.2/Peter.jpg',
    agentName: 'ペーター',
    avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
    avatarName: 'Nakamura',
    result: 'lose',
    roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
    roleName: '人狼',
    status: 'unnatural death'
  },
  agent7: {
    agentId: 8,
    agentImage: 'https://werewolf.world/image/0.2/Lisa.jpg',
    agentName: 'リーザ',
    avatarImage: 'https://werewolf.world/image/0.2/Peter.jpg',
    avatarName: 'Kobayashi',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: 'unnatural death'
  },
  agent8: {
    agentId: 9,
    agentImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
    agentName: 'アルビン',
    avatarImage: 'https://werewolf.world/image/0.2/Peter.jpg',
    avatarName: 'Yoshida',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: 'unnatural death'
  },
  agent9: {
    agentId: 11,
    agentImage: 'https://werewolf.world/image/0.2/Otto.jpg',
    agentName: 'オットー',
    avatarImage: 'https://werewolf.world/image/0.2/Simson.jpg',
    avatarName: 'Sasaki',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/mason.jpg',
    roleName: '共有者',
    status: 'unnatural death'
  },
  agent10: {
    agentId: 12,
    agentImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
    agentName: 'ヨアヒム',
    avatarImage: 'https://werewolf.world/image/0.2/Otto.jpg',
    avatarName: '山口',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: 'death by attack'
  },
  agent11: {
    agentId: 13,
    agentImage: 'https://werewolf.world/image/0.2/Pamela.jpg',
    agentName: 'パメラ',
    avatarImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
    avatarName: '松本',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: 'alive'
  },
  agent12: {
    agentId: 14,
    agentImage: 'https://werewolf.world/image/0.2/Jacob.jpg',
    agentName: 'ヤコブ',
    avatarImage: 'https://werewolf.world/image/0.2/Catalina.jpg',
    avatarName: '井上',
    result: 'win',
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: 'alive'
  }
}
const losers = [
  'agent1',
  'agent4',
  'agent5',
  'agent6'
]
const me = 'agent0'
const summary = {
  description: {
    loser: 'Result.summary.loser(2)',
    summary: 'Result.summary.description(player, win)',
    winner: 'Result.summary.winner'
  },
  loserTeam: new Set(['werehamster', 'werewolf']),
  myTeam: 'villager',
  winnerTeam: 'villager'
}
const winners = [
  'agent0',
  'agent2',
  'agent3',
  'agent7',
  'agent8',
  'agent9',
  'agent10',
  'agent11',
  'agent12'
]

test('<Result visible />', () => {
  const handleClickCloseButton = jest.fn()
  const wrapper = shallow(
    <Result
      agents={agents}
      handleClickCloseButton={handleClickCloseButton}
      losers={losers}
      me={me}
      summary={summary}
      visible
      winners={winners}
    />
  )

  expect(handleClickCloseButton).toHaveBeenCalledTimes(0)
  expect(wrapper.find('.result').exists()).toBe(true)
})
test('<Result visible={false} />', () => {
  const handleClickCloseButton = jest.fn()
  const wrapper = shallow(
    <Result
      agents={agents}
      handleClickCloseButton={handleClickCloseButton}
      losers={losers}
      me={me}
      summary={summary}
      visible={false}
      winners={winners}
    />
  )

  expect(handleClickCloseButton).toHaveBeenCalledTimes(0)
  expect(wrapper.find('.result').exists()).toBe(false)
})
