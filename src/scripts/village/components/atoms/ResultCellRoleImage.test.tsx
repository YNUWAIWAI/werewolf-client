/* global village */
import * as React from 'react'
import ResultCellRoleImage from './ResultCellRoleImage'
import {shallow} from 'enzyme'

describe('<ResultCellRoleImage />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.AgentStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.AgentStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
