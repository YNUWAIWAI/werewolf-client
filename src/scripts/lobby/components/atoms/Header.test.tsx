/* global lobby */
import * as React from 'react'
import Header from './Header'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

test('<Header />', () => {
  const wrapper = mountWithIntl(<Header id="Header.buildVillage" />)

  expect(wrapper.text()).toBe('Build village')
})
