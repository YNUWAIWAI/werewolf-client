// @flow
/* eslint sort-keys: 0 */
import CommandSelection from './CommandSelection'
import React from 'react'
import {shallow} from 'enzyme'

test('<CommandSelection agents={[]} text="text" />', () => {
  const handleSelectOptionEventHandler = jest.fn()
  const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
  const wrapper = shallow(<CommandSelection agents={[]} handleSelectOption={handleSelectOption} text="text" />)

  expect(wrapper.find('.command--description').text()).toBe('text（<Connect(Timer) />）')
  expect(wrapper.find('.command--option-container').children()).toHaveLength(0)
})
test('<CommandSelection agents={agents} text="text" />', () => {
  const agents = [
    {
      '@id': 'https://werewolf.world/resource/0.1/Gert',
      'agentIsMine': false,
      'name': {
        'en': 'Gert',
        'ja': 'ゲルト'
      },
      'image': 'https://werewolf.world/image/0.1/Gert.jpg',
      'id': 0,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Walter',
      'agentIsMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.1/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/Catalina',
      'agentIsMine': false,
      'name': {
        'en': 'Catalina',
        'ja': 'カタリナ'
      },
      'image': 'https://werewolf.world/image/0.1/Catalina.jpg',
      'id': 10,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
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
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': true
    }
  ]
  const handleSelectOptionEventHandler = jest.fn()
  const handleSelectOption = jest.fn().mockReturnValueOnce(handleSelectOptionEventHandler)
  const wrapper = shallow(<CommandSelection agents={agents} handleSelectOption={handleSelectOption} text="text" />)

  expect(wrapper.find('.command--description').text()).toBe('text（<Connect(Timer) />）')
  expect(wrapper.find('.command--option-container').children('CommandOption')).toHaveLength(12)
})
