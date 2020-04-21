import * as React from 'react'
import Header from './Header'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <Header
      id="Header.buildVillage"
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
