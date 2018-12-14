// @flow
import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import IdSearch from '../../src/scripts/lobby/components/templates/IdSearch'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('lobby|IdSearch', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('検索前', () => {
    const handleSearchIdChange = id => {
      action(`handleSearchIdChange: ${id}`)
    }
    const handleValidityChange = validity => {
      action(`handleValidityChange: ${String(validity)}`)
    }
    const selectVillage = id => () => {
      action(`selectVillage: ${id}`)
    }
    const transition = target => {
      action(`transition: ${target}`)
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.search',
        types: [ActionTypes.ID_SEARCH]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.SHOW_MAIN]
      }
    ]
    const story =
      <IdSearch
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
        header="Header.idSearch(human player)"
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        searched={false}
        selectVillage={selectVillage}
        transition={transition}
        villageItems={[]}
      />

    return story
  })
  .add('検索後(0件)', () => {
    const handleSearchIdChange = id => {
      action(`handleSearchIdChange: ${id}`)
    }
    const handleValidityChange = validity => {
      action(`handleValidityChange: ${String(validity)}`)
    }
    const selectVillage = id => () => {
      action(`selectVillage: ${id}`)
    }
    const transition = target => {
      action(`transition: ${target}`)
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.search',
        types: [ActionTypes.ID_SEARCH]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.SHOW_MAIN]
      }
    ]
    const story =
      <IdSearch
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
        header="Header.idSearch(human player)"
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        searched
        selectVillage={selectVillage}
        transition={transition}
        villageItems={[]}
      />

    return story
  })
  .add('検索後(1件)', () => {
    const handleSearchIdChange = id => {
      action(`handleSearchIdChange: ${id}`)
    }
    const handleValidityChange = validity => {
      action(`handleValidityChange: ${String(validity)}`)
    }
    const selectVillage = id => () => {
      action(`selectVillage: ${id}`)
    }
    const transition = target => {
      action(`transition: ${target}`)
    }
    const menuItems = [
      {
        disabled: true,
        id: 'Menu.search',
        types: [ActionTypes.ID_SEARCH]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.SHOW_MAIN]
      }
    ]
    const villageItems = [
      {
        avatar: 'fixed',
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
    const story =
      <IdSearch
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
        header="Header.idSearch(human player)"
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        searched
        selectVillage={selectVillage}
        transition={transition}
        villageItems={villageItems}
      />

    return story
  })
