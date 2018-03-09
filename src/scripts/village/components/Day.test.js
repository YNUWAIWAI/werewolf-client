import Day from './Day'
import React from 'react'
import {shallow} from 'enzyme'

test('<Day date={0} phase="昼" phaseTimeLimit={10} />', () => {
  const wrapper = shallow(<Day date={0} phase="昼" phaseTimeLimit={10} />)

  expect(wrapper.text()).toMatch('0日目 昼')
})
test('<Day date={undefined} phase="昼" phaseTimeLimit={10} />', () => {
  const wrapper = shallow(<Day phase="昼" phaseTimeLimit={10} />)

  expect(wrapper.text()).toMatch('undefined日目 昼')
})
test('<Day date={0} phase={undefined} phaseTimeLimit={10} />', () => {
  const wrapper = shallow(<Day date={0} phaseTimeLimit={10} />)

  expect(wrapper.text()).toMatch('0日目 undefined')
})
