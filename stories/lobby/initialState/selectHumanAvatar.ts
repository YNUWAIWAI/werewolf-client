import * as ActionTypes from '../../../src/scripts/lobby/constants/ActionTypes'
import {ImagePath} from '../../../src/scripts/lobby/constants/ImagePath'
import {ReducerState} from '../../../src/scripts/lobby/reducers'
import {lobby} from '../types'

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
          image: ImagePath.Character.a,
          isHover: false,
          language: lobby.Language.en,
          name: 'avatar1'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
          checked: false,
          image: ImagePath.Character.b,
          isHover: false,
          language: lobby.Language.en,
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
