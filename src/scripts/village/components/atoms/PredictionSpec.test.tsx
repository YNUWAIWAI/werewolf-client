/* global village */
import * as React from 'react'
import PredictionSpec from './PredictionSpec'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<PredictionRole />', () => {
  test('visible={true}', () => {
    const wrapper = mountWithIntl(
      <PredictionSpec
        role={village.RoleId.villager}
        style={{}}
        visible
      />
    )

    expect(wrapper.isEmptyRender()).toBe(false)
  })
  test('visible={false}', () => {
    const wrapper = mountWithIntl(
      <PredictionSpec
        role={village.RoleId.villager}
        style={{}}
        visible={false}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
