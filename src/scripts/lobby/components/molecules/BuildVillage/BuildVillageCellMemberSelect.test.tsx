import * as React from 'react'
import BuildVillageCellMemberSelect from './BuildVillageCellMemberSelect'
import Cast from '../../../constants/Cast'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleMemberChange = jest.fn()
  const handleNumberChange = jest.fn()
  const wrapper = mountWithIntl(
    <BuildVillageCellMemberSelect
      handleMemberChange={handleMemberChange}
      handleNumberChange={handleNumberChange}
      navigatable
      role={Cast['15']}
      validity={{
        numberOfRobots: true
      }}
      value={{
        numberOfHumans: 8,
        numberOfPlayers: 15,
        numberOfRobots: 7
      }}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
describe('handleMemberChange', () => {
  test('A', () => {
    const handleMemberChangeInner = jest.fn()
    const handleMemberChange = jest.fn(() => handleMemberChangeInner)
    const handleNumberChange = jest.fn()
    const wrapper = mountWithIntl(
      <BuildVillageCellMemberSelect
        handleMemberChange={handleMemberChange}
        handleNumberChange={handleNumberChange}
        navigatable
        role={Cast['15']}
        validity={{
          numberOfRobots: true
        }}
        value={{
          numberOfHumans: 8,
          numberOfPlayers: 15,
          numberOfRobots: 7
        }}
      />
    )

    wrapper.find('#memberA').simulate('change')
    expect(handleMemberChange).toHaveBeenCalledWith(true)
    expect(handleMemberChangeInner).toHaveBeenCalledWith(lobby.Member.A)
  })
  test('B', () => {
    const handleMemberChangeInner = jest.fn()
    const handleMemberChange = jest.fn(() => handleMemberChangeInner)
    const handleNumberChange = jest.fn()
    const wrapper = mountWithIntl(
      <BuildVillageCellMemberSelect
        handleMemberChange={handleMemberChange}
        handleNumberChange={handleNumberChange}
        navigatable
        role={Cast['15']}
        validity={{
          numberOfRobots: true
        }}
        value={{
          numberOfHumans: 8,
          numberOfPlayers: 15,
          numberOfRobots: 7
        }}
      />
    )

    wrapper.find('#memberB').simulate('change')
    expect(handleMemberChange).toHaveBeenCalledWith(true)
    expect(handleMemberChangeInner).toHaveBeenCalledWith(lobby.Member.B)
  })
  test('C', () => {
    const handleMemberChangeInner = jest.fn()
    const handleMemberChange = jest.fn(() => handleMemberChangeInner)
    const handleNumberChange = jest.fn()
    const wrapper = mountWithIntl(
      <BuildVillageCellMemberSelect
        handleMemberChange={handleMemberChange}
        handleNumberChange={handleNumberChange}
        navigatable
        role={Cast['15']}
        validity={{
          numberOfRobots: true
        }}
        value={{
          numberOfHumans: 8,
          numberOfPlayers: 15,
          numberOfRobots: 7
        }}
      />
    )

    wrapper.find('#memberC').simulate('change')
    expect(handleMemberChange).toHaveBeenCalledWith(true)
    expect(handleMemberChangeInner).toHaveBeenCalledWith(lobby.Member.C)
  })
})
