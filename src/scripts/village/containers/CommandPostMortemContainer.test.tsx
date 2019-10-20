import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import * as village from '../types'
import CommandPostMortem from '../components/organisms/CommandPostMortem'
import CommandPostMortemContainer from './CommandPostMortemContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<CommandPostMortemContainer />', () => {
  test('render', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandPostMortemContainer />
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
          <CommandPostMortemContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(CommandPostMortem).props().handleNavigationClick(ActionTypes.Navigation.SHOW_RESULT)
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
          <CommandPostMortemContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(CommandPostMortem).props().handlePostChat(village.InputChannel.public)('text')
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      channel: village.InputChannel.public,
      text: 'text',
      type: ActionTypes.global.POST_CHAT
    })
  })
})
