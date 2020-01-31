import {
  authorizationRequest,
  robotPlayerSelectionPage
} from './fakeServer'
import {
  message,
  selectRobotAvatar
} from '../actions'
import reducer, {initialState} from './selectRobotAvatar'
import {ImagePath} from '../constants/ImagePath'
import {lobby} from '../types'

test('message/AUTHORIZATION_REQUEST', () => {
  const state = reducer(
    initialState,
    message.robotPlayerSelectionPage(robotPlayerSelectionPage)
  )

  expect(
    reducer(
      state,
      message.authorizationRequest(authorizationRequest)
    )
  ).toStrictEqual(
    {
      ... state,
      avatar: {
        ... state.avatar,
        byId: {
          ... state.avatar.byId,
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
            ... state.avatar.byId['3F2504E0-4F89-11D3-9A0C-0305E82C3300'],
            isReadyForAcceptance: true
          }
        }
      }
    }
  )
})
test('message/ROBOT_PLAYER_SELECTION_PAGE', () => {
  expect(
    reducer(
      initialState,
      message.robotPlayerSelectionPage(robotPlayerSelectionPage)
    )
  ).toStrictEqual(
    {
      ... initialState,
      avatar: {
        allIds: [
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303',
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        ],
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
            name: 'avatar0',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
            checked: false,
            image: ImagePath.Character.b,
            isAuthorized: false,
            isFullyAutomated: true,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: false,
            language: lobby.Language.en,
            name: 'avatar1',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
            checked: false,
            image: ImagePath.Character.c,
            isAuthorized: false,
            isFullyAutomated: true,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: false,
            language: lobby.Language.en,
            name: 'avatar2',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3303': {
            checked: false,
            image: ImagePath.Character.d,
            isAuthorized: false,
            isFullyAutomated: true,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: false,
            language: lobby.Language.en,
            name: 'avatar3',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
          },
          '3F2504E0-4F89-11D3-9A0C-0305E82C3304': {
            checked: false,
            image: ImagePath.Character.e,
            isAuthorized: false,
            isFullyAutomated: true,
            isHover: false,
            isReadyForAcceptance: false,
            isTestPassed: false,
            language: lobby.Language.en,
            name: 'avatar4',
            status: lobby.AvatarStatus.awaitingAuthorization,
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
          }
        }
      }
    }
  )
})
test('selectRobotAvatar/CHANGE_CHECKBOX', () => {
  const state = reducer(
    initialState,
    message.robotPlayerSelectionPage(robotPlayerSelectionPage)
  )

  expect(
    reducer(
      state,
      selectRobotAvatar.changeCheckbox('3F2504E0-4F89-11D3-9A0C-0305E82C3300')
    )
  ).toStrictEqual(
    {
      ... state,
      avatar: {
        ... state.avatar,
        byId: {
          ... state.avatar.byId,
          '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
            ... state.avatar.byId['3F2504E0-4F89-11D3-9A0C-0305E82C3300'],
            checked: true
          }
        }
      }
    }
  )
})
