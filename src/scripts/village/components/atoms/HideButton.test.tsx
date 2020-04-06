import * as React from 'react'
import HideButton from './HideButton'
import {shallow} from 'enzyme'

describe('<HideButton />', () => {
  test('hide', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(
      <HideButton
        handleClick={handleClick}
        hide
        navigatable
      />
    )

    expect(wrapper.find('.vi--hide-button--button').hasClass('hide')).toBe(true)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  test('hide={false}', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(
      <HideButton
        handleClick={handleClick}
        hide={false}
        navigatable
      />
    )

    expect(wrapper.find('.vi--hide-button--button').hasClass('hide')).toBe(false)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })
  describe('onCLick', () => {
    test('hide', () => {
      const handleClick = jest.fn()
      const wrapper = shallow(
        <HideButton
          handleClick={handleClick}
          hide
          navigatable
        />
      )

      wrapper.find('.vi--hide-button--button').simulate('click')
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(handleClick).toHaveBeenCalledWith(false)
    })
    test('hide={false}', () => {
      const handleClick = jest.fn()
      const wrapper = shallow(
        <HideButton
          handleClick={handleClick}
          hide={false}
          navigatable
        />
      )

      wrapper.find('.vi--hide-button--button').simulate('click')
      expect(handleClick).toHaveBeenCalledTimes(1)
      expect(handleClick).toHaveBeenCalledWith(true)
    })
  })
})
