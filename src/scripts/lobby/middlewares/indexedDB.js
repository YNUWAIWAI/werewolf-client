// @flow
import * as types from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {socket as socketAction} from '../actions'

let db
const indexedDBMiddleware: Middleware<ReducerState, Action> = store => next => action => {
  const connectDB = () => {
    const request = window.indexedDB.open('lobby')

    request.onerror = event => {
      console.error(event.target.errorCode)
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
