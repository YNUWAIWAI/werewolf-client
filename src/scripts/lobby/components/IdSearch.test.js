// @flow
import IdSearch from './IdSearch'
import React from 'react'
import {shallow} from 'enzyme'

test('<IdSearch />', () => {
  const selectVillage = jest.fn()
  const transition = jest.fn()
  const wrapper = shallow(
    <IdSearch
      header="header"
      menuItems={[]}
      transition={transition}
    />
  )

  expect(wrapper.children()).toHaveLength(3)
  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(
    wrapper
      .find('MainContent')
      .find('IdSearchBox')
      .exists()
  ).toBe(true)
  expect(wrapper.find('AsideContent').exists()).toBe(true)
  expect(
    wrapper
      .find('AsideContent')
      .find('Menu')
      .exists()
  ).toBe(true)
  expect(selectVillage).toHaveBeenCalledTimes(0)
  expect(transition).toHaveBeenCalledTimes(0)
})
