// @flow
import IdSearchBox from './IdSearchBox'
import React from 'react'
import {shallow} from 'enzyme'

test('<IdSearchBox />', () => {
  const changeSearchId = jest.fn()
  const wrapper = shallow(<IdSearchBox changeSearchId={changeSearchId} numberOfDigit={3} placeholder="3 digits" />)

  expect(wrapper.children()).toHaveLength(3)
})
