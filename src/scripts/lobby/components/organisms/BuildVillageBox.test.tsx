import * as React from 'react'
import BuildVillageBox, {StateProps} from './BuildVillageBox'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleAvatarChange = jest.fn()
  const handleMemberChange = jest.fn()
  const handleNumberChange = jest.fn()
  const handleTextChange = jest.fn()
  const validity: StateProps['validity'] = {
    avatar: true,
    comment: true,
    numberOfPlayers: true,
    numberOfRobots: true,
    villageName: true
  }
  const value: StateProps['value'] = {
    avatar: lobby.Avatar.fixed,
    comment: '',
    hostName: 'Alice',
    numberOfHumans: 8,
    numberOfPlayers: 15,
    numberOfRobots: 7,
    villageName: 'Alice\'s village'
  }
  const wrapper = mountWithIntl(
    <BuildVillageBox
      handleAvatarChange={handleAvatarChange}
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      handleTextChange={handleTextChange}
      navigatable
      validity={validity}
      value={value}
    />
  )

  expect(handleAvatarChange).toHaveBeenCalledTimes(0)
  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  expect(handleNumberChange).toHaveBeenCalledTimes(2)
  expect(handleTextChange).toHaveBeenCalledTimes(2)
  expect(wrapper.html()).toMatchSnapshot()
})
