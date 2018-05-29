// @flow
/* eslint sort-keys: 0 */
import CommandSelection from './CommandSelection'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandSelection agents={[]} text="text" />', () => {
  const handleSelectOptionEventHandler = jest.fn()
  const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
  const timer = {
    limit: 10,
    phase: 'night'
  }
  const wrapper = shallow(<CommandSelection agents={[]} handleSelectOption={handleSelectOption} text="text" timer={timer} />)

  expect(wrapper.find('.command--description').text()).toBe('text（<Timer />）')
  expect(wrapper.find('.command--option-container').children()).toHaveLength(0)
})
test('<CommandSelection agents={agents} text="text" />', () => {
  const agents = [
    {
      id: 1,
      image: 'https://werewolf.world/image/0.1/Walter.jpg',
      name: 'ヴァルター'
    },
    {
      id: 2,
      image: 'https://werewolf.world/image/0.1/Moritz.jpg',
      name: 'モーリッツ'
    },
    {
      id: 3,
      image: 'https://werewolf.world/image/0.1/Simson.jpg',
      name: 'ジムゾン'
    },
    {
      id: 4,
      image: 'https://werewolf.world/image/0.1/Thomas.jpg',
      name: 'トーマス'
    },
    {
      id: 5,
      image: 'https://werewolf.world/image/0.1/Nicholas.jpg',
      name: 'ニコラス'
    },
    {
      id: 6,
      image: 'https://werewolf.world/image/0.1/Dieter.jpg',
      name: 'ディーター'
    },
    {
      id: 7,
      image: 'https://werewolf.world/image/0.1/Peter.jpg',
      name: 'ペーター'
    },
    {
      id: 8,
      image: 'https://werewolf.world/image/0.1/Lisa.jpg',
      name: 'リーザ'
    },
    {
      image: 'https://werewolf.world/image/0.1/Alvin.jpg',
      id: 9,
      name: 'アルビン'
    },
    {
      id: 11,
      image: 'https://werewolf.world/image/0.1/Otto.jpg',
      name: 'オットー'
    },
    {
      id: 12,
      image: 'https://werewolf.world/image/0.1/Joachim.jpg',
      name: 'ヨアヒム'
    },
    {
      id: 13,
      image: 'https://werewolf.world/image/0.1/Pamela.jpg',
      name: 'パメラ'
    },
    {
      id: 14,
      image: 'https://werewolf.world/image/0.1/Jacob.jpg',
      name: 'ヤコブ'
    }
  ]
  const timer = {
    limit: 10,
    phase: 'night'
  }
  const handleSelectOptionEventHandler = jest.fn()
  const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
  const wrapper = shallow(<CommandSelection agents={agents} handleSelectOption={handleSelectOption} text="text" timer={timer} />)

  expect(wrapper.find('.command--description').text()).toBe('text（<Timer />）')
  expect(wrapper.find('.command--option-container').children('CommandOption')).toHaveLength(13)
})
