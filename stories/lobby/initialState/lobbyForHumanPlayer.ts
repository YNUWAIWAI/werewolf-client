import * as ActionTypes from '../../../src/scripts/lobby/constants/ActionTypes'
import {ImagePath} from '../../../src/scripts/lobby/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/lobby/reducers'
import {lobby} from '../types'

export const lobbyForHumanPlayer: Partial<ReducerState> = {
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
        isLoading: false,
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
        avatar: lobby.Avatar.random,
        comment: 'Open to beginners',
        hostPlayer: {
          isAnonymous: true,
          isHuman: false,
          name: 'Anonymous'
        },
        id: 2,
        idForSearching: 456,
        name: 'Loston',
        playerSetting: {
          current: 4,
          human: {
            current: 2,
            max: 3
          },
          number: 5,
          robot: {
            current: 2,
            min: 2
          }
        },
        roleSetting: {
          hunter: 0,
          madman: 0,
          mason: 0,
          medium: 0,
          seer: 1,
          villager: 3,
          werehamster: 0,
          werewolf: 1
        }
      }
    ]
  },
  obfucator: {
    loading: false,
    visible: false
  }
}
