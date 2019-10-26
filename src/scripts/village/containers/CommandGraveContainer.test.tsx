import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import CommandGrave from '../components/organisms/CommandGrave'
import CommandGraveContainer from './CommandGraveContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'
import {village} from '../types'

describe('<CommandGraveContainer />', () => {
  test('render', () => {
    const store = fakeStore(
      {
        language: village.Language.en
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandGraveContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleNavigationClick', () => {
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
          <CommandGraveContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(CommandGrave).props().handleNavigationClick(ActionTypes.Navigation.SHOW_RESULT)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Navigation.SHOW_RESULT
    })
  })
  test('handlePostChat', () => {
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
          <CommandGraveContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(CommandGrave).props().handlePostChat(village.InputChannel.public)('text')
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      channel: village.InputChannel.public,
      text: 'text',
      type: ActionTypes.POST_CHAT
    })
  })
})
