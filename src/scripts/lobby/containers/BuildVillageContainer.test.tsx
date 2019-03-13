/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import BuildVillage from '../components/templates/BuildVillage'
import BuildVillageContainer from './BuildVillageContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {initialState} from '../reducers/buildVillage'
import {mount} from 'enzyme'

describe('<BuildVillageContainer />', () => {
  describe('render', () => {
    test('initialState', () => {
      const store = fakeStore()
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <BuildVillageContainer />
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
                types: [ActionTypes.Target.BUILD_VILLAGE]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.SHOW_MAIN]
              }
            ],
            validity: {
              avatar: true,
              comment: true,
              numberOfPlayers: true,
              numberOfRobots: true,
              villageName: true
            }
          }
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <BuildVillageContainer />
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
                types: [ActionTypes.Target.BUILD_VILLAGE]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.SHOW_MAIN]
              }
            ],
            validity: {
              avatar: false,
              comment: true,
              numberOfPlayers: true,
              numberOfRobots: true,
              villageName: true
            }
          }
        }
      )
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <BuildVillageContainer />
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
          <BuildVillageContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const avatar = lobby.Avatar.fixed

    wrapper.find(BuildVillage).props().handleAvatarChange(avatar)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      avatar,
      type: ActionTypes.buildVillage.CHANGE_AVATAR
    })
  })
  test('handleMemberChange', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const member = lobby.Member.A

    wrapper.find(BuildVillage).props().handleMemberChange(member)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      member,
      type: ActionTypes.buildVillage.CHANGE_MEMBER
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
            <BuildVillageContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const numberOfPlayers = 10

      wrapper.find(BuildVillage).props().handleNumberChange('numberOfPlayers')(numberOfPlayers)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        numberOfPlayers,
        type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_PLAYERS
      })
    })
    test('numberOfRobots', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <BuildVillageContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const numberOfRobots = 10

      wrapper.find(BuildVillage).props().handleNumberChange('numberOfRobots')(numberOfRobots)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        numberOfRobots,
        type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_ROBOTS
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
            <BuildVillageContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const comment = 'comment'

      wrapper.find(BuildVillage).props().handleTextChange('comment')(comment)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        comment,
        type: ActionTypes.buildVillage.CHANGE_COMMENT
      })
    })
    test('hostName', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <BuildVillageContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const hostName = 'hostName'

      wrapper.find(BuildVillage).props().handleTextChange('hostName')(hostName)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        hostName,
        type: ActionTypes.buildVillage.CHANGE_HOST_NAME
      })
    })
    test('villageName', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <BuildVillageContainer />
          </IntlProviderContainer>
        </Provider>
      )
      const villageName = 'villageName'

      wrapper.find(BuildVillage).props().handleTextChange('villageName')(villageName)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.buildVillage.CHANGE_VILLAGE_NAME,
        villageName
      })
    })
  })
  test('handleValidityChange', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageContainer />
        </IntlProviderContainer>
      </Provider>
    )
    const propName = 'villageName'
    const validity = true

    wrapper.find(BuildVillage).props().handleValidityChange(propName)(validity)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      propName,
      type: ActionTypes.buildVillage.CHANGE_VALIDITY,
      validity
    })
  })
  test('transition', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(BuildVillage).props().transition(ActionTypes.Target.SHOW_MAIN)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.SHOW_MAIN
    })
  })
})
