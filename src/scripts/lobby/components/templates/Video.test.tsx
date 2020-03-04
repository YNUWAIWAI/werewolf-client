import * as React from 'react'
import Video from './Video'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Video
      visible
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
