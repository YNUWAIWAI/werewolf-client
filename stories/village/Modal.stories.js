// @flow
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import Modal from '../../src/scripts/village/components/organisms/Modal'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('village|Modal', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('default', () => {
    const timer = {
      limit: 10,
      phase: 'night'
    }
    const story =
      <Modal
        descriptionId="Modal.Description.dayVote"
        handleClickNo={action('handleClickNo')}
        handleClickYes={action('handleClickYes')}
        id={1}
        image="https://werewolf.world/image/0.1/Walter.jpg"
        name="ヴァルター"
        timer={timer}
        visible
      />

    return story
  })
