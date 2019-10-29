import * as React from 'react'
import ResultCellWinnerCaption from './ResultCellWinnerCaption'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ResultCellWinnerCaption />', () => {
  test('winner', () => {
    const warpper = mountWithIntl(
      <ResultCellWinnerCaption
        team={village.Team.villager}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
