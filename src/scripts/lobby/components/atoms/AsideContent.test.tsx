import * as React from 'react'
import {AsideContent} from './AsideContent'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <AsideContent>
      <div />
    </AsideContent>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
