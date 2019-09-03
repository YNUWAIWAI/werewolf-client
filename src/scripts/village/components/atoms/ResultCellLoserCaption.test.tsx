import * as React from 'react'
import * as village from 'types/village'
import ResultCellLoserCaption from './ResultCellLoserCaption'
import {getMessages} from '@i18n/village'
import {initRenderer} from '@tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ResultCellLoserCaption />', () => {
  test('loser(1)', () => {
    const warpper = mountWithIntl(
      <ResultCellLoserCaption
        team={new Set([village.Team.villager])}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('loser(2)', () => {
    const warpper = mountWithIntl(
      <ResultCellLoserCaption
        team={new Set([village.Team.villager, village.Team.werehamster])}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
