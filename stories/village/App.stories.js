// @flow
import App from '../../src/scripts/village/containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import {createStore} from 'redux'
import day from './initialState/day'
import morningWithLimitedChat from './initialState/morningWithLimitedChat'
import morningWithoutLimitedChat from './initialState/morningWithoutLimitedChat'
import night from './initialState/night'
import reducer from '../../src/scripts/village/reducers'
import result from './initialState/result'
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
  .add('朝（限定なし）', () => {
    const store = createStore(
      reducer,
      morningWithoutLimitedChat
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('朝（限定あり）', () => {
    const store = createStore(
      reducer,
      morningWithLimitedChat
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('昼', () => {
    const store = createStore(
      reducer,
      day
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('夜', () => {
    const store = createStore(
      reducer,
      night
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
      result
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
