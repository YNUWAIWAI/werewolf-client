/* global village */
import * as React from 'react'
import InfoAgentContainer from './InfoAgentContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
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
  test('mine.agent exists', () => {
    const store = fakeStore(
      {
        language: village.Language.en,
        mine: {
          agent: {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1',
            'id': 1,
            'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
            'name': {
              'en': 'Adil',
              'ja': 'アーディル'
            }
          }
        }
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
