import * as React from 'react'
import Description from './Description'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const store = fakeStore()
const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

test('<Description />', () => {
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Description
        className="className"
        id="CommandSelection.Description.dayVote.fixed"
      />
    </Provider>
  )

  expect(wrapper.text()).toBe('あなたの選んだ投票先はこちらです（残り00\'00）')
})
