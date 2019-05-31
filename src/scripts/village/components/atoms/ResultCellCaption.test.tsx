/* global village */
import * as React from 'react'
import ResultCellCaption from './ResultCellCaption'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ResultCellCaption />', () => {
  test('loser(1)', () => {
    const warpper = mountWithIntl(
      <ResultCellCaption
        id="Result.summary.loser(1)"
        loserTeam={new Set([village.Team.villager])}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('loser(2)', () => {
    const warpper = mountWithIntl(
      <ResultCellCaption
        id="Result.summary.loser(2)"
        loserTeam={new Set([village.Team.villager, village.Team.werehamster])}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('winner', () => {
    const warpper = mountWithIntl(
      <ResultCellCaption
        id="Result.summary.winner"
        winnerTeam={village.Team.villager}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
