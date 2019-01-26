/* global lobby */
import * as React from 'react'
import NumberSelect from './NumberSelect'
import Select from 'react-select'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

describe('<NumberSelect />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <NumberSelect
        ascendingOrder
        className="advanced-search--input"
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
  test('onChange valid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <NumberSelect
        ascendingOrder
        className="advanced-search--input"
        from={4}
        handleChange={handleChange}
        name="minimum"
        to={15}
        type="player"
      />
    )

    wrapper.find(Select).props().onChange({
      label: 4,
      value: 4
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith(4)
  })
  test('onChange valid 0', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <NumberSelect
        ascendingOrder
        className="advanced-search--input"
        from={0}
        handleChange={handleChange}
        name="minimum"
        to={15}
        type="player"
      />
    )

    wrapper.find(Select).props().onChange({
      label: 0,
      value: 0
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith(0)
  })
  test('onChange invalid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <NumberSelect
        ascendingOrder
        className="advanced-search--input"
        from={4}
        handleChange={handleChange}
        name="minimum"
        to={15}
        type="player"
      />
    )

    wrapper.find(Select).props().onChange([])
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(false)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith(-1)
  })
})
