// @flow
import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import LobbyForHumanPlayer from '../../src/scripts/lobby/components/templates/LobbyForHumanPlayer'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('lobby|LobbyForHumanPlayer', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('検索前', () => {
    const menuItems = [
      {
        id: 'Menu.showBuildVillage',
        types: [ActionTypes.SHOW_BUILD_VILLAGE]
      },
      {
        id: 'Menu.showIdSearch',
        types: [ActionTypes.SHOW_ID_SEARCH]
      },
      {
        id: 'Menu.showAdvancedSearch',
        types: [ActionTypes.SHOW_ADVANCED_SEARCH]
      },
      {
        id: 'Menu.refresh',
        types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.SHOW_MAIN]
      }
    ]
    const villageItems = [
      {
        'avatar': 'fixed',
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
        'avatar': 'random',
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
    const selectVillage = id => action(`selectVillage ${id}`)
    const transition = action('transition')
    const story =
      <LobbyForHumanPlayer
        header="Header.advancedSearch(human player)"
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
