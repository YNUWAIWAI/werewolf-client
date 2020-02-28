import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import SelectRobotAvatarTableBody from '../components/molecules/SelectRobotAvatarTableBody'
import SelectRobotAvatarTableBodyContainer from './SelectRobotAvatarTableBodyContainer'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('<SelectRobotAvatarTableBodyContainer />', () => {
  test('render', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectRobotAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleAccept', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectRobotAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const accessToken = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'

    wrapper.find(SelectRobotAvatarTableBody).props().handleAccept(accessToken)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      accessToken,
      type: ActionTypes.SelectRobotAvatar.AUTHORIZATION_REQUEST_ACCEPTED
    })
  })
  test('handleAvatarLanguageChange', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectRobotAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    const language = lobby.Language.en

    wrapper.find(SelectRobotAvatarTableBody).props().handleAvatarLanguageChange(token)(true)(language)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      language,
      token,
      type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_LANGUAGE
    })
  })
  describe('handleAvatarNameChange', () => {
    test('valid', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <SelectRobotAvatarTableBodyContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      const name = 'avatarName'

      wrapper.find(SelectRobotAvatarTableBody).props().handleAvatarNameChange(token)(true)(name)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        name,
        token,
        type: ActionTypes.SelectRobotAvatar.CHANGE_AVATAR_NAME
      })
    })
    test('invalid', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <SelectRobotAvatarTableBodyContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      const name = 'avatar'

      wrapper.find(SelectRobotAvatarTableBody).props().handleAvatarNameChange(token)(false)(name)
      expect(dispatch).toHaveBeenCalledTimes(0)
    })
  })
  test('handleHoverAvatar', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectRobotAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const id = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'

    wrapper.find(SelectRobotAvatarTableBody).props().handleHoverAvatar(id)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      id,
      type: ActionTypes.SelectRobotAvatar.HOVER_AVATAR
    })
  })
  test('handleSelectAvatar', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectRobotAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const id = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'

    wrapper.find(SelectRobotAvatarTableBody).props().handleSelectAvatar(id)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      id,
      type: ActionTypes.SelectRobotAvatar.CHANGE_CHECKBOX
    })
  })
  test('renewAccessToken', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectRobotAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'

    wrapper.find(SelectRobotAvatarTableBody).props().renewAccessToken(token)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      token,
      type: ActionTypes.SelectRobotAvatar.RENEW_AVATAR_TOKEN
    })
  })
})
