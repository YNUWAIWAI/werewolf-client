import * as React from 'react'
import AdvancedSearchProp from './AdvancedSearchProp'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChange = jest.fn()
  const wrapper = mountWithIntl(
    <AdvancedSearchProp
      checked
      handleChange={handleChange}
      name="villageName"
      navigatable
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
        navigatable
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
        navigatable
        valid={false}
      />
    )

    wrapper.find('input').simulate('change')
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
})
