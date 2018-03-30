// @flow
import React from 'react'
import SelectableMember from './SelectableMember'
import {shallow} from 'enzyme'

test('<SelectableMember numberOfHumans={7} numberOfPlayers={15} numberOfRobots={8} />', () => {
  const handleChangeEventHandler = jest.fn()
  const handleChange = jest.fn().mockReturnValue(handleChangeEventHandler)
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
      handleChange={handleChange}
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
  expect(handleChange).toHaveBeenCalledTimes(4)
  expect(handleChange).toHaveBeenCalledWith('numberOfRobots')
  expect(handleChange).toHaveBeenCalledWith('member')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(0)
})
test('<SelectableMember numberOfHumans={7} numberOfPlayers={15} numberOfRobots={8} /> onChange', () => {
  const handleChangeEventHandler = jest.fn()
  const handleChange = jest.fn().mockReturnValue(handleChangeEventHandler)
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
      handleChange={handleChange}
      numberOfHumans={7}
      numberOfPlayers={15}
      numberOfRobots={8}
      role={role}
    />
  )

  expect(handleChangeEventHandler).toHaveBeenCalledTimes(0)
  wrapper.find('.village--item--selectable-member--role--radio').find('input[value="A"]').simulate('change')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(1)
  wrapper.find('.village--item--selectable-member--role--radio').find('input[value="B"]').simulate('change')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(2)
  wrapper.find('.village--item--selectable-member--role--radio').find('input[value="C"]').simulate('change')
  expect(handleChangeEventHandler).toHaveBeenCalledTimes(3)
  expect(handleChange).toHaveBeenCalledTimes(4)
})
