// @flow
import IdSearchBox from './IdSearchBox'
import React from 'react'
import {shallow} from 'enzyme'

test('<IdSearchBox />', () => {
  const wrapper = shallow(<IdSearchBox text="text" />)
})
