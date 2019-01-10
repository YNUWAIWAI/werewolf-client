// @flow
import IdSearchContainer from './IdSearchContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<IdSearchContainer />', () => {
  const transition = jest.fn()
  const store = fakeStore(
    {
      idSearch: {
        header: 'Header.idSearch(human player)',
        id: -1,
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        villageItems: []
      }
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <IdSearchContainer transition={transition} />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
