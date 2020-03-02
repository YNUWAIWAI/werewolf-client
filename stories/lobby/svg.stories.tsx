import * as React from 'react'
import Close from '../../src/scripts/lobby/components/atoms/svg/Close'
import Copy from '../../src/scripts/lobby/components/atoms/svg/Copy'
import Danger from '../../src/scripts/lobby/components/atoms/svg/Danger'
import Loader from '../../src/scripts/lobby/components/atoms/svg/Loader'
import Safe from '../../src/scripts/lobby/components/atoms/svg/Safe'
import Warning from '../../src/scripts/lobby/components/atoms/svg/Warning'
import {storiesOf} from '@storybook/react'

storiesOf('lobby|svg', module)
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
  .add('Close', () => <Close />)
  .add('Copy', () => <Copy />)
  .add('Danger', () => <Danger />)
  .add('Loader', () => <Loader />)
  .add('Safe', () => <Safe />)
  .add('Warning', () => <Warning />)
