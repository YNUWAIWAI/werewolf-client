import {ImagePath} from '../../constants/ImagePath'
import {lobby} from '../../types'

export const robotPlayerSelectionPage: lobby.Payload$RobotPlayerSelectionPage = {
  avatar: [
    {
      image: ImagePath.Character.a,
      isAuthorized: false,
      isFullyAutomated: true,
      isTestPassed: false,
      language: lobby.Language.en,
      name: 'avatar0',
      status: lobby.AvatarStatus.awaitingAuthorization,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    },
    {
      image: ImagePath.Character.b,
      isAuthorized: false,
      isFullyAutomated: true,
      isTestPassed: false,
      language: lobby.Language.en,
      name: 'avatar1',
      status: lobby.AvatarStatus.awaitingAuthorization,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
    },
    {
      image: ImagePath.Character.c,
      isAuthorized: false,
      isFullyAutomated: true,
      isTestPassed: false,
      language: lobby.Language.en,
      name: 'avatar2',
      status: lobby.AvatarStatus.awaitingAuthorization,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
    },
    {
      image: ImagePath.Character.d,
      isAuthorized: false,
      isFullyAutomated: true,
      isTestPassed: false,
      language: lobby.Language.en,
      name: 'avatar3',
      status: lobby.AvatarStatus.awaitingAuthorization,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
    },
    {
      image: ImagePath.Character.e,
      isAuthorized: false,
      isFullyAutomated: true,
      isTestPassed: false,
      language: lobby.Language.en,
      name: 'avatar4',
      status: lobby.AvatarStatus.awaitingAuthorization,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
    }
  ],
  type: lobby.PayloadType.robotPlayerSelectionPage
}

