import * as React from 'react'
import NumberSelect from './NumberSelect'
import Select from 'react-select'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<NumberSelect />', () => {
  describe('render', () => {
    test('defaultValue: undefiend', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          from={4}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
    test('defaultValue: 0', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          defaultValue={0}
          from={4}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toStrictEqual({
        label: '0 players',
        value: 0
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
    test('defaultValue: 1', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          defaultValue={1}
          from={4}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toStrictEqual({
        label: '1 player',
        value: 1
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
  })
  describe('onChange', () => {
    test('to 4', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          from={4}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )
      const onChange = wrapper.find(Select).props().onChange

      if (onChange) {
        onChange(
          {
            label: 4,
            value: 4
          },
          {
            action: 'select-option'
          }
        )
      }
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(true)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith(4)
    })
    test('to 0', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          from={0}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )
      const onChange = wrapper.find(Select).props().onChange

      if (onChange) {
        onChange(
          {
            label: 0,
            value: 0
          },
          {
            action: 'select-option'
          }
        )
      }
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(true)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith(0)
    })
    test('to []', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          from={4}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )
      const onChange = wrapper.find(Select).props().onChange

      if (onChange) {
        onChange(
          [],
          {
            action: 'select-option'
          }
        )
      }

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(false)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith(-1)
    })
    test('to null', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          from={4}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )
      const onChange = wrapper.find(Select).props().onChange

      if (onChange) {
        onChange(
          null,
          {
            action: 'select-option'
          }
        )
      }
      expect(handleChange).toHaveBeenCalledTimes(0)
      expect(handleChangeInner).toHaveBeenCalledTimes(0)
    })
    test('to undefined', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <NumberSelect
          ascendingOrder
          className="lo--advanced-search--input"
          from={4}
          handleChange={handleChange}
          name="minimum"
          to={15}
          type="player"
        />
      )
      const onChange = wrapper.find(Select).props().onChange

      if (onChange) {
        onChange(
          undefined,
          {
            action: 'select-option'
          }
        )
      }

      expect(handleChange).toHaveBeenCalledTimes(0)
      expect(handleChangeInner).toHaveBeenCalledTimes(0)
    })
  })
})
