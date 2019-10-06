import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import * as lobby from '../types'
import AdvancedSearch from '../components/templates/AdvancedSearch'
import AdvancedSearchContainer from './AdvancedSearchContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<AdvancedSearchContainer />', () => {
  describe('render', () => {
    test('advancedSearch is enabled', () => {
      const store = fakeStore(
        {
          advancedSearch: {
            checked: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            header: 'Header.idSearch(audience)',
            image: '',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.Target.ADVANCED_SEARCH]
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
            name: '',
            searched: false,
            validity: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            value: {
              avatar: lobby.Avatar.random,
              comment: '',
              hostName: '',
              maximum: -1,
              minimum: -1,
              villageName: ''
            },
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
            checked: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            header: 'Header.idSearch(audience)',
            image: '',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.Target.ADVANCED_SEARCH]
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
            name: '',
            searched: false,
            validity: {
              avatar: false,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            value: {
              avatar: lobby.Avatar.random,
              comment: '',
              hostName: '',
              maximum: -1,
              minimum: -1,
              villageName: ''
            },
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
  test('handleAvatarChange', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.Target.ADVANCED_SEARCH]
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
          name: '',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
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
    const avatar = lobby.Avatar.fixed

    wrapper.find(AdvancedSearch).props().handleAvatarChange(avatar)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      avatar,
      type: ActionTypes.advancedSearch.CHANGE_AVATAR
    })
  })
  test('handleCheckboxChange', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.Target.ADVANCED_SEARCH]
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
          name: '',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
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
    const propName = 'villageName'
    const checked = true

    wrapper.find(AdvancedSearch).props().handleCheckboxChange(propName)(checked)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      checked,
      propName,
      type: ActionTypes.advancedSearch.CHANGE_CHECKBOX
    })
  })
  describe('handleNumberChange', () => {
    test('maximum', () => {
      const store = fakeStore(
        {
          advancedSearch: {
            checked: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            header: 'Header.idSearch(audience)',
            image: '',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.Target.ADVANCED_SEARCH]
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
            name: '',
            searched: false,
            validity: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            value: {
              avatar: lobby.Avatar.random,
              comment: '',
              hostName: '',
              maximum: -1,
              minimum: -1,
              villageName: ''
            },
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
      const maximum = 10

      wrapper.find(AdvancedSearch).props().handleNumberChange('maximum')(maximum)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        maximum,
        type: ActionTypes.advancedSearch.CHANGE_MAXIMUM
      })
    })
    test('minimum', () => {
      const store = fakeStore(
        {
          advancedSearch: {
            checked: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            header: 'Header.idSearch(audience)',
            image: '',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.Target.ADVANCED_SEARCH]
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
            name: '',
            searched: false,
            validity: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            value: {
              avatar: lobby.Avatar.random,
              comment: '',
              hostName: '',
              maximum: -1,
              minimum: -1,
              villageName: ''
            },
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
      const minimum = 10

      wrapper.find(AdvancedSearch).props().handleNumberChange('minimum')(minimum)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        minimum,
        type: ActionTypes.advancedSearch.CHANGE_MINIMUM
      })
    })
  })
  describe('handleTextChange', () => {
    test('comment', () => {
      const store = fakeStore(
        {
          advancedSearch: {
            checked: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            header: 'Header.idSearch(audience)',
            image: '',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.Target.ADVANCED_SEARCH]
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
            name: '',
            searched: false,
            validity: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            value: {
              avatar: lobby.Avatar.random,
              comment: '',
              hostName: '',
              maximum: -1,
              minimum: -1,
              villageName: ''
            },
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
      const comment = 'comment'

      wrapper.find(AdvancedSearch).props().handleTextChange('comment')(comment)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        comment,
        type: ActionTypes.advancedSearch.CHANGE_COMMENT
      })
    })
    test('hostName', () => {
      const store = fakeStore(
        {
          advancedSearch: {
            checked: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            header: 'Header.idSearch(audience)',
            image: '',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.Target.ADVANCED_SEARCH]
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
            name: '',
            searched: false,
            validity: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            value: {
              avatar: lobby.Avatar.random,
              comment: '',
              hostName: '',
              maximum: -1,
              minimum: -1,
              villageName: ''
            },
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
      const hostName = 'hostName'

      wrapper.find(AdvancedSearch).props().handleTextChange('hostName')(hostName)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        hostName,
        type: ActionTypes.advancedSearch.CHANGE_HOST_NAME
      })
    })
    test('villageName', () => {
      const store = fakeStore(
        {
          advancedSearch: {
            checked: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            header: 'Header.idSearch(audience)',
            image: '',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.Target.ADVANCED_SEARCH]
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
            name: '',
            searched: false,
            validity: {
              avatar: true,
              comment: false,
              hostName: false,
              maximum: false,
              minimum: false,
              villageName: false
            },
            value: {
              avatar: lobby.Avatar.random,
              comment: '',
              hostName: '',
              maximum: -1,
              minimum: -1,
              villageName: ''
            },
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
      const villageName = 'villageName'

      wrapper.find(AdvancedSearch).props().handleTextChange('villageName')(villageName)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.advancedSearch.CHANGE_VILLAGE_NAME,
        villageName
      })
    })
  })
  test('handleValidityChange', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.Target.ADVANCED_SEARCH]
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
          name: '',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
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
    const propName = 'villageName'
    const validity = true

    wrapper.find(AdvancedSearch).props().handleValidityChange(propName)(validity)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      propName,
      type: ActionTypes.advancedSearch.CHANGE_VALIDITY,
      validity
    })
  })
  test('selectVillage', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.Target.ADVANCED_SEARCH]
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
          name: '',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
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
      type: ActionTypes.global.SELECT_VILLAGE
    })
  })
  test('transition', () => {
    const store = fakeStore(
      {
        advancedSearch: {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: 'Header.idSearch(audience)',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              types: [ActionTypes.Target.ADVANCED_SEARCH]
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
          name: '',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: lobby.Avatar.random,
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
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

    wrapper.find(AdvancedSearch).props().transition(ActionTypes.Target.SHOW_MAIN)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.SHOW_MAIN
    })
  })
})
