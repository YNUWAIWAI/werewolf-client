import * as React from 'react'
import SelectHumanAvatarTableBody, {StateProps} from './SelectHumanAvatarTableBody'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('1 avatar', () => {
    const avatar: StateProps['avatar'] = {
      allIds: [
        'a1'
      ],
      byId: {
        'a1': {
          checked: false,
          isHover: false,
          name: 'Alice'
        }
      }
    }
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const wrapper = mountWithIntl(
      <SelectHumanAvatarTableBody
        avatar={avatar}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyAvatarName)).toHaveLength(1)
    expect(wrapper.find(SelectAvatarTableBodyCheckBox)).toHaveLength(1)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('2 avatar', () => {
    const avatar: StateProps['avatar'] = {
      allIds: [
        'a1',
        'a2'
      ],
      byId: {
        'a1': {
          checked: false,
          isHover: false,
          name: 'Alice'
        },
        'a2': {
          checked: true,
          isHover: false,
          name: 'Bob'
        }
      }
    }
    const handleAvatarNameChange = jest.fn()
    const handleHoverAvatar = jest.fn()
    const handleSelectAvatar = jest.fn()
    const wrapper = mountWithIntl(
      <SelectHumanAvatarTableBody
        avatar={avatar}
        handleAvatarNameChange={handleAvatarNameChange}
        handleHoverAvatar={handleHoverAvatar}
        handleSelectAvatar={handleSelectAvatar}
      />
    )

    expect(wrapper.find(SelectAvatarTableBodyAvatarName)).toHaveLength(2)
    expect(wrapper.find(SelectAvatarTableBodyCheckBox)).toHaveLength(2)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
