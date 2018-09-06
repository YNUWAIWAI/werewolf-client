// @flow
import * as types from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {socket as socketAction} from '../actions'

const dbName = 'lobby'
let db
const indexedDBMiddleware: Middleware<ReducerState, Action> = store => next => action => {
  const connectDB = () => {
    const request = window.indexedDB.open(dbName)

    request.onerror = event => {
      console.error(event.target.errorCode)
    }
    request.onupgradeneeded = event => {
      const db_ = event.target.result
      const objectStore = db_.createObjectStore('lastVisited',  {keyPath: 'token'})

      objectStore.createIndex('villageId', 'villageId', {unique: false})
      objectStore.transaction.oncomplete = e =>{
        const lastVisitedObjectStore = db_.transaction('lastVisited', 'readwrite').objectStore('lastVisited')

        lastVisitedObjectStore.add({
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
          villageId: 1
        })
      }
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
      console.log('success', db)
    }
  }

  if (!db) {
    connectDB()
  }

  return next(action)
}

export default indexedDBMiddleware
