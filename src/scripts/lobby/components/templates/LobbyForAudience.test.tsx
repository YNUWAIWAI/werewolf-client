import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import LobbyForAudience from './LobbyForAudience'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import VillageList from '../organisms/VillageList'
import {shallow} from 'enzyme'

test('<LobbyForAudience />', () => {
  const selectVillage = jest.fn()
  const wrapper = shallow(
    <LobbyForAudience
      image="image"
      isPlayer={false}
      menuItems={[]}
      name="name"
      selectVillage={selectVillage}
      villageItems={[]}
    />
  )

  expect(wrapper.children()).toHaveLength(4)
  expect(wrapper.find(Header).exists()).toBe(true)
  expect(wrapper.find(Avatar).exists()).toBe(true)
  expect(wrapper.find(MainContent).exists()).toBe(true)
  expect(wrapper.find(MainContent).find(VillageList).exists()).toBe(true)
  expect(wrapper.find(AsideContent).exists()).toBe(true)
  expect(wrapper.find(AsideContent).find(Menu).exists()).toBe(true)
  expect(selectVillage).toHaveBeenCalledTimes(0)
})
