import * as React from 'react'
import Main, {Props} from './Main'
import Menu from '../../containers/MenuContainer'
import {shallow} from 'enzyme'

test('<Main />', () => {
  const items: Props['menuItems'] = []
  const wrapper = shallow(
    <Main
      menuItems={items}
    />
  )

  expect(wrapper.find(Menu).exists()).toBe(true)
})
