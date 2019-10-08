import * as React from 'react'
import * as lobby from '../../types'
import VillageItem from './VillageItem'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<VillageItem />', () => {
  test('isPlayer: true', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <VillageItem
        avatar={lobby.Avatar.fixed}
        comment="comment"
        handleClick={handleClick}
        hostPlayer={{
          isAnonymous: false,
          isHuman: true,
          name: 'hostPlayer name'
        }}
        id={1}
        idForSearching={123}
        isPlayer
        name="name"
        playerSetting={{
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
        }}
        roleSetting={{
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }}
      />
    )

    expect(wrapper.find('.lo--village--item.clickable').exists()).toBe(true)
    expect(wrapper.find('.lo--village--item--val.village-name').text()).toBe('name')
    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('#123')
    expect(wrapper.find('.lo--village--item--val.host-name').text()).toBe('hostPlayer name')
    expect(wrapper.find('.lo--village--item--val.setup1').text()).toBe('8 / 15 players')
    expect(wrapper.find('.lo--village--item--val.setup2').text()).toBe('Fixed avatar')
    expect(wrapper.find('.lo--village--item--val.comment').text()).toBe('comment')
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  test('isPlayer: false', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <VillageItem
        avatar={lobby.Avatar.fixed}
        comment="comment"
        handleClick={handleClick}
        hostPlayer={{
          isAnonymous: false,
          isHuman: true,
          name: 'hostPlayer name'
        }}
        id={1}
        idForSearching={123}
        isPlayer={false}
        name="name"
        playerSetting={{
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
        }}
        roleSetting={{
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }}
      />
    )

    expect(wrapper.find('.lo--village--item.clickable').exists()).toBe(true)
    expect(wrapper.find('.lo--village--item--val.village-name').text()).toBe('name')
    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('#123')
    expect(wrapper.find('.lo--village--item--val.host-name').text()).toBe('hostPlayer name')
    expect(wrapper.find('.lo--village--item--val.setup1').text()).toBe('15 players')
    expect(wrapper.find('.lo--village--item--val.setup2').text()).toBe('Fixed avatar')
    expect(wrapper.find('.lo--village--item--val.comment').text()).toBe('comment')
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  test('isPlayer: true, idForSearching is invalid', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <VillageItem
        avatar={lobby.Avatar.fixed}
        comment="comment"
        handleClick={handleClick}
        hostPlayer={{
          isAnonymous: false,
          isHuman: true,
          name: 'hostPlayer name'
        }}
        id={1}
        idForSearching={1.23}
        isPlayer
        name="name"
        playerSetting={{
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
        }}
        roleSetting={{
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }}
      />
    )

    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('####')
  })
  test('isPlayer: true, onClick', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <VillageItem
        avatar={lobby.Avatar.fixed}
        comment="comment"
        handleClick={handleClick}
        hostPlayer={{
          isAnonymous: false,
          isHuman: true,
          name: 'hostPlayer name'
        }}
        id={1}
        idForSearching={123}
        isPlayer
        name="name"
        playerSetting={{
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
        }}
        roleSetting={{
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }}
      />
    )

    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  test('isPlayer: false, onClick', () => {
    const handleClick = jest.fn()
    const wrapper = mountWithIntl(
      <VillageItem
        avatar={lobby.Avatar.fixed}
        comment="comment"
        handleClick={handleClick}
        hostPlayer={{
          isAnonymous: false,
          isHuman: true,
          name: 'hostPlayer name'
        }}
        id={1}
        idForSearching={123}
        isPlayer={false}
        name="name"
        playerSetting={{
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
        }}
        roleSetting={{
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }}
      />
    )

    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  test('typeof handleClick !== "function"', () => {
    const wrapper = mountWithIntl(
      <VillageItem
        avatar={lobby.Avatar.fixed}
        comment="comment"
        hostPlayer={{
          isAnonymous: false,
          isHuman: true,
          name: 'hostPlayer name'
        }}
        id={1}
        idForSearching={123}
        isPlayer
        name="name"
        playerSetting={{
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
        }}
        roleSetting={{
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehamster: 1,
          werewolf: 2
        }}
      />
    )

    expect(wrapper.find('.lo--village--item.clickable').exists()).toBe(false)
    expect(wrapper.find('.lo--village--item--val.village-name').text()).toBe('name')
    expect(wrapper.find('.lo--village--item--val.id-for-searching').text()).toBe('#123')
    expect(wrapper.find('.lo--village--item--val.host-name').text()).toBe('hostPlayer name')
    expect(wrapper.find('.lo--village--item--val.setup1').text()).toBe('8 / 15 players')
    expect(wrapper.find('.lo--village--item--val.setup2').text()).toBe('Fixed avatar')
    expect(wrapper.find('.lo--village--item--val.comment').text()).toBe('comment')
  })
})
