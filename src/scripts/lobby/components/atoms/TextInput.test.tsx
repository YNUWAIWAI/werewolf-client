import * as React from 'react'
import TextInput from './TextInput'
import {shallow} from 'enzyme'

describe('<TextInput />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <TextInput
        className="lo--advanced-search--input"
        handleChange={handleChange}
        initialValue=""
        max={30}
        min={5}
        placeholder="5-30 chars"
        required
      />
    )

    expect(wrapper.find('input')).toHaveLength(1)
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
  test('onChange valid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <TextInput
        className="lo--advanced-search--input"
        handleChange={handleChange}
        initialValue=""
        max={30}
        min={5}
        placeholder="5-30 chars"
        required
      />
    )

    wrapper.find('input').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'valid text'
      }
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('valid text')
  })
  test('onChange invalid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <TextInput
        className="lo--advanced-search--input"
        handleChange={handleChange}
        initialValue=""
        max={30}
        min={5}
        placeholder="5-30 chars"
        required
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
  })
})
