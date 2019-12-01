import * as React from 'react'
import MemberRole from './MemberRole'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('<MemberRole />', () => {
  const wrapper = mountWithIntl(
    <MemberRole
      className="className"
      id="villager"
      image="image"
      numberOfPlayers={0}
    />
  )

  expect(wrapper.text()).toBe('✕0Villager')
  expect(wrapper.find('img[src="image"]').exists()).toBe(true)
})
