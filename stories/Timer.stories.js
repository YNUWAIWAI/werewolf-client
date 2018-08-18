// @flow
import {number, selectV2, withKnobs} from '@storybook/addon-knobs/react'
import type {Phase} from 'village'
import React from 'react'
import Timer from '../src/scripts/village/components/Timer'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

storiesOf('Timer', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('')(() => {
    const limit = number('limit', 10)
    const phase: Phase = selectV2('phase', ['day conversation', 'day vote', 'night', 'post mortem', 'results'], 'day conversation')
    const story = <Timer limit={limit} phase={phase} />

    return story
  }))
