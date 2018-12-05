// @flow
import Audience from '../../src/scripts/village/components/atoms/svg/Audience'
import Circle from '../../src/scripts/village/components/atoms/svg/Circle'
import Cross from '../../src/scripts/village/components/atoms/svg/Cross'
import DownArrow from '../../src/scripts/village/components/atoms/svg/DownArrow'
import Grave from '../../src/scripts/village/components/atoms/svg/Grave'
import Master from '../../src/scripts/village/components/atoms/svg/Master'
import Private from '../../src/scripts/village/components/atoms/svg/Private'
import Public from '../../src/scripts/village/components/atoms/svg/Public'
import Question from '../../src/scripts/village/components/atoms/svg/Question'
import React from 'react'
import TeamVillager from '../../src/scripts/village/components/atoms/svg/TeamVillager'
import TeamWerehamster from '../../src/scripts/village/components/atoms/svg/TeamWerehamster'
import TeamWerewolf from '../../src/scripts/village/components/atoms/svg/TeamWerewolf'
import Triangle from '../../src/scripts/village/components/atoms/svg/Triangle'
import Werewolf from '../../src/scripts/village/components/atoms/svg/Werewolf'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('village|svg', module)
  .addDecorator(withKnobs)
  .addDecorator(story => {
    const style = {
      height: '300px',
      width: '300px'
    }

    return (
      <div style={style}>
        {story()}
      </div>
    )
  })
  .add('Audience', () => <Audience />)
  .add('Circle', () => <Circle />)
  .add('Cross', () => <Cross />)
  .add('DownArrow', () => <DownArrow />)
  .add('Grave', () => <Grave />)
  .add('Master', () => <Master />)
  .add('Private', () => <Private />)
  .add('Public', () => <Public />)
  .add('Question', () => <Question />)
  .add('TeamVillagers', () => <TeamVillager />)
  .add('TeamWerehamster', () => <TeamWerehamster />)
  .add('TeamWerewolves', () => <TeamWerewolf />)
  .add('Triangle', () => <Triangle />)
  .add('Werewolf', () => <Werewolf />)
