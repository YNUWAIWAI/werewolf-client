// @flow
import React from 'react'
import ResultCell from './ResultCell'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

describe('<ResultCell />', () => {
  describe('type="image"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="alive"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="dead"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="death by execution"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="death by attack"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="death by fear"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="unnatural death"
          type="image"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--image')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
  })
  describe('type="avatarImage"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="alive"
          type="avatarImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="dead"
          type="avatarImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="death by execution"
          type="avatarImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="death by attack"
          type="avatarImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="death by fear"
          type="avatarImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
    test('<ResultCell image="image" status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          status="unnatural death"
          type="avatarImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
    })
  })
  describe('type="roleImage"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          caption="caption"
          image="image"
          status="alive"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          caption="caption"
          image="image"
          status="dead"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          caption="caption"
          image="image"
          status="death by execution"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          caption="caption"
          image="image"
          status="death by attack"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          caption="caption"
          image="image"
          status="death by fear"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          caption="caption"
          image="image"
          status="unnatural death"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.containsMatchingElement(<img src="image" />)).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--caption').text()).toBe('caption')
    })
  })
  test('type="caption"', () => {
    const wrapper = mountWithIntl(
      <ResultCell
        id="Result.summary.loser(villager, werehamster)"
        type="caption"
      />
    )

    expect(wrapper.find('.result--cell').exists()).toBe(true)
    expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
    expect(wrapper.find('.result--cell').text()).toBe('敗者（村人陣営，ハムスター人間陣営）')
  })
  test('type="summary"', () => {
    const wrapper = mountWithIntl(
      <ResultCell
        id="Result.summary.description(player, werewolf, villager, lose)"
        type="summary"
      />
    )

    expect(wrapper.find('.result--cell').exists()).toBe(true)
    expect(wrapper.find('.result--cell').hasClass('result--cell--summary')).toBe(true)
    expect(wrapper.find('.result--cell').text()).toBe('村人陣営のあなたは敗北しました。（人狼陣営の勝利）')
  })
  describe('type="name"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="alive"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('text')
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="dead"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by execution"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by attack"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by fear"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="unnatural death"
          text="text"
          type="name"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--name')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
  })
  describe('type="status"', () => {
    test('status="alive', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="alive"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('生存')
    })
    test('status="dead', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="dead"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('死亡')
    })
    test('status="death by execution', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by execution"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('処刑死')
    })
    test('status="death by attack', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by attack"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('襲撃死')
    })
    test('status="death by fear', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by fear"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('恐怖死')
    })
    test('status="unnatural death', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="unnatural death"
          type="status"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--status')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('不審死')
    })
  })
  describe('type="avatarName"', () => {
    test('status="alive"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="alive"
          text="text"
          type="avatarName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.text()).toBe('text')
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="dead"
          text="text"
          type="avatarName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by execution"
          text="text"
          type="avatarName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by attack"
          text="text"
          type="avatarName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="death by fear"
          text="text"
          type="avatarName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          status="unnatural death"
          text="text"
          type="avatarName"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--avatarName')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.text()).toBe('text')
    })
  })
})
