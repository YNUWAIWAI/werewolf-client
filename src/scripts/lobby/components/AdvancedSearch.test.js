// @flow
import AdvancedSearch from './AdvancedSearch'
import React from 'react'
import {shallow} from 'enzyme'

test('<AdvancedSearch />', () => {
  const selectVillage = jest.fn()
  const transition = jest.fn()
  const wrapper = shallow(
    <AdvancedSearch
      header="header"
      image="image"
      menuItems={[]}
      name="name"
      transition={transition}
    />
  )

  expect(wrapper.children()).toHaveLength(4)
  expect(wrapper.find('Header').exists()).toBe(true)
  expect(wrapper.find('MainContent').exists()).toBe(true)
  expect(
    wrapper
      .find('MainContent')
      .find('AdvancedSearchBox')
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
