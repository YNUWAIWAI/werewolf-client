// @flow
import IdSearchBox from '../../src/scripts/lobby/components/IdSearchBox'
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('lobby|IdSearchBox', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('')(() => {
    const story =
      <IdSearchBox
        handleSearchIdChange={id => {console.log(id)}}
        handleValidityChange={validity => {console.log(validity)}}
        numberOfDigit={3}
        placeholder="3 digits"
      />

    return story
  }))
