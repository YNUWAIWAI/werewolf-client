// @flow
import Header from './Header'
import React from 'react'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

test('<Header />', () => {
  const wrapper = mountWithIntl(<Header id="Header.buildVillage" />)

  expect(wrapper.text()).toBe('Build village')
})
