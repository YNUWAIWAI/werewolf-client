// @flow
import ChatNum from './ChatNum'
import React from 'react'
import {shallow} from 'enzyme'

test('<ChatNum id={1} intensionalDisclosureRange="anonymousAudience" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="anonymousAudience" />)

  expect(wrapper.text()).toBe('')
})
test('<ChatNum id={1} intensionalDisclosureRange="grave" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="grave" />)

  expect(wrapper.text()).toBe('')
})
test('<ChatNum id={1} intensionalDisclosureRange="hunter" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="hunter" />)

  expect(wrapper.text()).toBe('')
})
test('<ChatNum id={1} intensionalDisclosureRange="master" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="master" />)

  expect(wrapper.text()).toBe('')
})
test('<ChatNum id={1} intensionalDisclosureRange="onymousAudience" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="onymousAudience" />)

  expect(wrapper.text()).toBe('')
})
test('<ChatNum id={1} intensionalDisclosureRange="private" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="private" />)

  expect(wrapper.text()).toBe('')
})
test('<ChatNum id={1} intensionalDisclosureRange="public" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="public" />)

  expect(wrapper.text()).toBe('1')
})
test('<ChatNum id={1} intensionalDisclosureRange="seer" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="seer" />)

  expect(wrapper.text()).toBe('')
})
test('<ChatNum id={1} intensionalDisclosureRange="werewolf" />', () => {
  const wrapper = shallow(<ChatNum id={1} intensionalDisclosureRange="werewolf" />)

  expect(wrapper.text()).toBe('')
})
