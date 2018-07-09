// @flow
import BuildVillageContainer from './BuildVillageContainer'
import React from 'react'
import {initialState} from '../reducers/buildVillage'
import {shallow} from 'enzyme'

test('<BuildVillageContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    buildVillage: initialState
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<BuildVillageContainer store={store} transition={jest.fn()} />)

  expect(wrapper.props().menuItems).toEqual([])
  expect(wrapper.props().village).toEqual({
    comment: '',
    hostName: 'Alice',
    numberOfHumans: 14,
    numberOfPlayers: 15,
    numberOfRobots: 1,
    villageName: 'Alice\'s village'
  })
})
