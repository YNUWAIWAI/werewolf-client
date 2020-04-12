import * as React from 'react'
import SelectHumanAvatarTableBody, {StateProps} from './SelectHumanAvatarTableBody'
import {ImagePath} from '../../constants/ImagePath'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTable/SelectAvatarTableBodyCheckBox'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('1 avatar', () => {
    const avatar: StateProps['avatar'] = {
      allIds: [
        '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      ],
      byId: {
        '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
          checked: false,
          image: ImagePath.Character.a,
          isHover: false,
          language: lobby.Language.en,
          name: 'Alice'
        }
      }
    }
    const handleAvatarImageClick = jest.fn()
    const handleAvatarLanguageChange = jest.fn()
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const wrapper = mountWithIntl(
      <SelectHumanAvatarTableBody
        avatar={avatar}
        handleAvatarImageClick={handleAvatarImageClick}
        handleAvatarLanguageChange={handleAvatarLanguageChange}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
        navigatable
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyAvatarName)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyCheckBox)).toHaveLength(1)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('2 avatar', () => {
    const avatar: StateProps['avatar'] = {
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
          name: 'Alice'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
          checked: true,
          image: ImagePath.Character.b,
          isHover: false,
          language: lobby.Language.en,
          name: 'Bob'
        }
      }
    }
    const handleAvatarImageClick = jest.fn()
    const handleAvatarLanguageChange = jest.fn()
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const wrapper = mountWithIntl(
      <SelectHumanAvatarTableBody
        avatar={avatar}
        handleAvatarImageClick={handleAvatarImageClick}
        handleAvatarLanguageChange={handleAvatarLanguageChange}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
        navigatable
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyAvatarName)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyCheckBox)).toHaveLength(2)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
