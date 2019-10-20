import * as React from 'react'
import * as lobby from '../../types'
import Member from './Member'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('<Member />', () => {
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

  expect(wrapper.find('.lo--village--item--member--robot').text()).toBe('min 7 robots')
  expect(wrapper.find('.lo--village--item--member--human').text()).toBe('max 8 humans')
  expect(wrapper.find('.lo--village--item--member--role').children()).toHaveLength(8)
})
