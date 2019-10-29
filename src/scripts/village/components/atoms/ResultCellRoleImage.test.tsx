import * as React from 'react'
import {ImagePath} from '../../constants/ImagePath'
import ResultCellRoleImage from './ResultCellRoleImage'
import {Role} from '../../constants/Role'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<ResultCellRoleImage />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image={ImagePath.Role.villager}
        name={Role.villager.en}
        status={village.CharacterStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image={ImagePath.Role.villager}
        name={Role.villager.en}
        status={village.CharacterStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByAttack', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image={ImagePath.Role.villager}
        name={Role.villager.en}
        status={village.CharacterStatus.deathByAttack}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image={ImagePath.Role.villager}
        name={Role.villager.en}
        status={village.CharacterStatus.deathByExecution}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image={ImagePath.Role.villager}
        name={Role.villager.en}
        status={village.CharacterStatus.deathByFear}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = shallow(
      <ResultCellRoleImage
        image={ImagePath.Role.villager}
        name={Role.villager.en}
        status={village.CharacterStatus.unnaturalDeath}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
