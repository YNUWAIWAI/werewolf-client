// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {ReducerState} from '../reducers'
import {ready} from '../actions'

const connectVillageDB = (() => {
  let db

  return () => new Promise((resolve, reject) => {
    if (db) {
      resolve(db)

      return
    }
    const request = window.indexedDB.open('village')

    request.onerror = event => {
      console.error(event.target.error)
      reject(event.target.error)
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
      resolve(db)
    }
  })
})()
const indexedDBMiddleware: Middleware<ReducerState, Action> = store => next => action => {
  switch (action.type) {
    case ActionTypes.indexedDB.INIT: {
      connectVillageDB().then(db => {
        const transaction = db.transaction('village', 'readwrite')
        const objectStore = transaction.objectStore('village')
        const request = objectStore.get('ready')

        request.onerror = event => {
          console.error('error')
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
