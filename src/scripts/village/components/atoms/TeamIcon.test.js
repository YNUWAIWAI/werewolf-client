// @flow
import React from 'react'
import TeamIcon from './TeamIcon'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

describe('<TeamIcon />', () => {
  test('default', () => {
    const wrapper = mountWithIntl(
      <TeamIcon
        class="class"
        team=""
      />
    )

    expect(wrapper.children()).toHaveLength(0)
  })
  test('additionalClass', () => {
    const wrapper = mountWithIntl(
      <TeamIcon
        additionalClass="additionalClass"
        class="class"
        team="villager"
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
          team="villager"
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
          team="werehamster"
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
          team="werewolf"
        />
      )

      expect(wrapper.find('.class').exists()).toBe(true)
      expect(wrapper.find('.class--image').exists()).toBe(true)
      expect(wrapper.find('.class--name').exists()).toBe(true)
      expect(wrapper.find('.teamWerewolf').exists()).toBe(true)
    })
  })
})
