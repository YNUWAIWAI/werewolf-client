// @flow
import Audience from '../../src/scripts/village/components/svg/Audience'
import Circle from '../../src/scripts/village/components/svg/Circle'
import Cross from '../../src/scripts/village/components/svg/Cross'
import DownArrow from '../../src/scripts/village/components/svg/DownArrow'
import Grave from '../../src/scripts/village/components/svg/Grave'
import Master from '../../src/scripts/village/components/svg/Master'
import Private from '../../src/scripts/village/components/svg/Private'
import Public from '../../src/scripts/village/components/svg/Public'
import Question from '../../src/scripts/village/components/svg/Question'
import React from 'react'
import Triangle from '../../src/scripts/village/components/svg/Triangle'
import Werewolf from '../../src/scripts/village/components/svg/Werewolf'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

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
  .add('Audience', withInfo('')(() => <Audience />))
  .add('Circle', withInfo('')(() => <Circle />))
  .add('Cross', withInfo('')(() => <Cross />))
  .add('DownArrow', withInfo('')(() => <DownArrow />))
  .add('Grave', withInfo('')(() => <Grave />))
  .add('Master', withInfo('')(() => <Master />))
  .add('Private', withInfo('')(() => <Private />))
  .add('Public', withInfo('')(() => <Public />))
  .add('Question', withInfo('')(() => <Question />))
  .add('Triangle', withInfo('')(() => <Triangle />))
  .add('Werewolf', withInfo('')(() => <Werewolf />))
