import * as React from 'react'
import {ImagePath} from '../constants/ImagePath'
import InfoTeamContainer from './InfoTeamContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../constants/Role'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

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
            'image': ImagePath.Role.seer,
            'name': Role.seer
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
