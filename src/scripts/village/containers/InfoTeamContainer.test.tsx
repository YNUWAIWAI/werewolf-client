/* global village */
import * as React from 'react'
import InfoTeamContainer from './InfoTeamContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<InfoTeamContainer />', () => {
  test('initialState', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoTeamContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('mine.role exists', () => {
    const store = fakeStore(
      {
        mine: {
          role: {
            '@id': 'https://licos.online/state/0.2/village#3/role#seer',
            'id': village.RoleId.seer,
            'image': 'https://werewolf.world/image/0.2/seer.jpg',
            'name': {
              'en': 'Seer',
              'ja': '占い師'
            }
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
