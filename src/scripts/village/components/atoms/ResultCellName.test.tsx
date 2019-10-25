import * as React from 'react'
import ResultCellName from './ResultCellName'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<ResultCellName />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.CharacterStatus.alive}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.CharacterStatus.dead}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByAttack', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.CharacterStatus.deathByAttack}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.CharacterStatus.deathByExecution}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.CharacterStatus.deathByFear}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = shallow(
      <ResultCellName
        status={village.CharacterStatus.unnaturalDeath}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
