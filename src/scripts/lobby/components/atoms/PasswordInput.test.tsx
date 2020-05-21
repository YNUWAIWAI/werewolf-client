import * as React from 'react'
import PasswordInput from './PasswordInput'
import {shallow} from 'enzyme'

describe('<PasswordInput />', () => {
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

    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.find('input').props().value).toBe('')
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
  test('onChange valid', () => {
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
  test('onChange invalid', () => {
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
