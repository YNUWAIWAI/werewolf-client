import * as React from 'react'
import InfoDay from './InfoDay'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<Day />', () => {
  describe('phase', () => {
    test('morning', () => {
      const timer = {
        limit: 10,
        phase: village.Phase.morning
      }
      const wrapper = mountWithIntl(
        <InfoDay
          date={0}
          phase={village.Phase.morning}
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('0日目 朝')
    })
    test('day', () => {
      const timer = {
        limit: 10,
        phase: village.Phase.day
      }
      const wrapper = mountWithIntl(
        <InfoDay
          date={1}
          phase={village.Phase.day}
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('1日目 昼')
    })
    test('night', () => {
      const timer = {
        limit: 10,
        phase: village.Phase.night
      }
      const wrapper = mountWithIntl(
        <InfoDay
          date={1}
          phase={village.Phase.night}
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('1日目 夜')
    })
    test('post mortem', () => {
      const timer = {
        limit: 10,
        phase: village.Phase.postMortem
      }
      const wrapper = mountWithIntl(
        <InfoDay
          date={-1}
          phase={village.Phase.postMortem}
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('感想戦')
    })
    test('result', () => {
      const timer = {
        limit: 10,
        phase: village.Phase.result
      }
      const wrapper = mountWithIntl(
        <InfoDay
          date={-1}
          phase={village.Phase.result}
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('結果')
    })
    test('flavor text', () => {
      const timer = {
        limit: 10,
        phase: village.Phase.flavorText
      }
      const wrapper = mountWithIntl(
        <InfoDay
          date={1}
          phase={village.Phase.flavorText}
          timer={timer}
        />
      )

      expect(wrapper.text()).toMatch('1日目 夜')
    })
  })
})
