import * as ActionTypes from '../../../src/scripts/lobby/constants/ActionTypes'
import * as lobby from '../types'
import {Content} from '../../../src/scripts/lobby/reducers/app'
import {ReducerState} from '../../../src/scripts/lobby/reducers'

const state: Partial<ReducerState> = {
  app: {
    content: Content.LobbyForHumanPlayer
  },
  lobbyForHumanPlayer: {
    image: 'https://werewolf.world/image/0.3/agent_icons/50x50/r_50x50.png',
    isPlayer: true,
    menuItems: [
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
        isLoading: false,
        types: [ActionTypes.Target.REFRESH, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.SHOW_MAIN]
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

export default state
