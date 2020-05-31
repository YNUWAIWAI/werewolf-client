import * as React from 'react'
import {Member} from './Member'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const human = {
    current: 5,
    max: 8
  }
  const robot = {
    current: 3,
    min: 7
  }
  const role = {
    hunter: 1,
    madman: 1,
    mason: 2,
    medium: 1,
    seer: 1,
    villager: 6,
    werehamster: 1,
    werewolf: 2
  }
  const wrapper = mountWithIntl(
    <Member
      human={human}
      robot={robot}
      role={role}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
