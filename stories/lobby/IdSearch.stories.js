// @flow
import IdSearchBox from '../../src/scripts/lobby/components/IdSearchBox'
import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('lobby|IdSearchBox', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const story =
      <IdSearchBox
        handleSearchIdChange={id => {console.log(id)}}
        handleValidityChange={validity => {console.log(validity)}}
        numberOfDigit={3}
        placeholder="3 digits"
      />

    return story
  })
