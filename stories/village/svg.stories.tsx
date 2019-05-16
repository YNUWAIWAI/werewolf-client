import * as React from 'react'
import Audience from '../../src/scripts/village/components/atoms/svg/Audience'
import Circle from '../../src/scripts/village/components/atoms/svg/Circle'
import Cross from '../../src/scripts/village/components/atoms/svg/Cross'
import DownArrow from '../../src/scripts/village/components/atoms/svg/DownArrow'
import Grave from '../../src/scripts/village/components/atoms/svg/Grave'
import Help from '../../src/scripts/village/components/atoms/svg/Help'
import Loader from '../../src/scripts/village/components/atoms/svg/Loader'
import Master from '../../src/scripts/village/components/atoms/svg/Master'
import Private from '../../src/scripts/village/components/atoms/svg/Private'
import Public from '../../src/scripts/village/components/atoms/svg/Public'
import Question from '../../src/scripts/village/components/atoms/svg/Question'
import Star from '../../src/scripts/village/components/atoms/svg/Star'
import TeamVillager from '../../src/scripts/village/components/atoms/svg/TeamVillager'
import TeamWerehamster from '../../src/scripts/village/components/atoms/svg/TeamWerehamster'
import TeamWerewolf from '../../src/scripts/village/components/atoms/svg/TeamWerewolf'
import Triangle from '../../src/scripts/village/components/atoms/svg/Triangle'
import Werewolf from '../../src/scripts/village/components/atoms/svg/Werewolf'
import {storiesOf} from '@storybook/react'

storiesOf('village|svg', module)
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
  .add('Help', () => <Help />)
  .add('Loader', () => <Loader />)
  .add('Master', () => <Master />)
  .add('Private', () => <Private />)
  .add('Public', () => <Public />)
  .add('Question', () => <Question />)
  .add('Star', () => <Star />)
  .add('TeamVillagers', () => <TeamVillager />)
  .add('TeamWerehamster', () => <TeamWerehamster />)
  .add('TeamWerewolves', () => <TeamWerewolf />)
  .add('Triangle', () => <Triangle />)
  .add('Werewolf', () => <Werewolf />)
