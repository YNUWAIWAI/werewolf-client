import * as React from 'react'
import {Video} from './Video'
import {shallow} from 'enzyme'

describe('render', () => {
  test('visible', () => {
    const wrapper = shallow(
      <Video
        visible
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('invisible', () => {
    const wrapper = shallow(
      <Video
        visible={false}
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
