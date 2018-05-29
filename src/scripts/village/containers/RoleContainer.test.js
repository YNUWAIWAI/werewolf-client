// @flow
import React from 'react'
import RoleContainer from './RoleContainer'
import {shallow} from 'enzyme'

test('<RoleContainer /> initialState', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    agents: {},
    language: 'ja',
    roles: {}
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<RoleContainer store={store} />)

  expect(wrapper.props().image).toBe('')
  expect(wrapper.props().name).toBe('')
  expect(wrapper.props().role).toBe('')
})
test('<RoleContainer />', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    agents: {
      mine: {
        image: 'image',
        name: {
          en: 'name',
          ja: 'なまえ'
        }
      }
    },
    language: 'ja',
    roles: {
      mine: {
        name: {
          en: 'name',
          ja: 'なまえ'
        }
      }
    }
  })
  const subscribe = jest.fn()
  const store = {
    dispatch,
    getState,
    subscribe
  }
  const wrapper = shallow(<RoleContainer store={store} />)

  expect(wrapper.props().image).toBe('image')
  expect(wrapper.props().name).toBe('なまえ')
  expect(wrapper.props().role).toBe('なまえ')
})
