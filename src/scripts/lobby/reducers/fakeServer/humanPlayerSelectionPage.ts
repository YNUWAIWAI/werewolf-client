import {ImagePath} from '../../constants/ImagePath'
import {lobby} from '../../types'

export const humanPlayerSelectionPage: lobby.Payload$HumanPlayerSelectionPage = {
  avatar: [
    {
      image: ImagePath.Character.a,
      language: lobby.Language.en,
      name: 'avatar1',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
    },
    {
      image: ImagePath.Character.b,
      language: lobby.Language.en,
      name: 'avatar2',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
    }
  ],
  type: lobby.PayloadType.humanPlayerSelectionPage
}
