import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import SelectHumanAvatarTableBody from '../components/molecules/SelectHumanAvatarTableBody'
import SelectHumanAvatarTableBodyContainer from './SelectHumanAvatarTableBodyContainer'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('<SelectHumanAvatarTableBodyContainer />', () => {
  test('render', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectHumanAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('handleAvatarImageClick', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectHumanAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    const image = 'image'

    wrapper.find(SelectHumanAvatarTableBody).props().handleAvatarImageClick(token)(image)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      image,
      token,
      type: ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
    })
  })
  test('handleAvatarLanguageChange', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectHumanAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    const language = lobby.Language.en

    wrapper.find(SelectHumanAvatarTableBody).props().handleAvatarLanguageChange(token)(true)(language)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      language,
      token,
      type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_LANGUAGE
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
            <SelectHumanAvatarTableBodyContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      const name = 'avatarName'

      wrapper.find(SelectHumanAvatarTableBody).props().handleAvatarNameChange(token)(true)(name)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        name,
        token,
        type: ActionTypes.SelectHumanAvatar.CHANGE_AVATAR_NAME
      })
    })
    test('invalid', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <SelectHumanAvatarTableBodyContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      const name = 'avatar'

      wrapper.find(SelectHumanAvatarTableBody).props().handleAvatarNameChange(token)(false)(name)
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
          <SelectHumanAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const id = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'

    wrapper.find(SelectHumanAvatarTableBody).props().handleHoverAvatar(id)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      id,
      type: ActionTypes.SelectHumanAvatar.HOVER_AVATAR
    })
  })
  test('handleSelectAvatar', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <SelectHumanAvatarTableBodyContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const id = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'

    wrapper.find(SelectHumanAvatarTableBody).props().handleSelectAvatar(id)()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      id,
      type: ActionTypes.SelectHumanAvatar.CHANGE_CHECKBOX
    })
  })
})
