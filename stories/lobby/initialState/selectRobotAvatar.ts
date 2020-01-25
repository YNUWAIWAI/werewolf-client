import * as ActionTypes from '../../../src/scripts/lobby/constants/ActionTypes'
import {ImagePath} from '../../../src/scripts/lobby/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/lobby/reducers'
import {lobby} from '../types'

export const selectRobotAvatar: Partial<ReducerState> = {
  obfucator: {
    loading: false,
    visible: false
  },
  selectRobotAvatar: {
    avatar: {
      allIds: ['3F2504E0-4F89-11D3-9A0C-0305E82C3300', '3F2504E0-4F89-11D3-9A0C-0305E82C3301', '3F2504E0-4F89-11D3-9A0C-0305E82C3302', '3F2504E0-4F89-11D3-9A0C-0305E82C3303', '3F2504E0-4F89-11D3-9A0C-0305E82C3304'],
      byId: {
        '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
          checked: false,
          image: ImagePath.Character.a,
          isAuthorized: false,
          isFullyAutomated: true,
          isHover: false,
          isReadyForAcceptance: false,
          isTestPassed: false,
          language: lobby.Language.en,
          name: 'avatar1',
          status: lobby.AvatarStatus.awaitingAuthorization,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
          checked: false,
          image: ImagePath.Character.a,
          isAuthorized: true,
          isFullyAutomated: false,
          isHover: false,
          isReadyForAcceptance: false,
          isTestPassed: true,
          language: lobby.Language.en,
          name: 'avatar2',
          status: lobby.AvatarStatus.awaitingCommunicationTest,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
          checked: false,
          image: ImagePath.Character.a,
          isAuthorized: false,
          isFullyAutomated: false,
          isHover: false,
          isReadyForAcceptance: true,
          isTestPassed: true,
          language: lobby.Language.en,
          name: 'avatar3',
          status: lobby.AvatarStatus.connected,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3303': {
          checked: false,
          image: ImagePath.Character.a,
          isAuthorized: false,
          isFullyAutomated: false,
          isHover: false,
          isReadyForAcceptance: true,
          isTestPassed: true,
          language: lobby.Language.en,
          name: 'avatar4',
          status: lobby.AvatarStatus.runningInTheBackground,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3304': {
          checked: false,
          image: ImagePath.Character.a,
          isAuthorized: false,
          isFullyAutomated: false,
          isHover: false,
          isReadyForAcceptance: true,
          isTestPassed: true,
          language: lobby.Language.en,
          name: 'avatar5',
          status: lobby.AvatarStatus.runningInTheForeground,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        }
      }
    },
    command: [
      {
        id: 'AvatarSelectCommand.runInTheForeground',
        types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_FOREGROUND]
      },
      {
        id: 'AvatarSelectCommand.runInTheBackground',
        types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND]
      },
      {
        id: 'AvatarSelectCommand.stop',
        types: [ActionTypes.SelectRobotAvatar.STOP]
      },
      {
        id: 'AvatarSelectCommand.delete',
        types: [ActionTypes.SelectRobotAvatar.DELETE]
      }
    ],
    menuItems: [
      {
        id: 'Menu.createNewAvatar',
        types: [ActionTypes.App.SHOW_CREATE_NEW_AVATAR]
      },
      {
        id: 'Menu.returnToMainPage',
        types: [ActionTypes.App.SHOW_MAIN]
      }
    ]
  }
}
