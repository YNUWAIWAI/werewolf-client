import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import {ImagePath} from '../../src/scripts/lobby/constants/ImagePath'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import SelectHumanAvatar from '../../src/scripts/lobby/containers/SelectHumanAvatarContainer'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

storiesOf('lobby|SelectHumanAvatar', module)
  .addDecorator(story => {
    return (
      <div
        className={`lo ${radios(theme.label, theme.options, theme.defaultValue)}`}
        style={{
          background: 'var(--color--background)',
          height: '100vh',
          width: '100vw'
        }}
      >
        {story()}
      </div>
    )
  })
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        selectHumanAvatar: {
          avatar: {
            allIds: [
              '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
              '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
            ],
            byId: {
              '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
                checked: false,
                image: ImagePath.Character.a,
                isHover: false,
                language: lobby.Language.en,
                name: 'avatar1'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
                checked: false,
                image: ImagePath.Character.b,
                isHover: false,
                language: lobby.Language.en,
                name: 'avatar2'
              }
            }
          },
          command: [
            {
              id: 'AvatarSelectCommand.select',
              types: [ActionTypes.SelectHumanAvatar.SELECT]
            },
            {
              id: 'AvatarSelectCommand.delete',
              types: [ActionTypes.SelectHumanAvatar.DELETE]
            }
          ],
          menuItems: [
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ]
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <SelectHumanAvatar />
        </IntlProvider>
      </Provider>

    return story
  })
