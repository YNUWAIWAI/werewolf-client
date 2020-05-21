/* eslint-disable no-console */
import * as React from 'react'
import {ImagePath} from '../../src/scripts/village/constants/ImagePath'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import Modal from '../../src/scripts/village/components/organisms/Modal'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

storiesOf('village|Modal', module)
  .addDecorator(story => (
    <div
      className={`vi ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="vi--background" />
    </div>
  ))
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
            descriptionId="Modal.Description.noonVote"
            handleClickNo={() => console.log('handleClickNo')}
            handleClickYes={() => console.log('handleClickYes')}
            id="1"
            image={ImagePath.Character.a}
            initial="A"
            name="Adil"
            visible
          />
        </IntlProvider>
      </Provider>

    return story
  })
