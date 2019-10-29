import * as React from 'react'
import InfoDay from './InfoDay'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const store = fakeStore()
const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<Day />', () => {
  describe('phase', () => {
    test('morning', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            day={0}
            phase={village.Phase.morning}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('Day 0: morning')
    })
    test('noon', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            day={1}
            phase={village.Phase.noon}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('Day 1: noon')
    })
    test('night', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            day={1}
            phase={village.Phase.night}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('Day 1: night')
    })
    test('post mortem', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            day={-1}
            phase={village.Phase.postMortem}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('Post-mortem discussion')
    })
    test('result', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            day={-1}
            phase={village.Phase.result}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('Result')
    })
    test('flavor text', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <InfoDay
            day={1}
            phase={village.Phase.flavorText}
          />
        </Provider>
      )

      expect(wrapper.text()).toMatch('Day 1: night')
    })
  })
})
