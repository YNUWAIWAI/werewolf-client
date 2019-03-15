import * as React from 'react'
import Activity from './Activity'
import {shallow} from 'enzyme'

test('<Activity expand />', () => {
  const wrapper = shallow(<Activity expand />)

  expect(wrapper.find('.vi--activity').hasClass('expand')).toBe(true)
})
test('<Activity expand={false} />', () => {
  const wrapper = shallow(<Activity expand={false} />)

  expect(wrapper.find('.vi--activity').hasClass('expand')).toBe(false)
})
