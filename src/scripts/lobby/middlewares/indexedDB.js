// @flow
import * as types from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {Payload$WatingPage} from 'lobby'
import type {ReducerState} from '../reducers'

let db
const dbName = 'lobby'
const indexedDBMiddleware: Middleware<ReducerState, Action> = store => next => action => {
  const connectDB = async () => {
    const request = window.indexedDB.open(dbName)

    request.onerror = event => {
      await console.error(event.target.errorCode)
    }
    request.onupgradeneeded = event => {
      db = event.target.result
      const objectStore = db.createObjectStore(
        'lastVisited',
        {
          keyPath: 'token'
        }
      )

      objectStore.createIndex(
        'lobby',
        'lobby',
        {
          unique: false
        }
      )
      objectStore.createIndex(
        'villageId',
        'villageId',
        {
          unique: false
        }
      )
    }
    request.onsuccess = event => {
      db = event.target.result
      db.onabort = e => {
        console.error('Database opening aborted!', e)
      }
      db.onerror = e => {
        console.error('Error opening database.', e)
      }
      db.onclose = e => {
        console.log(`The database ${db.name} has unexpectedly closed.`)
      }
      db.onversionchange = e => {
        console.log('version changed', e)
      }
      await console.log('success', db)
    }
  }

  if (!db) {
    connectDB()
  }

  switch (action.type) {
    case types.indexedDB.INIT: {
      const state = store.getState()
      const transaction = db.transaction('lastVisited')
      const objectStore = transaction.objectStore('lastVisited')
      const request = objectStore.get(state.token['human player'])

      request.onerror = event => {
        console.error('error')
      }
      request.onsuccess = event => {
        console.log(event.target.result)
      }

      return next(action)
    }
    case types.SOCKET_MESSAGE: {
      if (action.payload.type === 'waitingPage') {
        const payload: Payload$WatingPage = action.payload
        const state = store.getState()
        const transaction = db.transaction('lastVisited', 'readwrite')

        transaction.oncomplete = event => {
          console.log('All done!')
        }
        transaction.onerror = event => {
          console.error('transaction error')
        }

        const objectStore = transaction.objectStore('lastVisited')
        const request = objectStore.add({
          lobby: state.token.lobby,
          token: state.token[state.token.lobby],
          villageId: payload.village.id
        })

        request.onsuccess = event => {
          console.log(event.target.result)
        }
      }

      return next(action)
    }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
