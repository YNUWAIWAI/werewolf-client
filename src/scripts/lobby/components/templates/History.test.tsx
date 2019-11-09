import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import History from './History'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import VillageList from '../organisms/VillageList'
import {shallow} from 'enzyme'

test('<History />', () => {
  const selectVillage = jest.fn()
  const wrapper = shallow(
    <History
      isPlayer={false}
      menuItems={[]}
      selectVillage={selectVillage}
      villageItems={[]}
    />
  )

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find(Header).exists()).toBe(true)
  expect(wrapper.find(MainContent).exists()).toBe(true)
  expect(wrapper.find(MainContent).find(VillageList).exists()).toBe(true)
  expect(wrapper.find(AsideContent).exists()).toBe(true)
  expect(wrapper.find(AsideContent).find(Menu).exists()).toBe(true)
  expect(selectVillage).toHaveBeenCalledTimes(0)
})
