import {
  message,
  selectHumanAvatar
} from '../actions'
import reducer, {initialState} from './selectHumanAvatar'
import {ImagePath} from '../constants/ImagePath'
import {humanPlayerSelectionPage} from './fakeServer'
import {lobby} from '../types'

test('message/ROBOT_PLAYER_SELECTION_PAGE', () => {
  expect(
    reducer(
      initialState,
      message.humanPlayerSelectionPage(humanPlayerSelectionPage)
    )
  ).toStrictEqual(
    {
      ... initialState,
      avatar: {
        allIds: [
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
        ],
        byId: {
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
            checked: false,
            image: ImagePath.Character.a,
            isHover: false,
            language: lobby.Language.en,
            name: 'avatar1'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
            checked: false,
            image: ImagePath.Character.b,
            isHover: false,
            language: lobby.Language.en,
            name: 'avatar2'
          }
        }
      }
    }
  )
})
test('selectRobotAvatar/CHANGE_CHECKBOX', () => {
  const state = reducer(
    initialState,
    message.humanPlayerSelectionPage(humanPlayerSelectionPage)
  )

  expect(
    reducer(
      state,
      selectHumanAvatar.changeCheckbox('3F2504E0-4F89-11D3-9A0C-0305E82C3301')
    )
  ).toStrictEqual(
    {
      ... state,
      avatar: {
        ... state.avatar,
        byId: {
          ... state.avatar.byId,
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
            ... state.avatar.byId['3F2504E0-4F89-11D3-9A0C-0305E82C3301'],
            checked: true
          }
        }
      }
    }
  )
})
