// @flow
import AdvancedSearchBox from './AdvancedSearchBox'
import React from 'react'
import {shallow} from 'enzyme'

test('<AdvancedSearchBox />', () => {
  const wrapper = shallow(<AdvancedSearchBox text="text" />)
})
