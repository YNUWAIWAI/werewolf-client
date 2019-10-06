import * as React from 'react'
import * as village from '../../types'
import {FormattedMessage} from 'react-intl'
import Info from './Info'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {shallowWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

test('<Info />', () => {
  const wrapper = shallowWithIntl(<Info />)

  expect(wrapper.children()).toHaveLength(7)
  expect(wrapper.find(FormattedMessage)).toHaveLength(3)
  const [agent, role, team] = wrapper.find(FormattedMessage).getElements().map(elem => shallowWithIntl(elem))

  expect(agent.text()).toBe('あなた:')
  expect(role.text()).toBe('役職:')
  expect(team.text()).toBe('陣営:')
})
