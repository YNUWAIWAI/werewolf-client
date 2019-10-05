import * as React from 'react'
import * as village from '../../types'
import TeamIcon from './TeamIcon'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<TeamIcon />', () => {
  test('default', () => {
    const wrapper = mountWithIntl(
      <TeamIcon
        class="class"
        team=""
      />
    )

    expect(wrapper.find('img').exists()).toBe(true)
  })
  test('additionalClass', () => {
    const wrapper = mountWithIntl(
      <TeamIcon
        additionalClass="additionalClass"
        class="class"
        team={village.Team.villager}
      />
    )

    expect(wrapper.find('.class').exists()).toBe(true)
    expect(wrapper.find('.class').hasClass('additionalClass')).toBe(true)
    expect(wrapper.find('.class--image').exists()).toBe(true)
    expect(wrapper.find('.class--name').exists()).toBe(true)
  })
  describe('team', () => {
    test('villager', () => {
      const wrapper = mountWithIntl(
        <TeamIcon
          class="class"
          team={village.Team.villager}
        />
      )

      expect(wrapper.find('.class').exists()).toBe(true)
      expect(wrapper.find('.class--image').exists()).toBe(true)
      expect(wrapper.find('.class--name').exists()).toBe(true)
      expect(wrapper.find('.teamVillager').exists()).toBe(true)
    })
    test('werehamster', () => {
      const wrapper = mountWithIntl(
        <TeamIcon
          class="class"
          team={village.Team.werehamster}
        />
      )

      expect(wrapper.find('.class').exists()).toBe(true)
      expect(wrapper.find('.class--image').exists()).toBe(true)
      expect(wrapper.find('.class--name').exists()).toBe(true)
      expect(wrapper.find('.teamWerehamster').exists()).toBe(true)
    })
    test('werewolf', () => {
      const wrapper = mountWithIntl(
        <TeamIcon
          class="class"
          team={village.Team.werewolf}
        />
      )

      expect(wrapper.find('.class').exists()).toBe(true)
      expect(wrapper.find('.class--image').exists()).toBe(true)
      expect(wrapper.find('.class--name').exists()).toBe(true)
      expect(wrapper.find('.teamWerewolf').exists()).toBe(true)
    })
  })
})
