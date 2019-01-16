// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {connectLobbyDB, connectVillageDB} from '../../indexeddb'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {ready} from '../actions'

const indexedDBMiddleware: Middleware<ReducerState, Action> = store => next => action => {
  switch (action.type) {
    case ActionTypes.RETURN_TO_LOBBY: {
      connectLobbyDB().then(db => {
        const transaction = db.transaction('lobby', 'readwrite')
        const objectStore = transaction.objectStore('village')
        const request = objectStore.get('ready')

        request.onerror = event => {
          console.error('error', event)
        }
        request.onsuccess = event => {
          const result = event.target.result

          if (result) {
            store.dispatch(ready({
              token: result.token,
              villageId: result.villageId
            }))
          }
        }
      })

      return next(action)
    }
    case ActionTypes.indexedDB.INIT: {
      connectVillageDB().then(db => {
        const transaction = db.transaction('village', 'readwrite')
        const objectStore = transaction.objectStore('village')
        const request = objectStore.get('ready')

        request.onerror = event => {
          console.error('error', event)
        }
        request.onsuccess = event => {
          const result = event.target.result

          if (result) {
            store.dispatch(ready({
              token: result.token,
              villageId: result.villageId
            }))
          }
        }
      })

      return next(action)
    }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
