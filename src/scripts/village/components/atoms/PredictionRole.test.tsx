import * as React from 'react'
import PredictionRole from './PredictionRole'
import {shallow} from 'enzyme'

describe('<PredictionRole />', () => {
  test('render', () => {
    const handleMouseEnter = jest.fn()
    const handleMouseLeave = jest.fn()
    const wrapper = shallow(
      <PredictionRole
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        image="image"
        name="name"
        numberOfPlayers={1}
      />
    )

    expect(wrapper.find('.vi--prediction--role').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--image').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--times').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--number').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--number').text()).toBe('1')
    expect(wrapper.find('.vi--prediction--role--name').exists()).toBe(true)
    expect(wrapper.find('.vi--prediction--role--name').text()).toBe('name')
    expect(handleMouseEnter).toHaveBeenCalledTimes(0)
    expect(handleMouseLeave).toHaveBeenCalledTimes(0)
  })
  describe('handleMouseEnter', () => {
    test('window.innerWidth - rect.right > 0', () => {
      const handleMouseEnter = jest.fn()
      const handleMouseLeave = jest.fn()
      const wrapper = shallow(
        <PredictionRole
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          image="image"
          name="name"
          numberOfPlayers={1}
        />
      )
      const getBoundingClientRect = jest.fn(() => ({
        height: 50,
        left: 50,
        right: window.innerWidth + 10,
        top: 50
      }))

      wrapper.find('.vi--prediction--role').simulate('mouseEnter', {
        currentTarget: {
          getBoundingClientRect
        }
      })
      expect(handleMouseEnter).toHaveBeenCalledTimes(0)
      expect(handleMouseLeave).toHaveBeenCalledTimes(0)
    })
    test('window.innerWidth - rect.right < 0', () => {
      const handleMouseEnter = jest.fn()
      const handleMouseLeave = jest.fn()
      const wrapper = shallow(
        <PredictionRole
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          image="image"
          name="name"
          numberOfPlayers={1}
        />
      )
      const getBoundingClientRect = jest.fn(() => ({
        height: 50,
        left: 50,
        right: 100,
        top: 50
      }))

      wrapper.find('.vi--prediction--role').simulate('mouseEnter', {
        currentTarget: {
          getBoundingClientRect
        }
      })
      expect(handleMouseEnter).toHaveBeenCalledTimes(1)
      expect(handleMouseEnter).toHaveBeenCalledWith({
        left: 75,
        top: 100
      })
      expect(handleMouseLeave).toHaveBeenCalledTimes(0)
    })
  })
  test('handleMouseLeave', () => {
    const handleMouseEnter = jest.fn()
    const handleMouseLeave = jest.fn()
    const wrapper = shallow(
      <PredictionRole
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        image="image"
        name="name"
        numberOfPlayers={1}
      />
    )

    wrapper.find('.vi--prediction--role').simulate('mouseLeave')
    expect(handleMouseEnter).toHaveBeenCalledTimes(0)
    expect(handleMouseLeave).toHaveBeenCalledTimes(1)
  })
})
