import * as React from 'react'
import * as lobby from '../../types'
import MemberRole from './MemberRole'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('<MemberRole class="class" id="id" image="image" name="name" numberOfAgents={0} />', () => {
  const wrapper = mountWithIntl(
    <MemberRole
      className="class"
      id="villager"
      image="image"
      numberOfAgents={0}
    />
  )

  expect(wrapper.text()).toBe('✕0Villager')
  expect(wrapper.find('img[src="image"]').exists()).toBe(true)
})
