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

      expect(wrapper.text()).toMatch('0日目 朝')
    })
    test('day', () => {
      const timer = {
        limit: 10,
        phase: 'day'
      }
      const wrapper = mountWithIntl(
        <Day
          date={1}
          phase="day"
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('1日目 昼')
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
