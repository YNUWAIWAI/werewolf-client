import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {Avatar} from '../atoms/Avatar'
import {BuildVillage} from './BuildVillage'
import {BuildVillageBoxContainer} from '../../containers/BuildVillageBoxContainer'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import {MenuContainer} from '../../containers/MenuContainer'
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
  expect(wrapper.find(MainContent).find(BuildVillageBoxContainer).exists()).toBe(true)
  expect(wrapper.find(AsideContent).exists()).toBe(true)
  expect(wrapper.find(AsideContent).find(MenuContainer).exists()).toBe(true)
})
