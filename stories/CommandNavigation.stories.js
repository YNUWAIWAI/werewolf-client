// @flow
import CommandNavigation from '../src/scripts/village/components/CommandNavigation'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('village/CommandNavigation', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('')(() => {
    const items = [
      {
        text: '結果を表示',
        type: 'SHOW_RESULT'
      },
      {
        text: 'ロビーへ戻る',
        type: 'RETURN_TO_LOBBY'
      }
    ]
    const story = <CommandNavigation handleClick={type => action(`handleClick: ${type}`)} items={items} />

    return story
  }))
