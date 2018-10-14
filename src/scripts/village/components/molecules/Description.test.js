// @flow
import Description from './Description'
import React from 'react'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

test('<Description />', () => {
  const timer = {
    limit: 10,
    phase: 'night'
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
