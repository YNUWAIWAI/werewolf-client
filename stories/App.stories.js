// @flow
import App from '../src/scripts/village/containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import {createStore} from 'redux'
import dayConversationWithLimitedChat from './initialState/dayConversationWithLimitedChat'
import dayConversationWithoutLimitedChat from './initialState/dayConversationWithoutLimitedChat'
import dayVote from './initialState/dayVote'
import nightVote from './initialState/nightVote'
import reducer from '../src/scripts/village/reducers'
import results from './initialState/results'
import {storiesOf} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('App', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('')(() => {
    const store = createStore(
      reducer
    )

    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  }))
  .add('昼 会話（限定なし）', withInfo('')(() => {
    const store = createStore(
      reducer,
      dayConversationWithoutLimitedChat
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  }))
  .add('昼 会話（限定あり）', withInfo('')(() => {
    const store = createStore(
      reducer,
      dayConversationWithLimitedChat
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  }))
  .add('昼 投票', withInfo('')(() => {
    const store = createStore(
      reducer,
      dayVote
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  }))
  .add('夜 投票', withInfo('')(() => {
    const store = createStore(
      reducer,
      nightVote
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  }))
  .add('結果', withInfo('')(() => {
    const store = createStore(
      reducer,
      results
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  }))
