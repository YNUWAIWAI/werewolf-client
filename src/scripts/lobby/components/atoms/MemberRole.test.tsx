/* global lobby */
import * as React from 'react'
import MemberRole from './MemberRole'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

test('<MemberRole class="class" id="id" image="image" name="name" numberOfAgents={0} />', () => {
  const wrapper = mountWithIntl(
    <MemberRole
      className="class"
      id="villager"
      image="image"
      numberOfAgents={0}
    />
  )

  expect(wrapper.text()).toBe('✕0村人')
  expect(wrapper.find('img[src="image"]').exists()).toBe(true)
})
