// @flow
import App from '../../src/scripts/village/containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import {createStore} from 'redux'
import dayConversationWithLimitedChat from './initialState/dayConversationWithLimitedChat'
import dayConversationWithoutLimitedChat from './initialState/dayConversationWithoutLimitedChat'
import dayVote from './initialState/dayVote'
import nightVote from './initialState/nightVote'
import reducer from '../../src/scripts/village/reducers'
import results from './initialState/results'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

storiesOf('village|App', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const store = createStore(
      reducer
    )

    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('昼 会話（限定なし）', () => {
    const store = createStore(
      reducer,
      dayConversationWithoutLimitedChat
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('昼 会話（限定あり）', () => {
    const store = createStore(
      reducer,
      dayConversationWithLimitedChat
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('昼 投票', () => {
    const store = createStore(
      reducer,
      dayVote
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('夜 投票', () => {
    const store = createStore(
      reducer,
      nightVote
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('結果', () => {
    const store = createStore(
      reducer,
      results
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
