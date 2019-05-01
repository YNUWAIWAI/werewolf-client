import * as React from 'react'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import Modal from '../../src/scripts/village/components/organisms/Modal'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Modal', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
  .add('default', () => {
    const story =
      <Modal
        descriptionId="Modal.Description.dayVote"
        handleClickNo={action('handleClickNo')}
        handleClickYes={action('handleClickYes')}
        id={1}
        image="https://werewolf.world/image/0.1/Walter.jpg"
        name="ヴァルター"
        visible
      />

    return story
  })
