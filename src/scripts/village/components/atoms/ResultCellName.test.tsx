/* global village */
import * as React from 'react'
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
})
