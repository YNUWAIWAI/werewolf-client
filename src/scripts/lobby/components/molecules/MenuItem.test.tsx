/* global lobby */
import * as React from 'react'
import MenuItem from './MenuItem'
import {Target} from '../../constants/ActionTypes'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

describe('<MenuItem />', () => {
  test('default', () => {
    const transition = jest.fn()
    const wrapper = mountWithIntl(
      <MenuItem
        className="className"
        id="Menu.returnToMainPage"
        transition={transition}
        types={[Target.SHOW_MAIN]}
      />
    )

    expect(wrapper.text()).toBe('Return to the Main Page')
    expect(wrapper.find('li.className').exists()).toBe(true)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('disabled', () => {
    const transition = jest.fn()
    const wrapper = mountWithIntl(
      <MenuItem
        className="className"
        disabled
        id="Menu.returnToMainPage"
        transition={transition}
        types={[Target.SHOW_MAIN]}
      />
    )

    expect(wrapper.text()).toBe('Return to the Main Page')
    expect(wrapper.find('li.className').hasClass('disabled')).toBe(true)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('isLoading', () => {
    const transition = jest.fn()
    const wrapper = mountWithIntl(
      <MenuItem
        className="className"
        id="Menu.returnToMainPage"
        isLoading
        transition={transition}
        types={[Target.SHOW_MAIN]}
      />
    )

    expect(wrapper.text()).toBe('')
    expect(wrapper.find('li.className').hasClass('loader')).toBe(true)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('onClick: default', () => {
    const transition = jest.fn()
    const wrapper = mountWithIntl(
      <MenuItem
        className="className"
        id="Menu.returnToMainPage"
        transition={transition}
        types={[Target.SHOW_MAIN]}
      />
    )

    wrapper.simulate('click')
    expect(transition).toHaveBeenCalledTimes(1)
    expect(transition).toHaveBeenCalledWith('SHOW_MAIN')
  })
  test('onClick: disabled', () => {
    const transition = jest.fn()
    const wrapper = mountWithIntl(
      <MenuItem
        className="className"
        disabled
        id="Menu.returnToMainPage"
        transition={transition}
        types={[Target.SHOW_MAIN]}
      />
    )

    wrapper.simulate('click')
    expect(transition).toHaveBeenCalledTimes(0)
  })
})
