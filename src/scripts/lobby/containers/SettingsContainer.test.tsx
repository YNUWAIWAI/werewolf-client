import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import Settings from '../components/templates/Settings'
import SettingsContainer from './SettingsContainer'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('<SettingsContainer />', () => {
  test('render', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SettingsContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleChangeLanguage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SettingsContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const language = lobby.Language.en

    wrapper.find(Settings).props().handleChangeLanguage(language)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      language,
      type: ActionTypes.global.CHANGE_LANGUAGE
    })
  })
  test('handleChangeUserEmail', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SettingsContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const userEmail = 'example@licos.email'

    wrapper.find(Settings).props().handleChangeUserEmail(userEmail)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.CHANGE_USER_EMAIL,
      userEmail
    })
  })
  test('handleChangeUserName', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SettingsContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const userName = 'Alice'

    wrapper.find(Settings).props().handleChangeUserName(userName)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.CHANGE_USER_NAME,
      userName
    })
  })
  test('handleChangeUserPassword', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SettingsContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const userPassword = 'passw0rd'

    wrapper.find(Settings).props().handleChangeUserPassword(userPassword)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.CHANGE_USER_PASSWORD,
      userPassword
    })
  })
  test('handleSubmitLogout', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SettingsContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Settings).props().handleSubmitLogout()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.LOGOUT
    })
  })
  test('transition', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SettingsContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Settings).props().transition(ActionTypes.Target.SHOW_MAIN)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.SHOW_MAIN
    })
  })
})
