import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import {
  lobbyForHumanPlayer,
  waitingPage
} from './initialState'
import App from '../../src/scripts/lobby/containers/App'
import {ImagePath} from '../../src/scripts/lobby/constants/ImagePath'
import {Provider} from 'react-redux'
import {createHashHistory} from 'history'
import {createRouterMiddleware} from '../../src/scripts/lobby/middlewares'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('lobby|App', module)
  .add('default', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })

    return story
  })
  .add('waitingPage', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... waitingPage,
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/human/waitingForPlayers')

    return story
  })
  .add('lobbyForHumanPlayer', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... lobbyForHumanPlayer,
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/human/lobby')

    return story
  })
  .add('selectHumanAvatar', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... lobbyForHumanPlayer,
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        },
        selectHumanAvatar: {
          avatar: {
            allIds: ['a1', 'a2'],
            byId: {
              'a1': {
                checked: false,
                isHover: false,
                name: 'avatar1'
              },
              'a2': {
                checked: false,
                isHover: false,
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
              id: 'Menu.createNewAvatar',
              types: [ActionTypes.App.SHOW_CREATE_NEW_AVATAR]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ]
        }
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/human/selectAvatar')

    return story
  })
  .add('selectRobotAvatar', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... lobbyForHumanPlayer,
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        },
        selectRobotAvatar: {
          avatar: {
            allIds: ['3F2504E0-4F89-11D3-9A0C-0305E82C3300', '3F2504E0-4F89-11D3-9A0C-0305E82C3301', '3F2504E0-4F89-11D3-9A0C-0305E82C3302', '3F2504E0-4F89-11D3-9A0C-0305E82C3303', '3F2504E0-4F89-11D3-9A0C-0305E82C3304'],
            byId: {
              '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: true,
                isHover: false,
                isReadyForAcceptance: false,
                isTestPassed: false,
                language: lobby.Language.en,
                name: 'avatar1',
                status: lobby.AvatarStatus.awaitingAuthorization,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: true,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: false,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar2',
                status: lobby.AvatarStatus.awaitingCommunicationTest,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: true,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar3',
                status: lobby.AvatarStatus.connected,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3303': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: true,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar4',
                status: lobby.AvatarStatus.runningInTheBackground,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3304': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: true,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar5',
                status: lobby.AvatarStatus.runningInTheForeground,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
              }
            }
          },
          command: [
            {
              id: 'AvatarSelectCommand.runInTheForeground',
              types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_FOREGROUND]
            },
            {
              id: 'AvatarSelectCommand.runInTheBackground',
              types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND]
            },
            {
              id: 'AvatarSelectCommand.stop',
              types: [ActionTypes.SelectRobotAvatar.STOP]
            },
            {
              id: 'AvatarSelectCommand.delete',
              types: [ActionTypes.SelectRobotAvatar.DELETE]
            }
          ],
          menuItems: [
            {
              id: 'Menu.createNewAvatar',
              types: [ActionTypes.App.SHOW_CREATE_NEW_AVATAR]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ]
        }
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/robot/selectAvatar')

    return story
  })
