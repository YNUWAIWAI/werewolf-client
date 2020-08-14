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
