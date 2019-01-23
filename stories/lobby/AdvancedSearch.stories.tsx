import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import AdvancedSearch, {Props} from '../../src/scripts/lobby/components/templates/AdvancedSearch'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('lobby|AdvancedSearch', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('検索前', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const validity = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const menuItems = [
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
    ]
    const handleAvatarChange = action('handleAvatarChange')
    const handleCheckboxChange = (propName: string) => action(`handleCheckboxChange ${propName}`)
    const handleNumberChange = (propName: string) => action(`handleNumberChange ${propName}`)
    const handleTextChange = (propName: string) => action(`handleTextChange ${propName}`)
    const handleValidityChange = (propName: string) => action(`handleValidityChange ${propName}`)
    const selectVillage = (id: number) => action(`selectVillage ${id}`)
    const transition = action('transition')
    const story =
      <AdvancedSearch
        checked={checked}
        handleAvatarChange={handleAvatarChange}
        handleCheckboxChange={handleCheckboxChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        header="Header.advancedSearch(human player)"
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        searched={false}
        selectVillage={selectVillage}
        transition={transition}
        validity={validity}
        villageItems={[]}
      />

    return story
  })
  .add('検索後（0件）', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const validity = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const menuItems = [
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
    ]
    const handleAvatarChange = action('handleAvatarChange')
    const handleCheckboxChange = (propName: string) => action(`handleCheckboxChange ${propName}`)
    const handleNumberChange = (propName: string) => action(`handleNumberChange ${propName}`)
    const handleTextChange = (propName: string) => action(`handleTextChange ${propName}`)
    const handleValidityChange = (propName: string) => action(`handleValidityChange ${propName}`)
    const selectVillage = (id: number) => action(`selectVillage ${id}`)
    const transition = action('transition')
    const story =
      <AdvancedSearch
        checked={checked}
        handleAvatarChange={handleAvatarChange}
        handleCheckboxChange={handleCheckboxChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        header="Header.advancedSearch(human player)"
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        searched
        selectVillage={selectVillage}
        transition={transition}
        validity={validity}
        villageItems={[]}
      />

    return story
  })
  .add('検索後（1件）', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const validity = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const menuItems = [
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
    ]
    const handleAvatarChange = action('handleAvatarChange')
    const handleCheckboxChange = (propName: string) => action(`handleCheckboxChange ${propName}`)
    const handleNumberChange = (propName: string) => action(`handleNumberChange ${propName}`)
    const handleTextChange = (propName: string) => action(`handleTextChange ${propName}`)
    const handleValidityChange = (propName: string) => action(`handleValidityChange ${propName}`)
    const selectVillage = (id: number) => action(`selectVillage ${id}`)
    const transition = action('transition')
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
    const story =
      <AdvancedSearch
        checked={checked}
        handleAvatarChange={handleAvatarChange}
        handleCheckboxChange={handleCheckboxChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        header="Header.advancedSearch(human player)"
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        searched
        selectVillage={selectVillage}
        transition={transition}
        validity={validity}
        villageItems={villageItems}
      />

    return story
  })
  .add('検索後（2件）', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const validity = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const menuItems = [
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
    ]
    const handleAvatarChange = action('handleAvatarChange')
    const handleCheckboxChange = (propName: string) => action(`handleCheckboxChange ${propName}`)
    const handleNumberChange = (propName: string) => action(`handleNumberChange ${propName}`)
    const handleTextChange = (propName: string) => action(`handleTextChange ${propName}`)
    const handleValidityChange = (propName: string) => action(`handleValidityChange ${propName}`)
    const selectVillage = (id: number) => action(`selectVillage ${id}`)
    const transition = action('transition')
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
    const story =
      <AdvancedSearch
        checked={checked}
        handleAvatarChange={handleAvatarChange}
        handleCheckboxChange={handleCheckboxChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        header="Header.advancedSearch(human player)"
        image="https://werewolf.world/image/0.1/Friedel.jpg"
        isPlayer
        menuItems={menuItems}
        name="Cathy"
        searched
        selectVillage={selectVillage}
        transition={transition}
        validity={validity}
        villageItems={villageItems}
      />

    return story
  })