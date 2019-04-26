/* global village */
import * as React from 'react'
import PredictionSpec from './PredictionSpec'
import {shallow} from 'enzyme'

describe('<PredictionRole />', () => {
  test('visible={true}', () => {
    const wrapper = shallow(
      <PredictionSpec
        role={village.RoleId.villager}
        style={{}}
        visible
      />
    )

    expect(wrapper.isEmptyRender()).toBe(false)
  })
  test('visible={false}', () => {
    const wrapper = shallow(
      <PredictionSpec
        role={village.RoleId.villager}
        style={{}}
        visible={false}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
