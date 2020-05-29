import * as React from 'react'
import PasswordInput from './PasswordInput'
import {shallow} from 'enzyme'

test('render', () => {
  const handleChangeInner = jest.fn()
  const handleChange = jest.fn(() => handleChangeInner)
  const wrapper = shallow(
    <PasswordInput
      className="className"
      handleChange={handleChange}
      id="id"
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
  expect(handleChange).toHaveBeenCalledTimes(0)
})
describe('handleChange', () => {
  test('valid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <PasswordInput
        className="className"
        handleChange={handleChange}
        id="id"
        navigatable
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'userPassword'
      }
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('userPassword')
    expect(wrapper.find('input').props().value).toBe('userPassword')
  })
  test('invalid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <PasswordInput
        className="className"
        handleChange={handleChange}
        id="id"
        navigatable
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        validity: {
          valid: false
        },
        value: 'text'
      }
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(false)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('text')
    expect(wrapper.find('input').props().value).toBe('text')
  })
})
