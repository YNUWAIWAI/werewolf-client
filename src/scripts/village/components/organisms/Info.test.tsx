import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Info from './Info'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {shallow} from 'enzyme'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

test('<Info />', () => {
  const wrapper = shallow(<Info />)

  expect(wrapper.children()).toHaveLength(7)
  expect(wrapper.find(FormattedMessage)).toHaveLength(3)
  const [agent, role, team] = wrapper.find(FormattedMessage).getElements().map(elem => mountWithIntl(elem))

  expect(agent.text()).toBe('You:')
  expect(role.text()).toBe('Role:')
  expect(team.text()).toBe('Team:')
})
