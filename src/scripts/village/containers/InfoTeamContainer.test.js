// @flow
import InfoTeamContainer from './InfoTeamContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<InfoTeamContainer />', () => {
  test('initialState', () => {
    const store = fakeStore(
      {
        roles: {
          all: []
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoTeamContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.text()).toMatchSnapshot()
  })
  test('roles.mine exists', () => {
    const store = fakeStore(
      {
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
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoTeamContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
