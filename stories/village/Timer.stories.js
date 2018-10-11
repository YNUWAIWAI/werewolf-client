// @flow
import {number, select, withKnobs} from '@storybook/addon-knobs'
import type {Phase} from 'village'
import React from 'react'
import Timer from '../../src/scripts/village/components/atoms/Timer'
import {storiesOf} from '@storybook/react'

storiesOf('village|Timer', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const limit = number('limit', 10)
    const phase: Phase = select('phase', ['day conversation', 'day vote', 'night', 'post mortem', 'results'], 'day conversation')
    const story = <Timer limit={limit} phase={phase} />

    return story
  })
