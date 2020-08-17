import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {Confirmation} from './Confirmation'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const handleChangePrivacyCheck = jest.fn()
  const handleChangeTermsCheck = jest.fn()
  const wrapper = mountWithIntl(
    <Confirmation
      handleChangePrivacyCheck={handleChangePrivacyCheck}
      handleChangeTermsCheck={handleChangeTermsCheck}
      isPrivacyChecked={false}
      isTermsChecked={false}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
describe('handleChangePrivacyCheck', () => {
  test('click checkbox', () => {
    const handleChangePrivacyCheck = jest.fn()
    const handleChangeTermsCheck = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handleChangePrivacyCheck={handleChangePrivacyCheck}
        handleChangeTermsCheck={handleChangeTermsCheck}
        isPrivacyChecked={false}
        isTermsChecked={false}
      />
    )

    wrapper.find('span.la--checkbox').at(0).simulate('click')
    expect(handleChangePrivacyCheck).toHaveBeenCalled()
  })
  test('click anchor', () => {
    const handleChangePrivacyCheck = jest.fn()
    const handleChangeTermsCheck = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handleChangePrivacyCheck={handleChangePrivacyCheck}
        handleChangeTermsCheck={handleChangeTermsCheck}
        isPrivacyChecked={false}
        isTermsChecked={false}
      />
    )

    wrapper.find('a.la--form--link').at(0).simulate('click')
    expect(handleChangePrivacyCheck).toHaveBeenCalled()
  })
})
describe('handleChangeTermsCheck', () => {
  test('click checkbox', () => {
    const handleChangePrivacyCheck = jest.fn()
    const handleChangeTermsCheck = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handleChangePrivacyCheck={handleChangePrivacyCheck}
        handleChangeTermsCheck={handleChangeTermsCheck}
        isPrivacyChecked={false}
        isTermsChecked={false}
      />
    )

    wrapper.find('span.la--checkbox').at(1).simulate('click')
    expect(handleChangeTermsCheck).toHaveBeenCalled()
  })
  test('click anchor', () => {
    const handleChangePrivacyCheck = jest.fn()
    const handleChangeTermsCheck = jest.fn()
    const wrapper = mountWithIntl(
      <Confirmation
        handleChangePrivacyCheck={handleChangePrivacyCheck}
        handleChangeTermsCheck={handleChangeTermsCheck}
        isPrivacyChecked={false}
        isTermsChecked={false}
      />
    )

    wrapper.find('a.la--form--link').at(1).simulate('click')
    expect(handleChangeTermsCheck).toHaveBeenCalled()
  })
})
