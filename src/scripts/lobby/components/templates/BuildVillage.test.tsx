import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import BuildVillage from './BuildVillage'
import BuildVillageBox from '../../containers/BuildVillageBoxContainer'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <BuildVillage
      image=""
      menuItems={[]}
      name=""
    />
  )

  expect(wrapper.find(Header).exists()).toBe(true)
  expect(wrapper.find(Avatar).exists()).toBe(true)
  expect(wrapper.find(MainContent).exists()).toBe(true)
  expect(wrapper.find(MainContent).find(BuildVillageBox).exists()).toBe(true)
  expect(wrapper.find(AsideContent).exists()).toBe(true)
  expect(wrapper.find(AsideContent).find(Menu).exists()).toBe(true)
})
