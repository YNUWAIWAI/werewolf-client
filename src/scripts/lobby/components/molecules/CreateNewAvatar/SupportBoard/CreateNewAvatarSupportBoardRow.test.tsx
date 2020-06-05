import * as React from 'react'
import {CreateNewAvatarSupportBoardRow} from './CreateNewAvatarSupportBoardRow'
import {getMessages} from '../../../../i18n'
import {initRenderer} from '../../../../tools'
import {lobby} from '../../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <CreateNewAvatarSupportBoardRow
      className="className"
      numberOfPlayers={15}
      support={{
        [lobby.Member.A]: false,
        [lobby.Member.B]: false,
        [lobby.Member.C]: false
      }}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
