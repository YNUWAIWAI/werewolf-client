import * as React from 'react'
import BuildVillageCellVillageName from './BuildVillageCellVillageName'
import {anonymousVillageName} from '../../../constants/AnonymousVillageName'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  describe('isFixedAvatar', () => {
    test('true', () => {
      const handleValueChange = jest.fn()
      const wrapper = mountWithIntl(
        <BuildVillageCellVillageName
          handleValueChange={handleValueChange}
          isFiexdAvatar
          navigatable
          valid
          value="villageName"
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('false', () => {
      const handleValueChange = jest.fn()
      const wrapper = mountWithIntl(
        <BuildVillageCellVillageName
          handleValueChange={handleValueChange}
          isFiexdAvatar={false}
          navigatable
          valid
          value={anonymousVillageName[0]}
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
