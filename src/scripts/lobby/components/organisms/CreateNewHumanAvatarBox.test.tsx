import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import CreateNewAvatarHeader from '../molecules/CreateNewAvatarHeader'
import CreateNewHumanAvatarBody from '../molecules/CreateNewHumanAvatarBody'
import CreateNewHumanAvatarBox from './CreateNewHumanAvatarBox'
import {MenuItemProps as MenuItem} from './Menu'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {shallowWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const command: MenuItem[] = [
    {
      id: 'CreateNewAvatar.create',
      types: [ActionTypes.SelectRobotAvatar.CREATE]
    }
  ]
  const wrapper = shallowWithIntl(
    <CreateNewHumanAvatarBox
      command={command}
    />
  )

  expect(wrapper.find(CreateNewAvatarHeader)).toHaveLength(1)
  expect(wrapper.find(CreateNewHumanAvatarBody)).toHaveLength(1)
})
