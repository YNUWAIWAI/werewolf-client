import * as React from 'react'
import Mute from './svg/Mute'
import MuteButton from './MuteButton'
import Unmute from './svg/Unmute'
import {shallow} from 'enzyme'

describe('render', () => {
  test('muted', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(
      <MuteButton
        handleClick={handleClick}
        muted
      />
    )

    expect(wrapper.find(Mute).exists()).toBe(true)
  })
  test('unmuted', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(
      <MuteButton
        handleClick={handleClick}
        muted={false}
      />
    )

    expect(wrapper.find(Unmute).exists()).toBe(true)
  })
})
test('handleClick', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(
    <MuteButton
      handleClick={handleClick}
      muted
    />
  )

  wrapper.find('.lo--mute-button').simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClick).toHaveBeenCalledWith(false)
})
