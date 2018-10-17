// @flow
import React from 'react'
import MemberSelect from './MemberSelect'
import {shallow} from 'enzyme'

test('<MemberSelect numberOfHumans={7} numberOfPlayers={15} numberOfRobots={8} />', () => {
  const handleMemberChangeInner = jest.fn()
  const handleMemberChange = jest.fn(() => handleMemberChangeInner)
  const handleNumberChangeInner = jest.fn()
  const handleNumberChange = jest.fn(() => handleNumberChangeInner)
  const role = {
    A: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehumster: 1,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehumster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 2,
      mason: 2,
      medium: 1,
      seer: 2,
      villager: 3,
      werehumster: 1,
      werewolf: 3
    }
  }
  const wrapper = shallow(
    <MemberSelect
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      numberOfHumans={7}
      numberOfPlayers={15}
      numberOfRobots={8}
      role={role}
      validity={{
        numberOfRobots: true
      }}
    />
  )

  expect(wrapper.children()).toHaveLength(5)
  expect(wrapper.find('.village--item--selectable-member--human').text()).toBe('max 7 humans')
  expect(wrapper.find('.village--item--selectable-member--role[data-opt="A"]').text()).toBe('A<MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole />')
  expect(wrapper.find('.village--item--selectable-member--role[data-opt="B"]').text()).toBe('B<MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole />')
  expect(wrapper.find('.village--item--selectable-member--role[data-opt="C"]').text()).toBe('C<MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole />')
  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  expect(handleMemberChangeInner).toHaveBeenCalledTimes(0)
  expect(handleNumberChange).toHaveBeenCalledTimes(0)
  expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
})
