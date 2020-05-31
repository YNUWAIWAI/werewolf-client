import * as React from 'react'
import {ImagePath} from '../constants/ImagePath'
import {InfoRoleContainer} from './InfoRoleContainer'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<InfoRoleContainer />', () => {
  test('initialState', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <InfoRoleContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('mine.role exists', () => {
    const store = fakeStore(
      {
        language: village.Language.en,
        mine: {
          role: {
            '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
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
          <InfoRoleContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
