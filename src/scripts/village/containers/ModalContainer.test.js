// @flow
import {DAY_VOTE} from '../constants/Phase'
import ModalContainer from './ModalContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<ModalContainer />', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    agents: {
      all: [
        {
          '@id': 'https://werewolf.world/resource/0.1/Gert',
          'agentIsMine': false,
          'id': 0,
          'image': 'https://werewolf.world/image/0.1/Gert.jpg',
          'isAChoice': false,
          'name': {
            'en': 'Gert',
            'ja': 'ゲルト'
          },
          'status': 'dead',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'day vote'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'agentIsMine': true,
          'id': 1,
          'image': 'https://werewolf.world/image/0.1/Walter.jpg',
          'isAChoice': false,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'day conversation'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Moritz',
          'agentIsMine': false,
          'id': 2,
          'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
          'isAChoice': true,
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'day conversation'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Simson',
          'agentIsMine': false,
          'id': 3,
          'image': 'https://werewolf.world/image/0.1/Simson.jpg',
          'isAChoice': true,
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'day conversation'
        },
        {
          '@id': 'https://werewolf.world/resource/0.1/Thomas',
          'agentIsMine': false,
          'id': 4,
          'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
          'isAChoice': true,
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'day conversation'
        }
      ]
    },
    base: {
      date: 1,
      phase: DAY_VOTE,
      phaseTimeLimit: 100
    },
    language: 'ja',
    modal: {
      id: 2,
      visible: true
    },
    roles: {
      mine: {
        '@id': 'https://werewolf.world/resource/0.1/seer',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.1/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.1/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1,
        'roleIsMine': true
      }
    }
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<ModalContainer store={store} />)

  expect(wrapper.props().id).toBe(2)
  expect(wrapper.props().image).toBe('https://werewolf.world/image/0.1/Moritz.jpg')
  expect(wrapper.props().name).toBe('モーリッツ')
  expect(wrapper.props().text).toBe('投票先はこちらでいいですか？')
  expect(wrapper.props().timer).toEqual({
    limit: 100,
    phase: DAY_VOTE
  })
  expect(wrapper.props().visible).toBe(true)
})
