import * as React from 'react'
import MemberRole from './MemberRole'
import {shallow} from 'enzyme'

test('<MemberRole class="class" id="id" image="image" name="name" numberOfAgents={0} />', () => {
  const wrapper = shallow(
    <MemberRole
      className="class"
      id="id"
      image="image"
      name="name"
      numberOfAgents={0}
    />
  )

  expect(wrapper.text()).toBe('✕0name')
  expect(wrapper.find('img[src="image"]').exists()).toBe(true)
})
