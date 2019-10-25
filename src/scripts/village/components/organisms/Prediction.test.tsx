import * as React from 'react'
import Prediction, {Props} from './Prediction'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<Prediction />', () => {
  test('characterStatus.length === 0 || roleStatus.length === 0', () => {
    const handleBoardClickEventHandler = jest.fn()
    const handleBoardClick = jest.fn(handleBoardClickEventHandler)
    const handleMouseEnterEventHandler = jest.fn()
    const handleMouseEnter = jest.fn(handleMouseEnterEventHandler)
    const handleMouseLeave = jest.fn()
    const characterStatus: Props['characterStatus'] = []
    const roleStatus: Props['roleStatus'] = []
    const table: Props['table'] = {}
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const wrapper = shallow(
      <Prediction
        characterStatus={characterStatus}
        handleBoardClick={handleBoardClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        roleStatus={roleStatus}
        spec={spec}
        table={table}
      />
    )

    expect(wrapper.text()).toBe('')
  })
  test('characterStatus.length !== 0 && roleStatus.length !== 0', () => {
    const handleBoardClickEventHandler = jest.fn()
    const handleBoardClick = jest.fn(handleBoardClickEventHandler)
    const handleMouseEnterEventHandler = jest.fn()
    const handleMouseEnter = jest.fn(handleMouseEnterEventHandler)
    const handleMouseLeave = jest.fn()
    const characterStatus: Props['characterStatus'] = [
      {
        id: '1',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        initial: 'A',
        isSilent: false,
        name: 'Adil',
        status: village.CharacterStatus.alive
      },
      {
        id: '2',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        initial: 'B',
        isSilent: false,
        name: 'Borya',
        status: village.CharacterStatus.alive
      },
      {
        id: '3',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        initial: 'C',
        isSilent: false,
        name: 'Chacha',
        status: village.CharacterStatus.alive
      },
      {
        id: '4',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        initial: 'D',
        isSilent: false,
        name: 'Devdatta',
        status: village.CharacterStatus.alive
      },
      {
        id: '5',
        image: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        initial: 'E',
        isSilent: false,
        name: 'Ekrem',
        status: village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        id: village.RoleId.villager,
        image: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        name: '村人',
        numberOfCharacters: 2
      },
      {
        id: village.RoleId.seer,
        image: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        name: '占い師',
        numberOfCharacters: 1
      },
      {
        id: village.RoleId.madman,
        image: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        name: '狂人',
        numberOfCharacters: 1
      },
      {
        id: village.RoleId.werewolf,
        image: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        name: '人狼',
        numberOfCharacters: 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
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
        characterStatus={characterStatus}
        handleBoardClick={handleBoardClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        roleStatus={roleStatus}
        spec={spec}
        table={table}
      />
    )

    expect(wrapper.find('PredictionRole')).toHaveLength(4)
    expect(wrapper.find('PredictionPlayer')).toHaveLength(5)
    expect(wrapper.find('PredictionItem')).toHaveLength(4 * 5)
  })
})
