/* global village */
import * as React from 'react'
import ResultCellImage from './ResultCellImage'
import {shallow} from 'enzyme'

describe('<ResultCellImage />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.AgentStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.AgentStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
