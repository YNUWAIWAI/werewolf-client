import * as React from 'react'
import {
  SelectRobotAvatarTableBody,
  StateProps
} from './SelectRobotAvatarTableBody'
import {ImagePath} from '../../constants/ImagePath'
import {SelectAvatarTableBodyAccessToken} from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAccessToken'
import {SelectAvatarTableBodyAuthorized} from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAuthorized'
import {SelectAvatarTableBodyAutomation} from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAutomation'
import {SelectAvatarTableBodyAvatarName} from '../atoms/SelectAvatarTable/SelectAvatarTableBodyAvatarName'
import {SelectAvatarTableBodyCheckbox} from '../atoms/SelectAvatarTable/SelectAvatarTableBodyCheckbox'
import {SelectAvatarTableBodyStatus} from '../atoms/SelectAvatarTable/SelectAvatarTableBodyStatus'
import {SelectAvatarTableBodyTest} from '../atoms/SelectAvatarTable/SelectAvatarTableBodyTest'
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
          isAuthorized: false,
          isFullyAutomated: true,
          isHover: false,
          isReadyForAcceptance: false,
          isTestPassed: false,
          language: lobby.Language.en,
          name: 'Alice',
          status: lobby.AvatarStatus.awaitingAuthorization,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
        }
      }
    }
    const handleAccept = jest.fn()
    const handleAvatarImageClick = jest.fn()
    const handleAvatarLanguageChange = jest.fn()
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectRobotAvatarTableBody
        avatar={avatar}
        handleAccept={handleAccept}
        handleAvatarImageClick={handleAvatarImageClick}
        handleAvatarLanguageChange={handleAvatarLanguageChange}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
        navigatable
        renewAccessToken={renewAccessToken}
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyCheckbox)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyAvatarName)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyStatus)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyAuthorized)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyTest)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyAutomation)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyAccessToken)).toHaveLength(1)
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
          isAuthorized: true,
          isFullyAutomated: true,
          isHover: false,
          isReadyForAcceptance: false,
          isTestPassed: false,
          language: lobby.Language.en,
          name: 'Alice',
          status: lobby.AvatarStatus.awaitingAuthorization,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
        },
        '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
          checked: false,
          image: ImagePath.Character.a,
          isAuthorized: false,
          isFullyAutomated: true,
          isHover: false,
          isReadyForAcceptance: true,
          isTestPassed: false,
          language: lobby.Language.en,
          name: 'Bob',
          status: lobby.AvatarStatus.awaitingAuthorization,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        }
      }
    }
    const handleAccept = jest.fn()
    const handleAvatarImageClick = jest.fn()
    const handleAvatarLanguageChange = jest.fn()
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectRobotAvatarTableBody
        avatar={avatar}
        handleAccept={handleAccept}
        handleAvatarImageClick={handleAvatarImageClick}
        handleAvatarLanguageChange={handleAvatarLanguageChange}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
        navigatable
        renewAccessToken={renewAccessToken}
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyCheckbox)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAvatarName)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyStatus)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAuthorized)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyTest)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAutomation)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAccessToken)).toHaveLength(2)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
