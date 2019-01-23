import * as React from 'react'
import InfoDay from './InfoDay'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<Day />', () => {
  describe('phase', () => {
    test('morning', () => {
      const wrapper = mountWithIntl(
        <InfoDay
          date={0}
          phase={village.Phase.morning}
        />
      )

      expect(wrapper.text()).toMatch('0日目 朝')
    })
    test('day', () => {
      const wrapper = mountWithIntl(
        <InfoDay
          date={1}
          phase={village.Phase.day}
        />
      )

      expect(wrapper.text()).toMatch('1日目 昼')
    })
    test('night', () => {
      const wrapper = mountWithIntl(
        <InfoDay
          date={1}
          phase={village.Phase.night}
        />
      )

      expect(wrapper.text()).toMatch('1日目 夜')
    })
    test('post mortem', () => {
      const wrapper = mountWithIntl(
        <InfoDay
          date={-1}
          phase={village.Phase.postMortem}
        />
      )

      expect(wrapper.text()).toMatch('感想戦')
    })
    test('result', () => {
      const wrapper = mountWithIntl(
        <InfoDay
          date={-1}
          phase={village.Phase.result}
        />
      )

      expect(wrapper.text()).toMatch('結果')
    })
    test('flavor text', () => {
      const wrapper = mountWithIntl(
        <InfoDay
          date={1}
          phase={village.Phase.flavorText}
        />
      )

      expect(wrapper.text()).toMatch('1日目 夜')
    })
  })
})
