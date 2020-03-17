import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import IdSearch, {Props} from '../../src/scripts/lobby/components/templates/IdSearch'
import {ImagePath} from '../../src/scripts/lobby/constants/ImagePath'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {MenuItemProps} from '../../src/scripts/lobby/components/organisms/Menu'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

storiesOf('lobby|IdSearch', module)
  .addDecorator(story => (
    <div
      className={`lo ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="lo--video" />
    </div>
  ))
  .add('before search', () => {
    const handleSearchIdChange = action('handleSearchIdChange')
    const handleValidityChange = action('handleValidityChange')
    const selectVillage = (id: number) => action(`selectVillage: ${id}`)
    const menuItems: MenuItemProps[] = [
      {
        disabled: true,
        id: 'Menu.search',
        types: [ActionTypes.IdSearch.SEARCH]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.SHOW_MAIN]
      }
    ]
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <IdSearch
            handleSearchIdChange={handleSearchIdChange}
            handleValidityChange={handleValidityChange}
            header="Header.idSearch(human player)"
            image={ImagePath.Character.r}
            isPlayer
            menuItems={menuItems}
            name="Ryan"
            searched={false}
            selectVillage={selectVillage}
            villageItems={[]}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('after search (0 items)', () => {
    const handleSearchIdChange = action('handleSearchIdChange')
    const handleValidityChange = action('handleValidityChange')
    const selectVillage = (id: number) => action(`selectVillage: ${id}`)
    const menuItems: MenuItemProps[] = [
      {
        disabled: true,
        id: 'Menu.search',
        types: [ActionTypes.IdSearch.SEARCH]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.SHOW_MAIN]
      }
    ]
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <IdSearch
            handleSearchIdChange={handleSearchIdChange}
            handleValidityChange={handleValidityChange}
            header="Header.idSearch(human player)"
            image={ImagePath.Character.r}
            isPlayer
            menuItems={menuItems}
            name="Ryan"
            searched
            selectVillage={selectVillage}
            villageItems={[]}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('after search (1 item)', () => {
    const handleSearchIdChange = action('handleSearchIdChange')
    const handleValidityChange = action('handleValidityChange')
    const selectVillage = (id: number) => action(`selectVillage: ${id}`)
    const menuItems: MenuItemProps[] = [
      {
        disabled: true,
        id: 'Menu.search',
        types: [ActionTypes.IdSearch.SEARCH]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.SHOW_MAIN]
      }
    ]
    const villageItems: Props['villageItems'] = [
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <IdSearch
            handleSearchIdChange={handleSearchIdChange}
            handleValidityChange={handleValidityChange}
            header="Header.idSearch(human player)"
            image={ImagePath.Character.r}
            isPlayer
            menuItems={menuItems}
            name="Ryan"
            searched
            selectVillage={selectVillage}
            villageItems={villageItems}
          />
        </IntlProvider>
      </Provider>

    return story
  })
