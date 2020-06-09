import * as React from 'react'
import {CreateNewRobotAvatarContainer} from './CreateNewRobotAvatarContainer'
import {CreateNewRobotAvatarTable} from '../components/molecules/CreateNewAvatar/CreateNewRobotAvatarTable'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {createNewRobotAvatar} from '../actions'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

test('render', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewRobotAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleAutomationChange', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewRobotAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewRobotAvatarTable).props().handleAutomationChange(true)(lobby.Automation.full)
  expect(dispatch).toHaveBeenCalledWith(createNewRobotAvatar.changeAutomation(lobby.Automation.full))
})
test('handleImageClick', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewRobotAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewRobotAvatarTable).props().handleImageClick('image')
  expect(dispatch).toHaveBeenCalledWith(createNewRobotAvatar.showAvatarImageSelect('image'))
})
test('handleLanguageChange', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewRobotAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewRobotAvatarTable).props().handleLanguageChange(true)(lobby.Language.en)
  expect(dispatch).toHaveBeenCalledWith(createNewRobotAvatar.changeAvatarLanguage(lobby.Language.en))
})
test('handleNameChange', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewRobotAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(CreateNewRobotAvatarTable).props().handleNameChange(true)('name')
  expect(dispatch).toHaveBeenCalledWith(createNewRobotAvatar.changeAvatarName('name'))
})
