import * as React from 'react'
import {
  day,
  grave,
  morningWithLimitedChat,
  morningWithoutLimitedChat,
  night,
  night2,
  prologue,
  result
} from './initialState'
import App from '../../src/scripts/village/containers/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|App', module)
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
  .add('prologue', () => {
    const store = createStore(
      reducer,
      prologue
    )

    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('morning (without limited chat)', () => {
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
  .add('morning (with limited chat)', () => {
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
  .add('day', () => {
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
  .add('night(seer)', () => {
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
  .add('night(villager)', () => {
    const store = createStore(
      reducer,
      night2
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('grave', () => {
    const store = createStore(
      reducer,
      grave
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('result', () => {
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
