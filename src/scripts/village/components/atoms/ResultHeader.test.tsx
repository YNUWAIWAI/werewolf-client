import * as React from 'react'
import ResultHeader from './ResultHeader'
import {shallow} from 'enzyme'

test('ResultHeader', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(
    <ResultHeader
      handleClick={handleClick}
    />
  )

  expect(handleClick).toHaveBeenCalledTimes(0)
  expect(wrapper.exists()).toBe(true)
})
