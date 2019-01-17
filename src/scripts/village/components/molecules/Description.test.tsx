import * as React from 'react'
import Description from './Description'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

test('<Description />', () => {
  const timer = {
    limit: 10,
    phase: village.Phase.night
  }
  const wrapper = mountWithIntl(
    <Description
      class="class"
      id="CommandSelection.Description.dayVote.fixed"
      timer={timer}
    />
  )

  expect(wrapper.text()).toBe('あなたの選んだ投票先はこちらです（残り00\'00）')
})
