// @flow
import React from 'react'
import SearchResult from './SearchResult'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'
import {shallow} from 'enzyme'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

describe('<SearchResult />', () => {
  test('0 items (searched: false)', () => {
    const selectVillage = jest.fn()
    const wrapper = shallow(
      <SearchResult
        className="className"
        isPlayer
        searched={false}
        selectVillage={selectVillage}
        villageItems={[]}
      />
    )

    expect(wrapper.text()).toBe('')
  })
  test('0 items (searched: true)', () => {
    const selectVillage = jest.fn()
    const wrapper = mountWithIntl(
      <SearchResult
        className="className"
        isPlayer
        searched
        selectVillage={selectVillage}
        villageItems={[]}
      />
    )

    expect(wrapper.text()).toBe('Not Found')
  })
  test('1 item', () => {
    const selectVillage = jest.fn()
    const villageItems = [
      {
        avatar: 'fixed',
        comment: 'comment',
        hostPlayer: {
          isAnonymous: false,
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
      <SearchResult
        className="className"
        isPlayer
        searched
        selectVillage={selectVillage}
        villageItems={villageItems}
      />
    )

    expect(wrapper.find('VillageList').exists()).toBe(true)
  })
})
