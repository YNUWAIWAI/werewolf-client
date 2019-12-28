import * as ActionTypes from '../../constants/ActionTypes'
import * as React from 'react'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'
import SelectHumanAvatarBox from './SelectHumanAvatarBox'
import SelectHumanAvatarTable from './SelectHumanAvatarTable'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {shallowWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const command: MenuItem[] = [
    {
      id: 'AvatarSelectCommand.select',
      types: [ActionTypes.SelectHumanAvatar.SELECT]
    },
    {
      id: 'AvatarSelectCommand.delete',
      types: [ActionTypes.SelectHumanAvatar.DELETE]
    }
  ]
  const wrapper = shallowWithIntl(
    <SelectHumanAvatarBox
      command={command}
    />
  )

  expect(wrapper.find(SelectHumanAvatarTable)).toHaveLength(1)
  expect(wrapper.find(Menu)).toHaveLength(1)
})
