/* global lobby */
import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import LobbyForHumanPlayer, {Props} from '../../src/scripts/lobby/components/templates/LobbyForHumanPlayer'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('lobby|LobbyForHumanPlayer', module)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('default', () => {
    const menuItems = [
      {
        id: 'Menu.showBuildVillage',
        types: [ActionTypes.Target.SHOW_BUILD_VILLAGE]
      },
      {
        id: 'Menu.showIdSearch',
        types: [ActionTypes.Target.SHOW_ID_SEARCH]
      },
      {
        id: 'Menu.showAdvancedSearch',
        types: [ActionTypes.Target.SHOW_ADVANCED_SEARCH]
      },
      {
        id: 'Menu.refresh',
        types: [ActionTypes.Target.REFRESH, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.SHOW_MAIN]
      }
    ]
    const villageItems: Props['villageItems'] = [
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
        'name': 'Ruined village',
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
    const selectVillage = (id: number) => action(`selectVillage ${id}`)
    const transition = action('transition')
    const story =
      <LobbyForHumanPlayer
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        selectVillage={selectVillage}
        transition={transition}
        villageItems={villageItems}
      />

    return story
  })
