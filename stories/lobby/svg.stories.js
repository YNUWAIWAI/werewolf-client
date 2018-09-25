// @flow
import Danger from '../../src/scripts/lobby/components/svg/Danger'
import Loader from '../../src/scripts/lobby/components/svg/Loader'
import React from 'react'
import Safe from '../../src/scripts/lobby/components/svg/Safe'
import Warning from '../../src/scripts/lobby/components/svg/Warning'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

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
  .add('Danger', withInfo('')(() => <Danger />))
  .add('Loader', withInfo('')(() => <Loader />))
  .add('Safe', withInfo('')(() => <Safe />))
  .add('Warning', withInfo('')(() => <Warning />))
