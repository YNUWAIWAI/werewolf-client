// @flow
import InfoAgentContainer from './InfoAgentContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<InfoAgentContainer />', () => {
  test('initialState', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoAgentContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('agents.mine exists', () => {
    const store = fakeStore(
      {
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
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoAgentContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
