import * as React from 'react'
import * as lobby from '../../types'
import AdvancedSearchProp from './AdvancedSearchProp'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChange = jest.fn()
  const wrapper = mountWithIntl(
    <AdvancedSearchProp
      checked
      handleChange={handleChange}
      name="villageName"
      valid
    />
  )

  expect(wrapper.find('input').exists()).toBe(true)
  expect(wrapper.find('label').exists()).toBe(true)
})
describe('onChange', () => {
  test('valid', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <AdvancedSearchProp
        checked
        handleChange={handleChange}
        name="villageName"
        valid
      />
    )

    wrapper.find('input').simulate('change')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(false)
  })
  test('invalid', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <AdvancedSearchProp
        checked
        handleChange={handleChange}
        name="villageName"
        valid={false}
      />
    )

    wrapper.find('input').simulate('change')
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
})
