import * as React from 'react'
import IdSearch, {Props} from './IdSearch'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import IdSearchBox from '../organisms/IdSearchBox'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import SearchResult from '../organisms/SearchResult'
import {lobby} from '../../types'
import {shallow} from 'enzyme'

describe('<IdSearch />', () => {
  test('0 items', () => {
    const handleSearchIdChange = jest.fn()
    const handleValidityChange = jest.fn()
    const selectVillage = jest.fn()
    const wrapper = shallow(
      <IdSearch
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
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
    expect(wrapper.find(MainContent).find(SearchResult).exists()).toBe(true)
    expect(wrapper.find(AsideContent).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(IdSearchBox).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(Menu).exists()).toBe(true)
    expect(selectVillage).toHaveBeenCalledTimes(0)
  })
  test('1 item', () => {
    const handleSearchIdChange = jest.fn()
    const handleValidityChange = jest.fn()
    const selectVillage = jest.fn()
    const villageItems: Props['villageItems'] = [
      {
        avatar: lobby.Avatar.fixed,
        comment: 'comment',
        hostPlayer: {
          isAnonymous: false,
          isHuman: true,
          name: 'hostPlayer name'
        },
        id: 1,
        idForSearching: 123,
        name: 'name',
        playerSetting: {
          current: 8,
          human: {
            current: 5,
            max: 8
          },
          number: 15,
          robot: {
            current: 3,
            min: 7
          }
        },
        roleSetting: {
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }
      }
    ]
    const wrapper = shallow(
      <IdSearch
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
        header="header"
        image="image"
        isPlayer
        menuItems={[]}
        name="name"
        searched
        selectVillage={selectVillage}
        villageItems={villageItems}
      />
    )

    expect(wrapper.children()).toHaveLength(4)
    expect(wrapper.find(Header).exists()).toBe(true)
    expect(wrapper.find(Avatar).exists()).toBe(true)
    expect(wrapper.find(MainContent).exists()).toBe(true)
    expect(wrapper.find(MainContent).find(SearchResult).exists()).toBe(true)
    expect(wrapper.find(AsideContent).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(IdSearchBox).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(Menu).exists()).toBe(true)
    expect(selectVillage).toHaveBeenCalledTimes(0)
  })
})
