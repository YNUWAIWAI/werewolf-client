// @flow
import Member from './Member'
import React from 'react'
import {shallow} from 'enzyme'

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
    werehumster: 1,
    werewolf: 2
  }
  const wrapper = shallow(
    <Member
      human={human}
      robot={robot}
      role={role}
    />
  )

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('.village--item--member--robot').text()).toBe('min 7 robots')
  expect(wrapper.find('.village--item--member--human').text()).toBe('max 8 humans')
  expect(wrapper.find('.village--item--member--role').children()).toHaveLength(8)
})
