import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import AdvancedSearch from '../components/templates/AdvancedSearch'
import AdvancedSearchContainer from './AdvancedSearchContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {initialState} from '../reducers/advancedSearch'
import {mount} from 'enzyme'

describe('render', () => {
  test('advancedSearch is enabled', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.AdvancedSearch.SEARCH]
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
          name: '',
          searched: false,
          villageItems: []
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('advancedSearch is disabled', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          ... initialState,
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.AdvancedSearch.SEARCH]
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
          name: '',
          searched: false,
          villageItems: []
        }
      }
    )
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <AdvancedSearchContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
test('selectVillage', () => {
  const store = fakeStore(
    {
      advancedSearch: {
        ... initialState,
        header: 'Header.idSearch(audience)',
        image: '',
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
        name: '',
        searched: false,
        villageItems: []
      }
    }
  )
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <AdvancedSearchContainer />
      </IntlProviderContainer>
    </Provider>
  )
  const id = 1

  wrapper.find(AdvancedSearch).props().selectVillage(id)()
  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(dispatch).toHaveBeenCalledWith({
    id,
    type: ActionTypes.App.SELECT_VILLAGE
  })
})
