import * as React from 'react'
import AdvancedSearch from './AdvancedSearch'
import AdvancedSearchBox from '../../containers/AdvancedSearchBoxContainer'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import SearchResult from '../organisms/SearchResult'
import {shallow} from 'enzyme'

test('<AdvancedSearch />', () => {
  const selectVillage = jest.fn()
  const wrapper = shallow(
    <AdvancedSearch
      header="header"
      image="image"
      isPlayer
      menuItems={[]}
      name="name"
      searched={false}
      selectVillage={selectVillage}
      villageItems={[]}
    />
  )

  expect(wrapper.children()).toHaveLength(4)
  expect(wrapper.find(Header).exists()).toBe(true)
  expect(wrapper.find(Avatar).exists()).toBe(true)
  expect(wrapper.find(MainContent).exists()).toBe(true)
  expect(wrapper.find(MainContent).find(AdvancedSearchBox).exists()).toBe(true)
  expect(wrapper.find(MainContent).find(SearchResult).exists()).toBe(true)
  expect(wrapper.find(AsideContent).exists()).toBe(true)
  expect(wrapper.find(AsideContent).find(Menu).exists()).toBe(true)
  expect(selectVillage).toHaveBeenCalledTimes(0)
})
