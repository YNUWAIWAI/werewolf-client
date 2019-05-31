/* global village */
import * as React from 'react'
import ResultCellSummary from './ResultCellSummary'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ResultCellSummary />', () => {
  test('audience', () => {
    const warpper = mountWithIntl(
      <ResultCellSummary
        id="Result.summary.description(audience)"
        myTeam=""
        winnerTeam={village.Team.werewolf}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('player lose', () => {
    const warpper = mountWithIntl(
      <ResultCellSummary
        id="Result.summary.description(player, lose)"
        myTeam={village.Team.villager}
        winnerTeam={village.Team.werewolf}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('player win', () => {
    const warpper = mountWithIntl(
      <ResultCellSummary
        id="Result.summary.description(player, win)"
        myTeam={village.Team.villager}
        winnerTeam={village.Team.villager}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
