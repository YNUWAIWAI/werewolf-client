import * as React from 'react'
import Description from './Description'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

test('<Description />', () => {
  const wrapper = mountWithIntl(
    <Description
      className="class"
      id="CommandSelection.Description.dayVote.fixed"
    />
  )

  expect(wrapper.text()).toBe('あなたの選んだ投票先はこちらです（残り00\'00）')
})
