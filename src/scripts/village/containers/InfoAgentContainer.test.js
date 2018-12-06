// @flow
import InfoAgentContainer from './InfoAgentContainer'
import React from 'react'
import {shallow} from 'enzyme'

describe('<InfoAgentContainer />', () => {
  test('initialState', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        all: []
      }
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<InfoAgentContainer store={store} />)

    expect(wrapper.props().class).toBe('info--agent')
    expect(wrapper.props().image).toBe('')
    expect(wrapper.props().name).toBe('')
  })
  test('agents.mine exists', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents: {
        all: [],
        mine: {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isAChoice': false,
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive'
        }
      },
      language: 'en'
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<InfoAgentContainer store={store} />)

    expect(wrapper.props().class).toBe('info--agent')
    expect(wrapper.props().image).toBe('https://werewolf.world/image/0.2/Walter.jpg')
    expect(wrapper.props().name).toBe('Walter')
  })
})
