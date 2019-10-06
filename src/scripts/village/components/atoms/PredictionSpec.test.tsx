import * as React from 'react'
import * as village from '../../types'
import PredictionSpec from './PredictionSpec'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

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
