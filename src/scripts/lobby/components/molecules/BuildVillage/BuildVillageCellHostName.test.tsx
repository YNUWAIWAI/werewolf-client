import * as React from 'react'
import BuildVillageCellHostName from './BuildVillageCellHostName'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  describe('isFixedAvatar', () => {
    test('true', () => {
      const wrapper = mountWithIntl(
        <BuildVillageCellHostName
          isFiexdAvatar
          value="hostName"
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('false', () => {
      const wrapper = mountWithIntl(
        <BuildVillageCellHostName
          isFiexdAvatar={false}
          value="hostName"
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
