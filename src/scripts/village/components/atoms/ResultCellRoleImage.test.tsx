import * as React from 'react'
import * as village from 'types/village'
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
  test('deathByAttack', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.AgentStatus.deathByAttack}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.AgentStatus.deathByExecution}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.AgentStatus.deathByFear}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.AgentStatus.unnaturalDeath}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
