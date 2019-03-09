/* global lobby */
import * as React from 'react'
import MemberSelect from './MemberSelect'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

test('render', () => {
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
      werehamster: 1,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehamster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 2,
      mason: 2,
      medium: 1,
      seer: 2,
      villager: 3,
      werehamster: 1,
      werewolf: 3
    }
  }
  const wrapper = mountWithIntl(
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

  expect(wrapper.children().children()).toHaveLength(5)
  expect(wrapper.find('.village--item--member-select--human').text()).toBe('max 7 humans')
  expect(handleMemberChange).toHaveBeenCalledTimes(0)
  expect(handleMemberChangeInner).toHaveBeenCalledTimes(0)
  expect(handleNumberChange).toHaveBeenCalledTimes(0)
  expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
})
describe('onChange', () => {
  const role = {
    A: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehamster: 1,
      werewolf: 2
    },
    B: {
      hunter: 1,
      madman: 1,
      mason: 2,
      medium: 1,
      seer: 1,
      villager: 6,
      werehamster: 1,
      werewolf: 2
    },
    C: {
      hunter: 1,
      madman: 2,
      mason: 2,
      medium: 1,
      seer: 2,
      villager: 3,
      werehamster: 1,
      werewolf: 3
    }
  }

  test('A', () => {
    const handleMemberChangeInner = jest.fn()
    const handleMemberChange = jest.fn(() => handleMemberChangeInner)
    const handleNumberChangeInner = jest.fn()
    const handleNumberChange = jest.fn(() => handleNumberChangeInner)
    const wrapper = mountWithIntl(
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

    wrapper.find('input[name="member"]').at(0).simulate('change')
    expect(handleMemberChange).toHaveBeenCalledTimes(1)
    expect(handleMemberChange).toHaveBeenCalledWith(true)
    expect(handleMemberChangeInner).toHaveBeenCalledTimes(1)
    expect(handleMemberChangeInner).toHaveBeenCalledWith(lobby.Member.A)
    expect(handleNumberChange).toHaveBeenCalledTimes(0)
    expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
  })
  test('B', () => {
    const handleMemberChangeInner = jest.fn()
    const handleMemberChange = jest.fn(() => handleMemberChangeInner)
    const handleNumberChangeInner = jest.fn()
    const handleNumberChange = jest.fn(() => handleNumberChangeInner)
    const wrapper = mountWithIntl(
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

    wrapper.find('input[name="member"]').at(1).simulate('change')
    expect(handleMemberChange).toHaveBeenCalledTimes(1)
    expect(handleMemberChange).toHaveBeenCalledWith(true)
    expect(handleMemberChangeInner).toHaveBeenCalledTimes(1)
    expect(handleMemberChangeInner).toHaveBeenCalledWith(lobby.Member.B)
    expect(handleNumberChange).toHaveBeenCalledTimes(0)
    expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
  })
  test('C', () => {
    const handleMemberChangeInner = jest.fn()
    const handleMemberChange = jest.fn(() => handleMemberChangeInner)
    const handleNumberChangeInner = jest.fn()
    const handleNumberChange = jest.fn(() => handleNumberChangeInner)
    const wrapper = mountWithIntl(
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

    wrapper.find('input[name="member"]').at(2).simulate('change')
    expect(handleMemberChange).toHaveBeenCalledTimes(1)
    expect(handleMemberChange).toHaveBeenCalledWith(true)
    expect(handleMemberChangeInner).toHaveBeenCalledTimes(1)
    expect(handleMemberChangeInner).toHaveBeenCalledWith(lobby.Member.C)
    expect(handleNumberChange).toHaveBeenCalledTimes(0)
    expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
  })
})
