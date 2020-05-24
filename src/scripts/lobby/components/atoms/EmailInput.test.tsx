import * as React from 'react'
import {EmailInput} from './EmailInput'
import {shallow} from 'enzyme'

test('render', () => {
  const handleChangeInner = jest.fn()
  const handleChange = jest.fn(() => handleChangeInner)
  const wrapper = shallow(
    <EmailInput
      className="className"
      handleChange={handleChange}
      id="id"
      initialValue="example@example.com"
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
  expect(handleChange).toHaveBeenCalledTimes(0)
})
describe('onChange', () => {
  test('valid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <EmailInput
        className="className"
        handleChange={handleChange}
        id="id"
        initialValue="example@example.com"
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'example@example.co.jp'
      }
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('example@example.co.jp')
    expect(wrapper.find('input').props().value).toBe('example@example.co.jp')
  })
  test('invalid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <EmailInput
        className="className"
        handleChange={handleChange}
        id="id"
        initialValue="example@example.com"
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
