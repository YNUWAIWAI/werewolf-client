import * as React from 'react'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import Modal from '../../src/scripts/village/components/organisms/Modal'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from '../language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Modal', module)
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Modal
            descriptionId="Modal.Description.dayVote"
            handleClickNo={action('handleClickNo')}
            handleClickYes={action('handleClickYes')}
            id={1}
            image="https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png"
            initial="A"
            name="Adil"
            visible
          />
        </IntlProvider>
      </Provider>

    return story
  })
