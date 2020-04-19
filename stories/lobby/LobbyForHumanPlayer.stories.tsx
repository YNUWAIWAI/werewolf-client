import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import {ImagePath} from '../../src/scripts/lobby/constants/ImagePath'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import LobbyForHumanPlayer from '../../src/scripts/lobby/containers/LobbyForHumanPlayerContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

storiesOf('lobby|LobbyForHumanPlayer', module)
  .addDecorator(story => (
    <div
      className={`lo ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="lo--video" />
    </div>
  ))
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        lobbyForHumanPlayer: {
          image: ImagePath.Character.r,
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.showBuildVillage',
              types: [ActionTypes.App.SHOW_BUILD_VILLAGE]
            },
            {
              id: 'Menu.showIdSearch',
              types: [ActionTypes.App.SHOW_ID_SEARCH]
            },
            {
              id: 'Menu.showAdvancedSearch',
              types: [ActionTypes.App.SHOW_ADVANCED_SEARCH]
            },
            {
              id: 'Menu.refresh',
              types: [ActionTypes.App.REFRESH, ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ],
          name: 'Ryan',
          villageItems: [
            {
              'avatar': lobby.Avatar.fixed,
              'comment': null,
              'hostPlayer': {
                'isAnonymous': false,
                'isHuman': true,
                'name': 'Alice'
              },
              'id': 1,
              'idForSearching': 123,
              'name': 'Alice\'s village',
              'playerSetting': {
                'current': 8,
                'human': {
                  'current': 5,
                  'max': 8
                },
                'number': 15,
                'robot': {
                  'current': 3,
                  'min': 7
                }
              },
              'roleSetting': {
                'hunter': 1,
                'madman': 1,
                'mason': 2,
                'medium': 1,
                'seer': 1,
                'villager': 6,
                'werehamster': 1,
                'werewolf': 2
              }
            },
            {
              'avatar': lobby.Avatar.random,
              'comment': 'Open to beginners',
              'hostPlayer': {
                'isAnonymous': true,
                'isHuman': true,
                'name': 'Anonymous'
              },
              'id': 2,
              'idForSearching': 124,
              'name': 'Loston',
              'playerSetting': {
                'current': 4,
                'human': {
                  'current': 2,
                  'max': 3
                },
                'number': 5,
                'robot': {
                  'current': 2,
                  'min': 2
                }
              },
              'roleSetting': {
                'hunter': 0,
                'madman': 0,
                'mason': 0,
                'medium': 0,
                'seer': 1,
                'villager': 3,
                'werehamster': 0,
                'werewolf': 1
              }
            }
          ]
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <LobbyForHumanPlayer />
        </IntlProvider>
      </Provider>

    return story
  })
