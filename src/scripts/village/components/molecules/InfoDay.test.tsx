/* global village */
import * as React from 'react'
import InfoDay from './InfoDay'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const store = fakeStore()
const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<Day />', () => {
  describe('phase', () => {
    test('morning', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            date={0}
            phase={village.Phase.morning}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('0日目 朝')
    })
    test('day', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            date={1}
            phase={village.Phase.day}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('1日目 昼')
    })
    test('night', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            date={1}
            phase={village.Phase.night}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('1日目 夜')
    })
    test('post mortem', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            date={-1}
            phase={village.Phase.postMortem}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('感想戦')
    })
    test('result', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            date={-1}
            phase={village.Phase.result}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('結果')
    })
    test('flavor text', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            date={1}
            phase={village.Phase.flavorText}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('1日目 夜')
    })
  })
})
