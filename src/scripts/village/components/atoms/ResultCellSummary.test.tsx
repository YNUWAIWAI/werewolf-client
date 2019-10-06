import * as React from 'react'
import * as village from '../../types'
import ResultCellSummary from './ResultCellSummary'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ResultCellSummary />', () => {
  test('audience', () => {
    const warpper = mountWithIntl(
      <ResultCellSummary
        myTeam=""
        winnerTeam={village.Team.werewolf}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('player lose', () => {
    const warpper = mountWithIntl(
      <ResultCellSummary
        myTeam={village.Team.villager}
        winnerTeam={village.Team.werewolf}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('player win', () => {
    const warpper = mountWithIntl(
      <ResultCellSummary
        myTeam={village.Team.villager}
        winnerTeam={village.Team.villager}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
