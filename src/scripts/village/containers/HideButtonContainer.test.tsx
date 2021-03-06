import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import {HideButton} from '../components/atoms/HideButton'
import {HideButtonContainer} from './HideButtonContainer'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<HideButtonContainer />', () => {
  test('render', () => {
    const store = fakeStore(
      {
        hideButton: {
          hide: true
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <HideButtonContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find('.vi--hide-button--button').hasClass('hide')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleSelectOption', () => {
    const store = fakeStore(
      {
        language: village.Language.en
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <HideButtonContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const hide = false

    wrapper.find(HideButton).props().handleClick(hide)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      hide,
      type: ActionTypes.App.CLICK_HIDE_BUTTON
    })
  })
})
