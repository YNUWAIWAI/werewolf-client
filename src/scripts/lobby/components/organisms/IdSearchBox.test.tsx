import * as React from 'react'
import * as lobby from '../../types'
import IdSearchBox from './IdSearchBox'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<IdSearchBox />', () => {
  test('render', () => {
    const handleSearchIdChange = jest.fn()
    const handleValidityChange = jest.fn()
    const wrapper = mountWithIntl(
      <IdSearchBox
        handleSearchIdChange={handleSearchIdChange}
        handleValidityChange={handleValidityChange}
        max={3}
      />
    )

    expect(wrapper.find('.lo--id-search').children()).toHaveLength(3)
    expect(handleSearchIdChange).toHaveBeenCalledTimes(0)
    expect(handleValidityChange).toHaveBeenCalledTimes(0)
  })
  describe('handleIdChange', () => {
    test('valid', () => {
      const handleSearchIdChange = jest.fn()
      const handleValidityChange = jest.fn()
      const wrapper = mountWithIntl(
        <IdSearchBox
          handleSearchIdChange={handleSearchIdChange}
          handleValidityChange={handleValidityChange}
          max={3}
        />
      )

      wrapper.find('.lo--id-search--input').simulate('change', {
        target: {
          validity: {
            valid: true
          },
          value: '3'
        }
      })
      expect(handleSearchIdChange).toHaveBeenCalledTimes(1)
      expect(handleSearchIdChange).toHaveBeenCalledWith(3)
      expect(handleValidityChange).toHaveBeenCalledTimes(1)
      expect(handleValidityChange).toHaveBeenCalledWith(true)
    })
    test('invalid', () => {
      const handleSearchIdChange = jest.fn()
      const handleValidityChange = jest.fn()
      const wrapper = mountWithIntl(
        <IdSearchBox
          handleSearchIdChange={handleSearchIdChange}
          handleValidityChange={handleValidityChange}
          max={3}
        />
      )

      wrapper.find('.lo--id-search--input').simulate('change', {
        target: {
          validity: {
            valid: false
          },
          value: '3x'
        }
      })
      expect(handleSearchIdChange).toHaveBeenCalledTimes(0)
      expect(handleValidityChange).toHaveBeenCalledTimes(1)
      expect(handleValidityChange).toHaveBeenCalledWith(false)
    })
  })
})
