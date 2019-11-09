import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import MenuContainer from './MenuContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<MenuContainer />', () => {
  test('render', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <MenuContainer
            className="className"
            itemClassName="itemClassName"
            items={[]}
          />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
