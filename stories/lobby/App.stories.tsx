import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import {
  lobbyForHumanPlayer,
  waitingPage
} from './initialState'
import App from '../../src/scripts/lobby/containers/App'
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
      type: ActionTypes.App.INIT
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

    history.replace('/human/waitingForPlayers')
    store.dispatch({
      type: ActionTypes.App.INIT
    })

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

    history.replace('/human/lobby')
    store.dispatch({
      type: ActionTypes.App.INIT
    })

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
                name: 'avatar1'
              },
              'a2': {
                checked: false,
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
          createNewAvatar: {
            command: [
              {
                id: 'CreateNewAvatar.create',
                types: [ActionTypes.SelectHumanAvatar.CREATE]
              }
            ]
          },
          menuItems: [
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

    history.replace('/human/selectAvatar')
    store.dispatch({
      type: ActionTypes.App.INIT
    })

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
            allIds: ['a1', 'a2', 'a3', 'a4', 'a5'],
            byId: {
              'a1': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
                authorized: lobby.Authorized.no,
                automation: lobby.Automation.full,
                checked: false,
                name: 'avatar1',
                status: lobby.AvatarStatus.awaitingAuthorization,
                testStatus: lobby.TestStatus.notPassed
              },
              'a2': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
                authorized: lobby.Authorized.yes,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar2',
                status: lobby.AvatarStatus.awaitingCommunicationTest,
                testStatus: lobby.TestStatus.passed
              },
              'a3': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
                authorized: lobby.Authorized.waitForAcceptance,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar3',
                status: lobby.AvatarStatus.connected,
                testStatus: lobby.TestStatus.passed
              },
              'a4': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3303',
                authorized: lobby.Authorized.waitForAcceptance,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar4',
                status: lobby.AvatarStatus.runningInTheBackground,
                testStatus: lobby.TestStatus.passed
              },
              'a5': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3304',
                authorized: lobby.Authorized.waitForAcceptance,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar5',
                status: lobby.AvatarStatus.runningInTheForeground,
                testStatus: lobby.TestStatus.passed
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
          createNewAvatar: {
            command: [
              {
                id: 'CreateNewAvatar.create',
                types: [ActionTypes.SelectRobotAvatar.CREATE]
              }
            ]
          },
          menuItems: [
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

    history.replace('/robot/selectAvatar')
    store.dispatch({
      type: ActionTypes.App.INIT
    })

    return story
  })
