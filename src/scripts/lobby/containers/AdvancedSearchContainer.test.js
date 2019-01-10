// @flow
import AdvancedSearchContainer from './AdvancedSearchContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<AdvancedSearchContainer />', () => {
  const transition = jest.fn()
  const store = fakeStore(
    {
      advancedSearch: {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: 'Header.idSearch(audience)',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
      }
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <AdvancedSearchContainer transition={transition} />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
