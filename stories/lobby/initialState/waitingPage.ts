import * as ActionTypes from '../../../src/scripts/lobby/constants/ActionTypes'
import {ImagePath} from '../../../src/scripts/lobby/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/lobby/reducers'
import {lobby} from '../types'

export const waitingPage: Partial<ReducerState> = {
  obfucator: {
    loading: false,
    visible: false
  },
  waitingForPlayers: {
    isPlayer: true,
    kickOutToken: '',
    menuItems: [
      {
        disabled: true,
        id: 'Menu.playGame',
        types: [ActionTypes.App.PLAY_GAME]
      },
      {
        id: 'Menu.returnToLobbyForHumanPlayer',
        types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_MAIN]
      }
    ],
    players: [
      {
        avatarImage: ImagePath.Character.r,
        isAnonymous: false,
        isHost: true,
        isMe: true,
        name: 'Ryan',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous2',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous3',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous4',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous5',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous6',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous7',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous8',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous9',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous10',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous11',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3311'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous12',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous13',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3313'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous14',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3314'
      },
      {
        avatarImage: ImagePath.Character.anonymous,
        isAnonymous: true,
        isHost: false,
        isMe: false,
        name: 'Anonymous15',
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
      name: 'Fearwick',
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
