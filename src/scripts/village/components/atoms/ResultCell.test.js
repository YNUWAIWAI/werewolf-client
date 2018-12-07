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
          image="image"
          name="name"
          status="alive"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(false)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="dead"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status="dead"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="death by execution"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status="death by execution"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="death by attack"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status="death by attack"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="death by fear"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status="death by fear"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
    test('status="unnatural death"', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          image="image"
          name="name"
          status="unnatural death"
          type="roleImage"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--roleImage')).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('dead')).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--image').exists()).toBe(true)
      expect(wrapper.find('.result--cell--roleImage--name').text()).toBe('name')
    })
  })
  describe('type="caption"', () => {
    test('loser(1)', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.loser(1)"
          loserTeam={new Set(['villager'])}
          type="caption"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
      expect(wrapper.find('.result--cell--caption--team')).toHaveLength(1)
      expect(wrapper.find('.result--cell').text()).toBe('敗者（村人陣営）')
    })
    test('loser(2)', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.loser(2)"
          loserTeam={new Set(['villager', 'werehamster'])}
          type="caption"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
      expect(wrapper.find('.result--cell--caption--team')).toHaveLength(2)
      expect(wrapper.find('.result--cell').text()).toBe('敗者（村人陣営，ハムスター人間陣営）')
    })
    test('winner', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.winner"
          type="caption"
          winnerTeam="villager"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--caption')).toBe(true)
      expect(wrapper.find('.result--cell--caption--team')).toHaveLength(1)
      expect(wrapper.find('.result--cell').text()).toBe('勝者（村人陣営）')
    })
  })
  describe('type="summary"', () => {
    test('audience', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.description(audience)"
          myTeam=""
          type="summary"
          winnerTeam="werewolf"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--summary')).toBe(true)
      expect(wrapper.find('.result--cell--summary--team')).toHaveLength(1)
      expect(wrapper.find('.result--cell').text()).toBe('人狼陣営が勝利しました')
    })
    test('player', () => {
      const wrapper = mountWithIntl(
        <ResultCell
          id="Result.summary.description(player, lose)"
          myTeam="villager"
          type="summary"
          winnerTeam="werewolf"
        />
      )

      expect(wrapper.find('.result--cell').exists()).toBe(true)
      expect(wrapper.find('.result--cell').hasClass('result--cell--summary')).toBe(true)
      expect(wrapper.find('.result--cell--summary--team')).toHaveLength(2)
      expect(wrapper.find('.result--cell').text()).toBe('村人陣営のあなたは敗北しました。（人狼陣営の勝利）')
    })
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
