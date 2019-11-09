import * as React from 'react'
import WaitingForPlayers, {Props} from './WaitingForPlayers'
import AsideContent from '../atoms/AsideContent'
import AvatarList from '../organisms/AvatarList'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import VillageList from '../organisms/VillageList'
import {lobby} from '../../types'
import {shallow} from 'enzyme'

describe('render', () => {
  test('village={defined}', () => {
    const village: Props['village'] = {
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
    const confirmKickOutPlayer = jest.fn()
    const wrapper = shallow(
      <WaitingForPlayers
        confirmKickOutPlayer={confirmKickOutPlayer}
        isPlayer
        menuItems={[]}
        players={[]}
        village={village}
      />
    )

    expect(wrapper.children()).toHaveLength(3)
    expect(wrapper.find(Header).exists()).toBe(true)
    expect(wrapper.find(MainContent).exists()).toBe(true)
    expect(wrapper.find(MainContent).find(VillageList).exists()).toBe(true)
    expect(wrapper.find(AsideContent).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(AvatarList).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(Menu)).toHaveLength(2)
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
  test('village={undefined}', () => {
    const confirmKickOutPlayer = jest.fn()
    const wrapper = shallow(
      <WaitingForPlayers
        confirmKickOutPlayer={confirmKickOutPlayer}
        isPlayer
        menuItems={[]}
        players={[]}
        village={null}
      />
    )

    expect(wrapper.children()).toHaveLength(3)
    expect(wrapper.find(Header).exists()).toBe(true)
    expect(wrapper.find(MainContent).exists()).toBe(true)
    expect(wrapper.find(MainContent).find(VillageList).exists()).toBe(true)
    expect(wrapper.find(AsideContent).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(AvatarList).exists()).toBe(true)
    expect(wrapper.find(AsideContent).find(Menu)).toHaveLength(2)
    expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
  })
})
