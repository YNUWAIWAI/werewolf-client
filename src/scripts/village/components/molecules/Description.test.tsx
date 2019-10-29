import * as React from 'react'
import Description from './Description'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const store = fakeStore()
const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

test('<Description />', () => {
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Description
        className="className"
        id="CommandSelection.Description.noonVote.fixed"
      />
    </Provider>
  )

  expect(wrapper.text()).toBe('This is the character you chose to put to death (00\'00 left)')
})
