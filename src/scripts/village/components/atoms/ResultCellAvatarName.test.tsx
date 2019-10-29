import * as React from 'react'
import ResultCellAvatarName from './ResultCellAvatarName'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<ResultCellAvatarName />', () => {
  test('alive', () => {
    const warpper = shallow(
      <ResultCellAvatarName
        status={village.CharacterStatus.alive}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
  test('dead', () => {
    const warpper = shallow(
      <ResultCellAvatarName
        status={village.CharacterStatus.dead}
        text="Adil"
      />
    )

    expect(warpper.html()).toMatchSnapshot()
  })
})
