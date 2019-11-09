import * as React from 'react'
import ConnectingToRobotPlayer, {Props} from './ConnectingToRobotPlayer'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {shallow} from 'enzyme'

test('<ConnectingToRobotPlayer />', () => {
  const items: Props['menuItems'] = []
  const wrapper = shallow(
    <ConnectingToRobotPlayer
      menuItems={items}
    />
  )

  expect(wrapper.find(Header).exists()).toBe(true)
  expect(wrapper.find(MainContent).exists()).toBe(true)
  expect(wrapper.find(AsideContent).exists()).toBe(true)
  expect(wrapper.find(AsideContent).find(Menu).exists()).toBe(true)
})
