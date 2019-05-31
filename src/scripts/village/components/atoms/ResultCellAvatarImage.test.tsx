/* global village */
import * as React from 'react'
import ResultCellAvatarImage from './ResultCellAvatarImage'
import {shallow} from 'enzyme'

describe('<ResultCellAvatarImage />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        status={village.AgentStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        status={village.AgentStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
