import * as React from 'react'
import CommandContainer from './CommandContainer'
import CommandGrave from './CommandGraveContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<CommandContainer />', () => {
  test('CommandGrave', () => {
    const store = fakeStore(
      {
        command: {
          content: 'CommandGrave',
          isDead: false
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandGrave).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('CommandInputBox', () => {
    const store = fakeStore(
      {
        command: {
          content: 'CommandInputBox',
          isDead: false
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandInputBox).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('CommandPostMortem', () => {
    const store = fakeStore(
      {
        command: {
          content: 'CommandPostMortem',
          isDead: false
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandPostMortem).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('CommandSelection', () => {
    const store = fakeStore(
      {
        command: {
          content: 'CommandSelection',
          isDead: false
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <CommandContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find(CommandSelection).exists()).toBe(true)
    expect(wrapper.find('.command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
