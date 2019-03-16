/* global village */
import * as React from 'react'
import Result, {Props} from './Result'
import {shallow} from 'enzyme'

const agents: Props['agents'] = {
  agent0: {
    agentId: 1,
    agentImage: 'https://werewolf.world/image/0.2/Walter.jpg',
    agentName: 'ヴァルター',
    avatarImage: 'https://werewolf.world/image/0.2/Gert.jpg',
    avatarName: 'Suzuki',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/seer.jpg',
    roleName: '占い師',
    status: village.AgentStatus.alive
  },
  agent1: {
    agentId: 2,
    agentImage: 'https://werewolf.world/image/0.2/Moritz.jpg',
    agentName: 'モーリッツ',
    avatarImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
    avatarName: 'Takahashi',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
    roleName: '人狼',
    status: village.AgentStatus.alive
  },
  agent2: {
    agentId: 3,
    agentImage: 'https://werewolf.world/image/0.2/Simson.jpg',
    agentName: 'ジムゾン',
    avatarImage: 'https://werewolf.world/image/0.2/Friedel.jpg',
    avatarName: 'Tanaka',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/hunter.jpg',
    roleName: '狩人',
    status: village.AgentStatus.alive
  },
  agent3: {
    agentId: 4,
    agentImage: 'https://werewolf.world/image/0.2/Thomas.jpg',
    agentName: 'トーマス',
    avatarImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
    avatarName: 'Ito',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/medium.jpg',
    roleName: '霊媒師',
    status: village.AgentStatus.alive
  },
  agent4: {
    agentId: 5,
    agentImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
    agentName: 'ニコラス',
    avatarImage: 'https://werewolf.world/image/0.2/Erna.jpg',
    avatarName: 'Watanabe',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.2/werehamster.jpg',
    roleName: 'ハムスター人間',
    status: village.AgentStatus.deathByFear
  },
  agent5: {
    agentId: 6,
    agentImage: 'https://werewolf.world/image/0.2/Dieter.jpg',
    agentName: 'ディーター',
    avatarImage: 'https://werewolf.world/image/0.2/Jacob.jpg',
    avatarName: 'Yamamoto',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.2/madman.jpg',
    roleName: '狂人',
    status: village.AgentStatus.deathByExecution
  },
  agent6: {
    agentId: 7,
    agentImage: 'https://werewolf.world/image/0.2/Peter.jpg',
    agentName: 'ペーター',
    avatarImage: 'https://werewolf.world/image/0.2/Nicholas.jpg',
    avatarName: 'Nakamura',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.2/werewolf.jpg',
    roleName: '人狼',
    status: village.AgentStatus.unnaturalDeath
  },
  agent7: {
    agentId: 8,
    agentImage: 'https://werewolf.world/image/0.2/Lisa.jpg',
    agentName: 'リーザ',
    avatarImage: 'https://werewolf.world/image/0.2/Peter.jpg',
    avatarName: 'Kobayashi',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: village.AgentStatus.unnaturalDeath
  },
  agent8: {
    agentId: 9,
    agentImage: 'https://werewolf.world/image/0.2/Alvin.jpg',
    agentName: 'アルビン',
    avatarImage: 'https://werewolf.world/image/0.2/Peter.jpg',
    avatarName: 'Yoshida',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: village.AgentStatus.unnaturalDeath
  },
  agent9: {
    agentId: 11,
    agentImage: 'https://werewolf.world/image/0.2/Otto.jpg',
    agentName: 'オットー',
    avatarImage: 'https://werewolf.world/image/0.2/Simson.jpg',
    avatarName: 'Sasaki',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/mason.jpg',
    roleName: '共有者',
    status: village.AgentStatus.unnaturalDeath
  },
  agent10: {
    agentId: 12,
    agentImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
    agentName: 'ヨアヒム',
    avatarImage: 'https://werewolf.world/image/0.2/Otto.jpg',
    avatarName: '山口',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: village.AgentStatus.deathByAttack
  },
  agent11: {
    agentId: 13,
    agentImage: 'https://werewolf.world/image/0.2/Pamela.jpg',
    agentName: 'パメラ',
    avatarImage: 'https://werewolf.world/image/0.2/Joachim.jpg',
    avatarName: '松本',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: village.AgentStatus.alive
  },
  agent12: {
    agentId: 14,
    agentImage: 'https://werewolf.world/image/0.2/Jacob.jpg',
    agentName: 'ヤコブ',
    avatarImage: 'https://werewolf.world/image/0.2/Catalina.jpg',
    avatarName: '井上',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.2/villager.jpg',
    roleName: '村人',
    status: village.AgentStatus.alive
  }
}
const losers: Props['losers'] = [
  'agent1',
  'agent4',
  'agent5',
  'agent6'
]
const me: Props['me'] = 'agent0'
const summary: Props['summary'] = {
  description: {
    loser: 'Result.summary.loser(2)',
    summary: 'Result.summary.description(player, win)',
    winner: 'Result.summary.winner'
  },
  loserTeam: new Set([village.Team.werehamster, village.Team.werewolf]),
  myTeam: village.Team.villager,
  winnerTeam: village.Team.villager
}
const winners: Props['winners'] = [
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

describe('<Result />', () => {
  test('visible={true}', () => {
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
    expect(wrapper.find('.vi--result').exists()).toBe(true)
  })
  test('visible={false}', () => {
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
    expect(wrapper.isEmptyRender()).toBe(false)
  })
})
