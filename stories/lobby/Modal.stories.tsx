import * as React from 'react'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import Modal from '../../src/scripts/lobby/components/organisms/Modal'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('lobby|Modal', module)
  .addDecorator(story =>
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  )
  .add('default', () => {
    const story =
      <Modal
        descriptionId="Modal.Description"
        handleClickNo={action('handleClickNo')}
        handleClickYes={action('handleClickYes')}
        visible
      />

    return story
  })
