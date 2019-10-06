import * as React from 'react'
import * as lobby from '../../types'
import Header from './Header'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('<Header />', () => {
  const wrapper = mountWithIntl(<Header id="Header.buildVillage" />)

  expect(wrapper.text()).toBe('Build your village')
})
