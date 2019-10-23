import * as React from 'react'
import MenuItem from './MenuItem'
import {Target} from '../../constants/ActionTypes'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<MenuItem />', () => {
  describe('render', () => {
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

      expect(wrapper.text()).toBe('Return to the main page')
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

      expect(wrapper.text()).toBe('Return to the main page')
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
  })
  describe('onClick', () => {
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

      wrapper.simulate('click')
      expect(transition).toHaveBeenCalledTimes(1)
      expect(transition).toHaveBeenCalledWith('SHOW_MAIN')
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

      wrapper.simulate('click')
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

      wrapper.simulate('click')
      expect(transition).toHaveBeenCalledTimes(0)
    })
  })
})
