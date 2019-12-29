import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'
import SelectRobotAvatarBox from './SelectRobotAvatarBox'
import SelectRobotAvatarTable from './SelectRobotAvatarTable'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {shallowWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const command: MenuItem[] = [
    {
      id: 'AvatarSelectCommand.runInTheForeground',
      types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_FOREGROUND]
    },
    {
      id: 'AvatarSelectCommand.runInTheBackground',
      types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND]
    },
    {
      id: 'AvatarSelectCommand.stop',
      types: [ActionTypes.SelectRobotAvatar.STOP]
    },
    {
      id: 'AvatarSelectCommand.delete',
      types: [ActionTypes.SelectRobotAvatar.DELETE]
    }
  ]
  const wrapper = shallowWithIntl(
    <SelectRobotAvatarBox
      command={command}
    />
  )

  expect(wrapper.find(SelectRobotAvatarTable)).toHaveLength(1)
  expect(wrapper.find(Menu)).toHaveLength(1)
})
