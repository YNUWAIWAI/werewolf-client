// @flow
import IdSearchContainer from './IdSearchContainer'
import React from 'react'
import {initialState} from '../reducers/idSearch'
import {shallow} from 'enzyme'

describe('<IdSearchContainer />', () => {
  test('initialState', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      idSearch: initialState
    })
    const subscribe = jest.fn()
    const store = {
      dispatch,
      getState,
      subscribe
    }
    const wrapper = shallow(<IdSearchContainer store={store} transition={jest.fn()} />)

    expect(wrapper.props().header).toBe('')
    expect(wrapper.props().id).toBe(-1)
    expect(wrapper.props().image).toBe('')
    expect(wrapper.props().isPlayer).toBe(true)
    expect(wrapper.props().menuItems).toEqual([])
    expect(wrapper.props().name).toBe('')
    expect(wrapper.props().villageItems).toEqual([])
  })
})
