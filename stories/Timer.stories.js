// @flow
import {number, selectV2, withKnobs} from '@storybook/addon-knobs/react'
import React from 'react'
import Timer from '../src/scripts/village/components/Timer'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

storiesOf('village/Timer', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('')(() => {
    const limit = number('limit', 10)
    const phase = selectV2('phase', [ 'day conversation', 'day vote', 'night', 'post mortem', 'results' ], '')
    const story = <Timer limit={limit} phase={phase} />

    return story
  }))
