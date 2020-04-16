import * as React from 'react'
import BuildVillageCellComment from './BuildVillageCellComment'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleValueChange = jest.fn()
  const wrapper = mountWithIntl(
    <BuildVillageCellComment
      handleValueChange={handleValueChange}
      navigatable
      valid
      value="comment"
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
