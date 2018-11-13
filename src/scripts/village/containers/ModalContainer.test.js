// @flow
import {DAY} from '../constants/Phase'
import ModalContainer from './ModalContainer'
import React from 'react'
import {shallow} from 'enzyme'

test('<ModalContainer />', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    agents: {
      all: [
        {
          '@id': 'https://werewolf.world/resource/0.2/Gert',
          'agentIsMine': false,
          'id': 0,
          'image': 'https://werewolf.world/image/0.2/Gert.jpg',
          'isAChoice': false,
          'name': {
            'en': 'Gert',
            'ja': 'ゲルト'
          },
          'status': 'dead',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'day'
        },
        {
          '@id': 'https://werewolf.world/resource/0.2/Walter',
          'agentIsMine': true,
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'morning'
        },
        {
          '@id': 'https://werewolf.world/resource/0.2/Moritz',
          'agentIsMine': false,
          'id': 2,
          'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
          'isAChoice': true,
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'morning'
        },
        {
          '@id': 'https://werewolf.world/resource/0.2/Simson',
          'agentIsMine': false,
          'id': 3,
          'image': 'https://werewolf.world/image/0.2/Simson.jpg',
          'isAChoice': true,
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'morning'
        },
        {
          '@id': 'https://werewolf.world/resource/0.2/Thomas',
          'agentIsMine': false,
          'id': 4,
          'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
          'isAChoice': true,
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'status': 'alive',
          'statusUpdateDate': 1,
          'statusUpdatePhase': 'morning'
        }
      ]
    },
    base: {
      date: 1,
      phase: DAY,
      phaseTimeLimit: 100
    },
    language: 'ja',
    modal: {
      id: 2,
      visible: true
    },
    roles: {
      mine: {
        '@id': 'https://werewolf.world/resource/0.2/seer',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'morning',
            'boardPolarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
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

  expect(wrapper.props().descriptionId).toBe('Modal.Description.dayVote')
  expect(wrapper.props().id).toBe(2)
  expect(wrapper.props().image).toBe('https://werewolf.world/image/0.2/Moritz.jpg')
  expect(wrapper.props().name).toBe('モーリッツ')
  expect(wrapper.props().timer).toEqual({
    limit: 100,
    phase: DAY
  })
  expect(wrapper.props().visible).toBe(true)
})
