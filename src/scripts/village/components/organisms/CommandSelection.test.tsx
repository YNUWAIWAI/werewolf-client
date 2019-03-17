import * as React from 'react'
import CommandSelection from './CommandSelection'
import Description from '../molecules/Description'
import {shallow} from 'enzyme'

describe('<CommandSelection />', () => {
  test('agents={[]}', () => {
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        agents={[]}
        descriptionId="CommandSelection.Description.dayVote.fixed"
        fixed={false}
        handleSelectOption={handleSelectOption}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(0)
  })
  test('13 agents fixed={false}', () => {
    const agents = [
      {
        id: 1,
        image: 'https://werewolf.world/image/0.2/Walter.jpg',
        name: 'ヴァルター'
      },
      {
        id: 2,
        image: 'https://werewolf.world/image/0.2/Moritz.jpg',
        name: 'モーリッツ'
      },
      {
        id: 3,
        image: 'https://werewolf.world/image/0.2/Simson.jpg',
        name: 'ジムゾン'
      },
      {
        id: 4,
        image: 'https://werewolf.world/image/0.2/Thomas.jpg',
        name: 'トーマス'
      },
      {
        id: 5,
        image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
        name: 'ニコラス'
      },
      {
        id: 6,
        image: 'https://werewolf.world/image/0.2/Dieter.jpg',
        name: 'ディーター'
      },
      {
        id: 7,
        image: 'https://werewolf.world/image/0.2/Peter.jpg',
        name: 'ペーター'
      },
      {
        id: 8,
        image: 'https://werewolf.world/image/0.2/Lisa.jpg',
        name: 'リーザ'
      },
      {
        id: 9,
        image: 'https://werewolf.world/image/0.2/Alvin.jpg',
        name: 'アルビン'
      },
      {
        id: 11,
        image: 'https://werewolf.world/image/0.2/Otto.jpg',
        name: 'オットー'
      },
      {
        id: 12,
        image: 'https://werewolf.world/image/0.2/Joachim.jpg',
        name: 'ヨアヒム'
      },
      {
        id: 13,
        image: 'https://werewolf.world/image/0.2/Pamela.jpg',
        name: 'パメラ'
      },
      {
        id: 14,
        image: 'https://werewolf.world/image/0.2/Jacob.jpg',
        name: 'ヤコブ'
      }
    ]
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        agents={agents}
        descriptionId="CommandSelection.Description.dayVote.fixed"
        fixed={false}
        handleSelectOption={handleSelectOption}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(13)
  })
  test('1 agents fixed', () => {
    const agents = [
      {
        id: 1,
        image: 'https://werewolf.world/image/0.2/Walter.jpg',
        name: 'ヴァルター'
      }
    ]
    const handleSelectOptionEventHandler = jest.fn()
    const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
    const wrapper = shallow(
      <CommandSelection
        agents={agents}
        descriptionId="CommandSelection.Description.dayVote.fixed"
        fixed
        handleSelectOption={handleSelectOption}
      />
    )

    expect(wrapper.find(Description).exists()).toBe(true)
    expect(wrapper.find('.vi--command--selection--select').children()).toHaveLength(1)
  })
})
