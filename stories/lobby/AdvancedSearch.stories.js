// @flow
import AdvancedSearchBox from '../../src/scripts/lobby/components/organisms/AdvancedSearchBox'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('lobby|AdvancedSearchBox', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('default', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const validity = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const handleAvatarChange = avatar => {
      console.log(avatar)
    }
    const handleCheckboxChange = propName => checked_ => {
      console.log(propName, checked_)
    }
    const handleNumberChange = propName => num => {
      console.log(propName, num)
    }
    const handleTextChange = propName => text => {
      console.log(propName, text)
    }
    const handleValidityChange = propName => validity_ => {
      console.log(propName, validity_)
    }
    const story =
      <AdvancedSearchBox
        checked={checked}
        handleAvatarChange={handleAvatarChange}
        handleCheckboxChange={handleCheckboxChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        validity={validity}
      />

    return story
  })
