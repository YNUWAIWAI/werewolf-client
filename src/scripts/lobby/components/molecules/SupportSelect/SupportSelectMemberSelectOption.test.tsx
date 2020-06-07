import * as React from 'react'
import {SupportSelectMemberSelectOption} from './SupportSelectMemberSelectOption'
import {act} from 'react-dom/test-utils'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('checked', () => {
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SupportSelectMemberSelectOption
        checked
        handleSelect={handleSelect}
        member={lobby.Member.A}
        numberOfPlayers={15}
      />
    )

    expect(wrapper.children().everyWhere(n => n.getDOMNode().classList.contains('checked'))).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('not checked', () => {
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SupportSelectMemberSelectOption
        checked={false}
        handleSelect={handleSelect}
        member={lobby.Member.A}
        numberOfPlayers={15}
      />
    )

    expect(wrapper.children().everyWhere(n => n.getDOMNode().classList.contains('checked'))).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
test('handleMouseOver', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SupportSelectMemberSelectOption
      checked={false}
      handleSelect={handleSelect}
      member={lobby.Member.A}
      numberOfPlayers={15}
    />
  )

  act(() => {
    wrapper.childAt(0).simulate('mouseover')
  })
  expect(wrapper.children().everyWhere(n => n.getDOMNode().classList.contains('hover'))).toBe(true)
  expect(wrapper.html()).toMatchSnapshot()
})
test('handleMouseLeave', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SupportSelectMemberSelectOption
      checked={false}
      handleSelect={handleSelect}
      member={lobby.Member.A}
      numberOfPlayers={15}
    />
  )

  act(() => {
    wrapper.childAt(0).simulate('mouseover')
  })
  expect(wrapper.children().everyWhere(n => n.getDOMNode().classList.contains('hover'))).toBe(true)
  act(() => {
    wrapper.childAt(0).simulate('mouseleave')
  })
  expect(wrapper.children().everyWhere(n => n.getDOMNode().classList.contains('hover'))).toBe(false)
  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSelect', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SupportSelectMemberSelectOption
      checked={false}
      handleSelect={handleSelect}
      member={lobby.Member.A}
      numberOfPlayers={15}
    />
  )

  act(() => {
    wrapper.childAt(0).simulate('click')
  })
  expect(handleSelect).toHaveBeenCalledWith(true)
})
