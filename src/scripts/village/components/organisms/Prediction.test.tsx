/* global village */
import * as React from 'react'
import Prediction, {Props} from './Prediction'
import {shallow} from 'enzyme'

describe('<Prediction />', () => {
  test('playerStatus.length === 0 || roleStatus.length === 0', () => {
    const handleBoardClickEventHandler = jest.fn()
    const handleBoardClick = jest.fn(handleBoardClickEventHandler)
    const playerStatus: Props['playerStatus'] = []
    const roleStatus: Props['roleStatus'] = []
    const table: Props['table'] = {}
    const wrapper = shallow(
      <Prediction
        handleBoardClick={handleBoardClick}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        table={table}
      />
    )

    expect(wrapper.text()).toBe('')
  })
  test('playerStatus.length !== 0 && roleStatus.length !== 0', () => {
    const handleBoardClickEventHandler = jest.fn()
    const handleBoardClick = jest.fn(handleBoardClickEventHandler)
    const playerStatus: Props['playerStatus'] = [
      {
        id: 1,
        image: 'https://werewolf.world/image/0.2/Walter.jpg',
        name: 'ヴァルター',
        status: village.AgentStatus.alive
      },
      {
        id: 2,
        image: 'https://werewolf.world/image/0.2/Moritz.jpg',
        name: 'モーリッツ',
        status: village.AgentStatus.alive
      },
      {
        id: 3,
        image: 'https://werewolf.world/image/0.2/Simson.jpg',
        name: 'ジムゾン',
        status: village.AgentStatus.alive
      },
      {
        id: 4,
        image: 'https://werewolf.world/image/0.2/Thomas.jpg',
        name: 'トーマス',
        status: village.AgentStatus.alive
      },
      {
        id: 5,
        image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        name: 'ニコラス',
        status: village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        caption: '村人',
        id: village.RoleId.villager,
        image: 'https://werewolf.world/image/0.2/villager.jpg',
        numberOfAgents: 2
      },
      {
        caption: '占い師',
        id: village.RoleId.seer,
        image: 'https://werewolf.world/image/0.2/seer.jpg',
        numberOfAgents: 1
      },
      {
        caption: '狂人',
        id: village.RoleId.madman,
        image: 'https://werewolf.world/image/0.2/madman.jpg',
        numberOfAgents: 1
      },
      {
        caption: '人狼',
        id: village.RoleId.werewolf,
        image: 'https://werewolf.world/image/0.2/werewolf.jpg',
        numberOfAgents: 1
      }
    ]
    const table: Props['table'] = {
      '1': {
        madman: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const wrapper = shallow(
      <Prediction
        handleBoardClick={handleBoardClick}
        playerStatus={playerStatus}
        roleStatus={roleStatus}
        table={table}
      />
    )

    expect(wrapper.find('PredictionRole')).toHaveLength(4)
    expect(wrapper.find('PredictionPlayer')).toHaveLength(5)
    expect(wrapper.find('PredictionItem')).toHaveLength(4 * 5)
  })
})
