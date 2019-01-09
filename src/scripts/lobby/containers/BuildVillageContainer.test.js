// @flow
import * as ActionTypes from '../constants/ActionTypes'
import BuildVillageContainer from './BuildVillageContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {initialState} from '../reducers/buildVillage'
import {mount} from 'enzyme'

describe('<BuildVillageContainer />', () => {
  test('initialState', () => {
    const transition = jest.fn()
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <BuildVillageContainer transition={transition} />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('buildVillage is enable', () => {
    const transition = jest.fn()
    const store = fakeStore(
      {
        buildVillage: {
          ... initialState,
          menuItems: [
            {
              id: 'Menu.buildVillage',
              types: [ActionTypes.BUILD_VILLAGE]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.SHOW_MAIN]
            }
          ],
          validity: {
            avatar: true,
            comment: true,
            hostName: true,
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
          <BuildVillageContainer transition={transition} />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('buildVillage is disable', () => {
    const transition = jest.fn()
    const store = fakeStore(
      {
        buildVillage: {
          ... initialState,
          menuItems: [
            {
              id: 'Menu.buildVillage',
              types: [ActionTypes.BUILD_VILLAGE]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.SHOW_MAIN]
            }
          ],
          validity: {
            avatar: false,
            comment: true,
            hostName: true,
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
          <BuildVillageContainer transition={transition} />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
