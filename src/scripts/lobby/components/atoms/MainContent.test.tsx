import * as React from 'react'
import {MainContent} from './MainContent'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <MainContent>
      <div />
    </MainContent>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
