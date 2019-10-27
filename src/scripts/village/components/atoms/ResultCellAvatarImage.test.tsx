import * as React from 'react'
import {ImagePath} from '../../constants/ImagePath'
import ResultCellAvatarImage from './ResultCellAvatarImage'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<ResultCellAvatarImage />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image={ImagePath.Character.a}
        status={village.CharacterStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image={ImagePath.Character.a}
        status={village.CharacterStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByAttack', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image={ImagePath.Character.a}
        status={village.CharacterStatus.deathByAttack}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image={ImagePath.Character.a}
        status={village.CharacterStatus.deathByExecution}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image={ImagePath.Character.a}
        status={village.CharacterStatus.deathByFear}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = shallow(
      <ResultCellAvatarImage
        image={ImagePath.Character.a}
        status={village.CharacterStatus.unnaturalDeath}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
