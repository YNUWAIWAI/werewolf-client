import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import BuildVillageContainer from './BuildVillageContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {initialState} from '../reducers/buildVillage'
import {mount} from 'enzyme'

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
          <BuildVillageContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
