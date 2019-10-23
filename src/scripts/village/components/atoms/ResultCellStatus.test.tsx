import * as React from 'react'
import ResultCellStatus from './ResultCellStatus'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ResultCellStatus />', () => {
  test('alive', () => {
    const warpper = mountWithIntl(
      <ResultCellStatus
        status={village.AgentStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = mountWithIntl(
      <ResultCellStatus
        status={village.AgentStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByAttack', () => {
    const warpper = mountWithIntl(
      <ResultCellStatus
        status={village.AgentStatus.deathByAttack}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = mountWithIntl(
      <ResultCellStatus
        status={village.AgentStatus.deathByExecution}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = mountWithIntl(
      <ResultCellStatus
        status={village.AgentStatus.deathByFear}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = mountWithIntl(
      <ResultCellStatus
        status={village.AgentStatus.unnaturalDeath}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
