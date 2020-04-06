import * as React from 'react'
import PredictionHelp from './PredictionHelp'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <PredictionHelp navigatable />
  )

  expect(wrapper.isEmptyRender()).toBe(false)
})
