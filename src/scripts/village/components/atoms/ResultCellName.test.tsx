import * as React from 'react'
import * as village from '../../types'
import ResultCellName from './ResultCellName'
import {shallow} from 'enzyme'

describe('<ResultCellName />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.AgentStatus.alive}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.AgentStatus.dead}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByAttack', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.AgentStatus.deathByAttack}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.AgentStatus.deathByExecution}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.AgentStatus.deathByFear}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.AgentStatus.unnaturalDeath}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
