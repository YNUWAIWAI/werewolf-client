import * as React from 'react'
import ResultCellRoleImage from './ResultCellRoleImage'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<ResultCellRoleImage />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.CharacterStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.CharacterStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByAttack', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.CharacterStatus.deathByAttack}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.CharacterStatus.deathByExecution}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.CharacterStatus.deathByFear}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image="https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png"
        name="Villager"
        status={village.CharacterStatus.unnaturalDeath}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
