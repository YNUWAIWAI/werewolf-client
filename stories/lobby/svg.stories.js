// @flow
import Danger from '../../src/scripts/lobby/components/svg/Danger'
import Loader from '../../src/scripts/lobby/components/svg/Loader'
import React from 'react'
import Safe from '../../src/scripts/lobby/components/svg/Safe'
import Warning from '../../src/scripts/lobby/components/svg/Warning'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('lobby|svg', module)
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
  .add('Danger', () => <Danger />)
  .add('Loader', () => <Loader />)
  .add('Safe', () => <Safe />)
  .add('Warning', () => <Warning />)
