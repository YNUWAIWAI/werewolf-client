// @flow
import React from 'react'
import SelectableMember from './SelectableMember'
import {shallow} from 'enzyme'

test('<SelectableMember numberOfHumans={7} numberOfPlayers={15} numberOfRobots={8} />', () => {
  const handleMemberChange = jest.fn()
  const handleNumberChangeInner = jest.fn()
  const handleNumberChange = jest.fn().mockReturnValue(handleNumberChangeInner)
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
    <SelectableMember
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      numberOfHumans={7}
      numberOfPlayers={15}
      numberOfRobots={8}
      role={role}
    />
  )

  expect(wrapper.children()).toHaveLength(5)
  expect(wrapper.find('.village--item--selectable-member--robot').text()).toBe('min<NumberSelect />robots')
  expect(wrapper.find('.village--item--selectable-member--human').text()).toBe('max 7 humans')
  expect(wrapper.find('.village--item--selectable-member--role[data-opt="A"]').text()).toBe('A<MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole />')
  expect(wrapper.find('.village--item--selectable-member--role[data-opt="B"]').text()).toBe('B<MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole />')
  expect(wrapper.find('.village--item--selectable-member--role[data-opt="C"]').text()).toBe('C<MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole /><MemberRole />')
  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  expect(handleNumberChange).toHaveBeenCalledTimes(1)
  expect(handleNumberChange).toHaveBeenCalledWith('numberOfRobots')
  expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
})
test('<SelectableMember numberOfHumans={7} numberOfPlayers={15} numberOfRobots={8} /> onChange', () => {
  const handleMemberChange = jest.fn()
  const handleNumberChangeInner = jest.fn()
  const handleNumberChange = jest.fn().mockReturnValue(handleNumberChangeInner)
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
    <SelectableMember
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      numberOfHumans={7}
      numberOfPlayers={15}
      numberOfRobots={8}
      role={role}
    />
  )

  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  wrapper
    .find('.village--item--selectable-member--role--radio')
    .find('input[value="A"]')
    .simulate('change')
  expect(handleMemberChange).toHaveBeenCalledTimes(1)
  wrapper
    .find('.village--item--selectable-member--role--radio')
    .find('input[value="B"]')
    .simulate('change')
  expect(handleMemberChange).toHaveBeenCalledTimes(2)
  wrapper
    .find('.village--item--selectable-member--role--radio')
    .find('input[value="C"]')
    .simulate('change')
  expect(handleMemberChange).toHaveBeenCalledTimes(3)
})
