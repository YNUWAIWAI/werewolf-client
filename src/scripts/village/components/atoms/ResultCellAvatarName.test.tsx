import * as React from 'react'
import * as village from '../../types'
import ResultCellAvatarName from './ResultCellAvatarName'
import {shallow} from 'enzyme'

describe('<ResultCellAvatarName />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellAvatarName
        status={village.AgentStatus.alive}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellAvatarName
        status={village.AgentStatus.dead}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
