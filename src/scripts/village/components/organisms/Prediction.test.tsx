import * as React from 'react'
import Prediction, {Props} from './Prediction'
import {ImagePath} from '../../constants/ImagePath'
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
        image: ImagePath.Character.a,
        initial: 'A',
        isSilent: false,
        name: 'Adil',
        status: village.CharacterStatus.alive
      },
      {
        id: '2',
        image: ImagePath.Character.b,
        initial: 'B',
        isSilent: false,
        name: 'Borya',
        status: village.CharacterStatus.alive
      },
      {
        id: '3',
        image: ImagePath.Character.c,
        initial: 'C',
        isSilent: false,
        name: 'Chacha',
        status: village.CharacterStatus.alive
      },
      {
        id: '4',
        image: ImagePath.Character.d,
        initial: 'D',
        isSilent: false,
        name: 'Devdatta',
        status: village.CharacterStatus.alive
      },
      {
        id: '5',
        image: ImagePath.Character.e,
        initial: 'E',
        isSilent: false,
        name: 'Ekrem',
        status: village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        id: village.RoleId.villager,
        image: ImagePath.Role.villager,
        name: '村人',
        numberOfPlayers: 2
      },
      {
        id: village.RoleId.seer,
        image: ImagePath.Role.seer,
        name: '占い師',
        numberOfPlayers: 1
      },
      {
        id: village.RoleId.madman,
        image: ImagePath.Role.madman,
        name: '狂人',
        numberOfPlayers: 1
      },
      {
        id: village.RoleId.werewolf,
        image: ImagePath.Role.werewolf,
        name: '人狼',
        numberOfPlayers: 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: Props['table'] = {
      '1': {
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
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
    expect(wrapper.find('PredictionCharacter')).toHaveLength(5)
    expect(wrapper.find('PredictionItem')).toHaveLength(4 * 5)
  })
})
