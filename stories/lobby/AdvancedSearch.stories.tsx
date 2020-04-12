import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import AdvancedSearch from '../../src/scripts/lobby/containers/AdvancedSearchContainer'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

storiesOf('lobby|AdvancedSearch', module)
  .addDecorator(story => (
    <div
      className={`lo ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="lo--video" />
    </div>
  ))
  .add('before search', () => {
    const store = createStore(
      reducer,
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
          header: 'Header.advancedSearch(audience)',
          image: '',
          isPlayer: false,
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
        },
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <AdvancedSearch />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('after search (0 items)', () => {
    const store = createStore(
      reducer,
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
          header: 'Header.advancedSearch(audience)',
          image: '',
          isPlayer: false,
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
          searched: true,
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
        },
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <AdvancedSearch />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('after search (1 item)', () => {
    const store = createStore(
      reducer,
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
          header: 'Header.advancedSearch(audience)',
          image: '',
          isPlayer: false,
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
          searched: true,
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
          villageItems: [
            {
              avatar: lobby.Avatar.fixed,
              comment: null,
              hostPlayer: {
                isAnonymous: false,
                isHuman: true,
                name: 'Alice'
              },
              id: 1,
              idForSearching: 123,
              name: 'Alice\'s village',
              playerSetting: {
                current: 8,
                human: {
                  current: 5,
                  max: 8
                },
                number: 15,
                robot: {
                  current: 3,
                  min: 7
                }
              },
              roleSetting: {
                hunter: 1,
                madman: 1,
                mason: 2,
                medium: 1,
                seer: 1,
                villager: 6,
                werehamster: 1,
                werewolf: 2
              }
            }
          ]
        },
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <AdvancedSearch />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('after search (2 items)', () => {
    const store = createStore(
      reducer,
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
          header: 'Header.advancedSearch(audience)',
          image: '',
          isPlayer: false,
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
          searched: true,
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
          villageItems: [
            {
              avatar: lobby.Avatar.fixed,
              comment: null,
              hostPlayer: {
                isAnonymous: false,
                isHuman: true,
                name: 'Alice'
              },
              id: 1,
              idForSearching: 123,
              name: 'Alice\'s village',
              playerSetting: {
                current: 8,
                human: {
                  current: 5,
                  max: 8
                },
                number: 15,
                robot: {
                  current: 3,
                  min: 7
                }
              },
              roleSetting: {
                hunter: 1,
                madman: 1,
                mason: 2,
                medium: 1,
                seer: 1,
                villager: 6,
                werehamster: 1,
                werewolf: 2
              }
            },
            {
              avatar: lobby.Avatar.fixed,
              comment: null,
              hostPlayer: {
                isAnonymous: false,
                isHuman: true,
                name: 'Alice'
              },
              id: 1,
              idForSearching: 123,
              name: 'Alice\'s village',
              playerSetting: {
                current: 8,
                human: {
                  current: 5,
                  max: 8
                },
                number: 15,
                robot: {
                  current: 3,
                  min: 7
                }
              },
              roleSetting: {
                hunter: 1,
                madman: 1,
                mason: 2,
                medium: 1,
                seer: 1,
                villager: 6,
                werehamster: 1,
                werewolf: 2
              }
            }
          ]
        },
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <AdvancedSearch />
        </IntlProvider>
      </Provider>

    return story
  })
