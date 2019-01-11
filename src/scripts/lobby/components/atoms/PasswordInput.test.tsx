import * as React from 'react'
import PasswordInput, {Props, State} from './PasswordInput'
import {shallow} from 'enzyme'

describe('<PasswordInput />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow<Props, State>(
      <PasswordInput
        className="className"
        handleChange={handleChange}
        id="id"
      />
    )

    expect(wrapper.find('input')).toHaveLength(1)
    expect(wrapper.state().value).toBe('')
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
  test('onChange valid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow<Props, State>(
      <PasswordInput
        className="className"
        handleChange={handleChange}
        id="id"
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
    expect(wrapper.state().value).toBe('userPassword')
  })
  test('onChange invalid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow<Props, State>(
      <PasswordInput
        className="className"
        handleChange={handleChange}
        id="id"
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
    expect(wrapper.state().value).toBe('text')
  })
})
