import * as React from 'react'
import SelectRobotAvatarTableBody, {StateProps} from './SelectRobotAvatarTableBody'
import {ImagePath} from '../../constants/ImagePath'
import SelectAvatarTableBodyAccessToken from '../atoms/SelectAvatarTableBodyAccessToken'
import SelectAvatarTableBodyAuthorized from '../atoms/SelectAvatarTableBodyAuthorized'
import SelectAvatarTableBodyAutomation from '../atoms/SelectAvatarTableBodyAutomation'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import SelectAvatarTableBodyStatus from '../atoms/SelectAvatarTableBodyStatus'
import SelectAvatarTableBodyTest from '../atoms/SelectAvatarTableBodyTest'
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
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectRobotAvatarTableBody
        avatar={avatar}
        handleAccept={handleAccept}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
        renewAccessToken={renewAccessToken}
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyCheckBox)).toHaveLength(1)
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
          isAuthorized: false,
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
          isReadyForAcceptance: false,
          isTestPassed: false,
          language: lobby.Language.en,
          name: 'Bob',
          status: lobby.AvatarStatus.awaitingAuthorization,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        }
      }
    }
    const handleAccept = jest.fn()
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const renewAccessToken = jest.fn()
    const wrapper = mountWithIntl(
      <SelectRobotAvatarTableBody
        avatar={avatar}
        handleAccept={handleAccept}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
        renewAccessToken={renewAccessToken}
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyCheckBox)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAvatarName)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyStatus)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAuthorized)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyTest)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAutomation)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyAccessToken)).toHaveLength(2)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
