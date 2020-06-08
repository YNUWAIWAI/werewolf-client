import * as React from 'react'
import {CreateNewHumanAvatarContainer} from './CreateNewHumanAvatarContainer'
import {CreateNewHumanAvatarTable} from '../components/molecules/CreateNewAvatar/CreateNewHumanAvatarTable'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {createNewHumanAvatar} from '../actions'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

test('render', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewHumanAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleImageClick', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewHumanAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewHumanAvatarTable).props().handleImageClick('image')
  expect(dispatch).toHaveBeenCalledWith(createNewHumanAvatar.showAvatarImageSelect('image'))
})
test('handleLanguageChange', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewHumanAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewHumanAvatarTable).props().handleLanguageChange(true)(lobby.Language.en)
  expect(dispatch).toHaveBeenCalledWith(createNewHumanAvatar.changeAvatarLanguage(lobby.Language.en))
})
test('handleNameChange', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewHumanAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewHumanAvatarTable).props().handleNameChange(true)('name')
  expect(dispatch).toHaveBeenCalledWith(createNewHumanAvatar.changeAvatarName('name'))
})
