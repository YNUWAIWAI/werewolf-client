import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import * as village from '../types'
import CommandInputBox from '../components/organisms/CommandInputBox'
import CommandInputBoxContainer from './CommandInputBoxContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<CommandInputBoxContainer />', () => {
  test('render', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandInputBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handlePostChat', () => {
    const store = fakeStore(
      {
        language: village.Language.ja
      }
    )
    const dispatch = jest.fn()

    store.dispatch = dispatch

    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandInputBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(CommandInputBox).props().handlePostChat(village.InputChannel.public)('text')
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      channel: village.InputChannel.public,
      text: 'text',
      type: ActionTypes.global.POST_CHAT
    })
  })
})
