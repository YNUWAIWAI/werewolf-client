import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import BuildVillageBox from '../components/organisms/BuildVillageBox'
import BuildVillageBoxContainer from './BuildVillageBoxContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {initialState} from '../reducers/buildVillage'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('render', () => {
  test('initialState', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('buildVillage is enabled', () => {
    const store = fakeStore(
      {
        buildVillage: {
          ... initialState,
          menuItems: [
            {
              id: 'Menu.buildVillage',
              types: [ActionTypes.BuildVillage.BUILD]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ],
          validity: {
            avatar: true,
            comment: true,
            numberOfPlayers: true,
            numberOfRobots: true,
            villageName: true
          }
        },
        obfucator: {
          loading: false,
          visible: false
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('buildVillage is disabled', () => {
    const store = fakeStore(
      {
        buildVillage: {
          ... initialState,
          menuItems: [
            {
              id: 'Menu.buildVillage',
              types: [ActionTypes.BuildVillage.BUILD]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ],
          validity: {
            avatar: false,
            comment: true,
            numberOfPlayers: true,
            numberOfRobots: true,
            villageName: true
          }
        },
        obfucator: {
          loading: false,
          visible: false
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
test('handleAvatarChange', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <BuildVillageBoxContainer />
      </IntlProviderContainer>
    </Provider>
  )
  const avatar = lobby.Avatar.fixed

  wrapper.find(BuildVillageBox).props().handleAvatarChange(true)(avatar)
  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(dispatch).toHaveBeenCalledWith({
    avatar,
    type: ActionTypes.BuildVillage.CHANGE_AVATAR,
    valid: true
  })
})
test('handleMemberChange', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <BuildVillageBoxContainer />
      </IntlProviderContainer>
    </Provider>
  )
  const member = lobby.Member.A

  wrapper.find(BuildVillageBox).props().handleMemberChange(true)(member)
  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(dispatch).toHaveBeenCalledWith({
    member,
    type: ActionTypes.BuildVillage.CHANGE_MEMBER,
    valid: true
  })
})
describe('handleNumberChange', () => {
  test('numberOfPlayers', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const numberOfPlayers = 10

    wrapper.find(BuildVillageBox).props().handleNumberChange('numberOfPlayers')(true)(numberOfPlayers)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      numberOfPlayers,
      type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS,
      valid: true
    })
  })
  test('numberOfRobots', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const numberOfRobots = 10

    wrapper.find(BuildVillageBox).props().handleNumberChange('numberOfRobots')(true)(numberOfRobots)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      numberOfRobots,
      type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS,
      valid: true
    })
  })
})
describe('handleTextChange', () => {
  test('comment', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const comment = 'comment'

    wrapper.find(BuildVillageBox).props().handleTextChange('comment')(true)(comment)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      comment,
      type: ActionTypes.BuildVillage.CHANGE_COMMENT,
      valid: true
    })
  })
  test('villageName', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageBoxContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const villageName = 'villageName'

    wrapper.find(BuildVillageBox).props().handleTextChange('villageName')(true)(villageName)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME,
      valid: true,
      villageName
    })
  })
})
