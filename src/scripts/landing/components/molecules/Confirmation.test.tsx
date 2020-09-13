import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {Confirmation} from './Confirmation'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const handlePrivacyCheckChange = jest.fn()
  const handleTermsCheckChange = jest.fn()
  const wrapper = mountWithIntl(
    <Confirmation
      handlePrivacyCheckChange={handlePrivacyCheckChange}
      handleTermsCheckChange={handleTermsCheckChange}
      privacyIsChecked={false}
      termsIsChecked={false}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
describe('handlePrivacyCheckChange', () => {
  test('click checkbox', () => {
    const handlePrivacyCheckChange = jest.fn()
    const handleTermsCheckChange = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handlePrivacyCheckChange={handlePrivacyCheckChange}
        handleTermsCheckChange={handleTermsCheckChange}
        privacyIsChecked={false}
        termsIsChecked={false}
      />
    )

    wrapper.find('span.la--checkbox').at(0).simulate('click')
    expect(handlePrivacyCheckChange).toHaveBeenCalled()
  })
  test('click anchor', () => {
    const handlePrivacyCheckChange = jest.fn()
    const handleTermsCheckChange = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handlePrivacyCheckChange={handlePrivacyCheckChange}
        handleTermsCheckChange={handleTermsCheckChange}
        privacyIsChecked={false}
        termsIsChecked={false}
      />
    )

    wrapper.find('a.la--form--link').at(0).simulate('click')
    expect(handlePrivacyCheckChange).toHaveBeenCalled()
  })
})
describe('handleTermsCheckChange', () => {
  test('click checkbox', () => {
    const handlePrivacyCheckChange = jest.fn()
    const handleTermsCheckChange = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handlePrivacyCheckChange={handlePrivacyCheckChange}
        handleTermsCheckChange={handleTermsCheckChange}
        privacyIsChecked={false}
        termsIsChecked={false}
      />
    )

    wrapper.find('span.la--checkbox').at(1).simulate('click')
    expect(handleTermsCheckChange).toHaveBeenCalled()
  })
  test('click anchor', () => {
    const handlePrivacyCheckChange = jest.fn()
    const handleTermsCheckChange = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handlePrivacyCheckChange={handlePrivacyCheckChange}
        handleTermsCheckChange={handleTermsCheckChange}
        privacyIsChecked={false}
        termsIsChecked={false}
      />
    )

    wrapper.find('a.la--form--link').at(1).simulate('click')
    expect(handleTermsCheckChange).toHaveBeenCalled()
  })
})
