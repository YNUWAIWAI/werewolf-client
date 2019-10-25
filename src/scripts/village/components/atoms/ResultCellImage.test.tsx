import * as React from 'react'
import ResultCellImage from './ResultCellImage'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<ResultCellImage />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.CharacterStatus.alive}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.CharacterStatus.dead}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByAttack', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.CharacterStatus.deathByAttack}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByExecution', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.CharacterStatus.deathByExecution}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('deathByFear', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.CharacterStatus.deathByFear}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('unnaturalDeath', () => {
    const warpper = shallow(
      <ResultCellImage
        image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
        initial="A"
        status={village.CharacterStatus.unnaturalDeath}
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
