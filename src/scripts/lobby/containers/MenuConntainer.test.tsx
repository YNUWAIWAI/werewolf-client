import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import Menu from '../components/organisms/Menu'
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
  test('transition', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
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

    wrapper.find(Menu).props().transition(ActionTypes.Target.ADVANCED_SEARCH)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.ADVANCED_SEARCH
    })
  })
})
