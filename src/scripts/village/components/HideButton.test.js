// @flow
import HideButton from './HideButton'
import React from 'react'
import {shallow} from 'enzyme'

test('<HideButton hide />', () => {
  const handleClickEventHandler = jest.fn()
  const handleClick = jest.fn().mockReturnValueOnce(handleClickEventHandler)
  const wrapper = shallow(<HideButton handleClick={handleClick} hide />)

  expect(wrapper.find('.hide-button').hasClass('hide')).toBe(true)
  expect(wrapper.find('.hide-button--icon').hasClass('hide')).toBe(true)
  expect(handleClickEventHandler).toHaveBeenCalledTimes(0)
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClick).toHaveBeenCalledWith(false)
})
test('<HideButton hide={false} />', () => {
  const handleClickEventHandler = jest.fn()
  const handleClick = jest.fn().mockReturnValueOnce(handleClickEventHandler)
  const wrapper = shallow(<HideButton handleClick={handleClick} hide={false} />)

  expect(wrapper.find('.hide-button').hasClass('hide')).toBe(false)
  expect(wrapper.find('.hide-button--icon').hasClass('hide')).toBe(false)
  expect(handleClickEventHandler).toHaveBeenCalledTimes(0)
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClick).toHaveBeenCalledWith(true)
})
test('<HideButton hide /> onClick', () => {
  const handleClickEventHandler = jest.fn()
  const handleClick = jest.fn().mockReturnValueOnce(handleClickEventHandler)
  const wrapper = shallow(<HideButton handleClick={handleClick} hide />)

  wrapper.simulate('click')
  expect(handleClickEventHandler).toHaveBeenCalledTimes(1)
})
test('<HideButton hide={false} /> onClick', () => {
  const handleClickEventHandler = jest.fn()
  const handleClick = jest.fn().mockReturnValueOnce(handleClickEventHandler)
  const wrapper = shallow(<HideButton handleClick={handleClick} hide={false} />)

  wrapper.simulate('click')
  expect(handleClickEventHandler).toHaveBeenCalledTimes(1)
})
