import * as React from 'react'
import {AdvancedSearchProp} from './AdvancedSearchProp'
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

  expect(wrapper.html()).toMatchSnapshot()
})
describe('handleClick', () => {
  test('valid === true && checkboxFixed === true', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <AdvancedSearchProp
        checkboxFixed
        checked
        handleChange={handleChange}
        name="villageName"
        navigatable
        valid
      />
    )

    wrapper.find('.lo--advanced-search--prop').simulate('click')
    expect(handleChange).not.toHaveBeenCalled()
  })
  test('valid === false && checkboxFixed === true', () => {
    const handleChange = jest.fn()
    const wrapper = mountWithIntl(
      <AdvancedSearchProp
        checkboxFixed
        checked
        handleChange={handleChange}
        name="villageName"
        navigatable
        valid={false}
      />
    )

    wrapper.find('.lo--advanced-search--prop').simulate('click')
    expect(handleChange).not.toHaveBeenCalled()
  })
  test('valid === true && checkboxFixed === false', () => {
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

    wrapper.find('.lo--advanced-search--prop').simulate('click')
    expect(handleChange).toHaveBeenCalledWith(false)
  })
  test('valid === false && checkboxFixed === false', () => {
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

    wrapper.find('.lo--advanced-search--prop').simulate('click')
    expect(handleChange).not.toHaveBeenCalled()
  })
})
