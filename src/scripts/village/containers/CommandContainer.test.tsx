import * as React from 'react'
import {CommandContainer} from './CommandContainer'
import {CommandGraveContainer} from './CommandGraveContainer'
import {CommandInputBoxContainer} from './CommandInputBoxContainer'
import {CommandPostMortemContainer} from './CommandPostMortemContainer'
import {CommandSelectionContainer} from './CommandSelectionContainer'
import {Content} from '../reducers/command'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<CommandContainer />', () => {
  test('CommandGrave', () => {
    const store = fakeStore(
      {
        command: {
          content: Content.CommandGrave,
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

    expect(wrapper.find(CommandGraveContainer).exists()).toBe(true)
    expect(wrapper.find('.vi--command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('CommandInputBox', () => {
    const store = fakeStore(
      {
        command: {
          content: Content.CommandInputBox,
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

    expect(wrapper.find(CommandInputBoxContainer).exists()).toBe(true)
    expect(wrapper.find('.vi--command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('CommandPostMortem', () => {
    const store = fakeStore(
      {
        command: {
          content: Content.CommandPostMortem,
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

    expect(wrapper.find(CommandPostMortemContainer).exists()).toBe(true)
    expect(wrapper.find('.vi--command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('CommandSelection', () => {
    const store = fakeStore(
      {
        command: {
          content: Content.CommandSelection,
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

    expect(wrapper.find(CommandSelectionContainer).exists()).toBe(true)
    expect(wrapper.find('.vi--command').hasClass('hidden')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
