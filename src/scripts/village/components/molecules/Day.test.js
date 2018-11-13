// @flow
import Day from './Day'
import React from 'react'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

describe('<Day />', () => {
  describe('phase', () => {
    test('morning', () => {
      const timer = {
        limit: 10,
        phase: 'morning'
      }
      const wrapper = mountWithIntl(
        <Day
          date={0}
          phase="morning"
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('0日目 昼')
    })
    test('day vote', () => {
      const timer = {
        limit: 10,
        phase: 'day vote'
      }
      const wrapper = mountWithIntl(
        <Day
          date={1}
          phase="day vote"
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('1日目 投票')
    })
    test('night', () => {
      const timer = {
        limit: 10,
        phase: 'night'
      }
      const wrapper = mountWithIntl(
        <Day
          date={1}
          phase="night"
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('1日目 夜')
    })
    test('post mortem', () => {
      const timer = {
        limit: 10,
        phase: 'post mortem'
      }
      const wrapper = mountWithIntl(
        <Day
          date={-1}
          phase="post mortem"
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('感想戦')
    })
    test('result', () => {
      const timer = {
        limit: 10,
        phase: 'result'
      }
      const wrapper = mountWithIntl(
        <Day
          date={-1}
          phase="result"
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('結果')
    })
  })
})
