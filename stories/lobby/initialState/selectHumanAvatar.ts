import * as ActionTypes from '../../../src/scripts/lobby/constants/ActionTypes'
import {ReducerState} from '../../../src/scripts/lobby/reducers'

export const selectHumanAvatar: Partial<ReducerState> = {
  obfucator: {
    loading: false,
    visible: false
  },
  selectHumanAvatar: {
    avatar: {
      allIds: [
        '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
      ],
      byId: {
        '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
          checked: false,
          isHover: false,
          name: 'avatar1'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
          checked: false,
          isHover: false,
          name: 'avatar2'
        }
      }
    },
    command: [
      {
        id: 'AvatarSelectCommand.select',
        types: [ActionTypes.SelectHumanAvatar.SELECT]
      },
      {
        id: 'AvatarSelectCommand.delete',
        types: [ActionTypes.SelectHumanAvatar.DELETE]
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
