import * as React from 'react'
import {TextareaInput} from './TextareaInput'
import {shallow} from 'enzyme'

describe('<TextareaInput />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <TextareaInput
        className="lo--advanced-search--input"
        handleChange={handleChange}
        initialValue=""
        max={100}
        min={0}
        navigatable
        placeholder="0-100 chars"
        required
        rows={3}
      />
    )

    expect(wrapper.find('textarea')).toHaveLength(1)
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
  test('onChange', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <TextareaInput
        className="lo--advanced-search--input"
        handleChange={handleChange}
        initialValue=""
        max={100}
        min={0}
        navigatable
        placeholder="0-100 chars"
        required
        rows={3}
      />
    )

    wrapper.find('textarea').simulate('change', {
      target: {
        validity: {
          valid: true
        },
        value: 'text'
      }
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('text')
  })
})
