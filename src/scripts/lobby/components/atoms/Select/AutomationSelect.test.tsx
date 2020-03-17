import * as React from 'react'
import AutomationSelect from './AutomationSelect'
import Select from 'react-select'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChangeInner = jest.fn()
  const handleChange = jest.fn(() => handleChangeInner)
  const wrapper = mountWithIntl(
    <AutomationSelect
      className="className"
      defaultValue={lobby.Automation.full}
      handleChange={handleChange}
    />
  )

  expect(wrapper.find(Select)).toHaveLength(1)
  expect(handleChangeInner).toHaveBeenCalledTimes(0)
  expect(handleChange).toHaveBeenCalledTimes(0)
})
describe('onChange', () => {
  test('valid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <AutomationSelect
        className="className"
        defaultValue={lobby.Automation.full}
        handleChange={handleChange}
      />
    )
    const onChange = wrapper.find(Select).props().onChange

    onChange(
      {
        label: 'Fully-automated',
        value: lobby.Automation.full
      },
      {
        action: 'select-option'
      }
    )
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith(lobby.Automation.full)
  })
  test('[]', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <AutomationSelect
        className="className"
        defaultValue={lobby.Automation.full}
        handleChange={handleChange}
      />
    )
    const onChange = wrapper.find(Select).props().onChange

    onChange(
      [],
      {
        action: 'select-option'
      }
    )
    expect(handleChange).toHaveBeenCalledTimes(0)
    expect(handleChangeInner).toHaveBeenCalledTimes(0)
  })
  test('null', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <AutomationSelect
        className="className"
        defaultValue={lobby.Automation.full}
        handleChange={handleChange}
      />
    )
    const onChange = wrapper.find(Select).props().onChange

    onChange(
      null,
      {
        action: 'select-option'
      }
    )
    expect(handleChange).toHaveBeenCalledTimes(0)
    expect(handleChangeInner).toHaveBeenCalledTimes(0)
  })
  test('undefined', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = mountWithIntl(
      <AutomationSelect
        className="className"
        defaultValue={lobby.Automation.full}
        handleChange={handleChange}
      />
    )
    const onChange = wrapper.find(Select).props().onChange

    onChange(
      undefined,
      {
        action: 'select-option'
      }
    )
    expect(handleChange).toHaveBeenCalledTimes(0)
    expect(handleChangeInner).toHaveBeenCalledTimes(0)
  })
})
