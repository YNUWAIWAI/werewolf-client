// @flow
import InfoTeamContainer from './InfoTeamContainer'
import React from 'react'
import {shallow} from 'enzyme'

describe('<InfoTeamContainer />', () => {
  test('initialState', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      roles: {
        all: []
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<InfoTeamContainer store={store} />)

    expect(wrapper.props().class).toBe('info--team')
    expect(wrapper.props().team).toBe('')
  })
  test('agents.mine exists', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      roles: {
        all: [],
        mine: {
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#seer',
          'image': 'https://werewolf.world/image/0.2/seer.jpg',
          'isMine': true,
          'name': {
            'en': 'Seer',
            'ja': '占い師'
          },
          'numberOfAgents': 1
        }
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<InfoTeamContainer store={store} />)

    expect(wrapper.props().class).toBe('info--team')
    expect(wrapper.props().team).toBe('villager')
  })
})
