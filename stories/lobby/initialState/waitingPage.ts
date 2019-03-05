/* global lobby */
import {ReducerState} from '../../../src/scripts/lobby/reducers'
import * as ActionTypes from '../../../src/scripts/lobby/constants/ActionTypes'
import WaitingForPlayers from '../../../src/scripts/lobby/containers/WaitingForPlayersContainer'

const state: Partial<ReducerState> = {
  app: {
    content: WaitingForPlayers
  },
  waitingForPlayers: {
    isPlayer: true,
    menuItems: [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.Target.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
      }
    ],
    players: [
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: true,
        isMe: true,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
      },
      {
        avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3311'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3313'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3314'
      },
      {
        avatarImage: '',
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3315'
      }
    ],
    village: {
      avatar: lobby.Avatar.random,
      comment: 'Experts recommended',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: 1,
      idForSearching: 123,
      name: 'Fairytale village',
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
  }
}

export default state
