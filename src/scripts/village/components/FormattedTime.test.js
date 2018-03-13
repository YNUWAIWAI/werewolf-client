import FormattedTime from './FormattedTime'
import React from 'react'
import {shallow} from 'enzyme'

test('time = 5999 => 残り99\'59', () => {
  const wrapper = shallow(<FormattedTime time={5999} />)

  expect(wrapper.text()).toBe('残り99\'59')
})
test('time = 90 => 残り01\'30', () => {
  const wrapper = shallow(<FormattedTime time={90} />)

  expect(wrapper.text()).toBe('残り01\'30')
})
test('time = 30 => 残り00\'30', () => {
  const wrapper = shallow(<FormattedTime time={30} />)

  expect(wrapper.text()).toBe('残り00\'30')
})
test('time = 5 => 残り00\'05', () => {
  const wrapper = shallow(<FormattedTime time={5} />)

  expect(wrapper.text()).toBe('残り00\'05')
})
test('time = 0 => 残り00\'00', () => {
  const wrapper = shallow(<FormattedTime time={0} />)

  expect(wrapper.text()).toBe('残り00\'00')
})
test('time = -1 => 終了', () => {
  const wrapper = shallow(<FormattedTime time={-1} />)

  expect(wrapper.text()).toBe('終了')
})
test('time = 6000 => 残り100\'00', () => {
  const wrapper = shallow(<FormattedTime time={6000} />)

  expect(wrapper.text()).toBe('残り100\'00')
})
test('time = \'5\' => 残り00\'05', () => {
  const wrapper = shallow(<FormattedTime time="5" />)

  expect(wrapper.text()).toBe('残り00\'05')
})
test('time = undefined => 残りNaN\'NaN', () => {
  const wrapper = shallow(<FormattedTime />)

  expect(wrapper.text()).toBe('残りNaN\'NaN')
})
