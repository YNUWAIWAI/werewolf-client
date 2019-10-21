import * as React from 'react'
import {
  noon,
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
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|App', module)
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
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
      {
        ... prologue,
        language: radios(language.label, language.options, language.defaultValue)
      }
    )

    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('morning (without werewolf chat)', () => {
    const store = createStore(
      reducer,
      {
        ... morningWithoutLimitedChat,
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('morning (with werewolf chat)', () => {
    const store = createStore(
      reducer,
      {
        ... morningWithLimitedChat,
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
  .add('noon', () => {
    const store = createStore(
      reducer,
      {
        ... noon,
        language: radios(language.label, language.options, language.defaultValue)
      }
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
      {
        ... night,
        language: radios(language.label, language.options, language.defaultValue)
      }
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
      {
        ... night2,
        language: radios(language.label, language.options, language.defaultValue)
      }
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
      {
        ... grave,
        language: radios(language.label, language.options, language.defaultValue)
      }
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
      {
        ... result,
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
