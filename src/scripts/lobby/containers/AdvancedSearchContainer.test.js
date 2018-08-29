// @flow
import AdvancedSearchContainer from './AdvancedSearchContainer'
import React from 'react'
import {initialState} from '../reducers/advancedSearch'
import {shallow} from 'enzyme'

describe('<AdvancedSearchContainer />', () => {
  test('initialState', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      advancedSearch: initialState
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<AdvancedSearchContainer store={store} transition={jest.fn()} />)

    expect(wrapper.props().checked).toEqual({
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    })
    expect(wrapper.props().header).toBe('')
    expect(wrapper.props().image).toBe('')
    expect(wrapper.props().isPlayer).toBe(true)
    expect(wrapper.props().menuItems).toEqual([])
    expect(wrapper.props().name).toBe('')
    expect(wrapper.props().validity).toEqual({
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    })
    expect(wrapper.props().villageItems).toEqual([])
  })
})
