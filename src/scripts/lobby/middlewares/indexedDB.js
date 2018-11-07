// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {changeLobby, selectVillage} from '../actions'
import {type Action} from '.'
import type {Middleware} from 'redux'
import type {Payload$WatingPage} from 'lobby'
import type {ReducerState} from '../reducers'

const connectLobbyDB = (() => {
  let db

  return () => new Promise((resolve, reject) => {
    if (db) {
      resolve(db)

      return
    }
    const request = window.indexedDB.open('lobby')

    request.onerror = event => {
      console.error(event.target.error)
      reject(event.target.error)
    }
    request.onupgradeneeded = event => {
      db = event.target.result
      const objectStore = db.createObjectStore(
        'history',
        {
          keyPath: 'type'
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
        'token',
        'token',
        {
          unique: true
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
      console.log('success', db)
      resolve(db)
    }
  })
})()
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
    request.onupgradeneeded = event => {
      db = event.target.result
      const objectStore = db.createObjectStore(
        'village',
        {
          keyPath: 'type'
        }
      )

      objectStore.createIndex(
        'token',
        'token',
        {
          unique: true
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
      console.log('success', db)
      resolve(db)
    }
  })
})()
const indexedDBMiddleware: Middleware<ReducerState, Action> = store => next => action => {
  switch (action.type) {
    case ActionTypes.indexedDB.INIT: {
      connectLobbyDB().then(db => {
        const transaction = db.transaction('history')
        const objectStore = transaction.objectStore('history')
        const request = objectStore.get('lastVisited')

        request.onerror = event => {
          console.error('error')
        }
        request.onsuccess = event => {
          const result = event.target.result

          if (result) {
            store.dispatch(changeLobby(result.lobby))
            store.dispatch(selectVillage(result.villageId))
          }
        }
      })

      return next(action)
    }
    case ActionTypes.LEAVE_WAITING_PAGE: {
      connectLobbyDB().then(db => {
        const transaction = db.transaction('history', 'readwrite')

        transaction.oncomplete = event => {
          console.log('All done!')
        }
        transaction.onerror = event => {
          console.error('transaction error')
        }

        const objectStore = transaction.objectStore('history')
        const request = objectStore.delete('lastVisited')

        request.onsuccess = event => {
          console.log(event.target.result)
        }
      })

      return next(action)
    }
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload.type) {
        case 'played': {
          const state = store.getState()

          connectVillageDB().then(db => {
            const transaction = db.transaction('village', 'readwrite')

            transaction.oncomplete = event => {
              console.log('All done!')
              window.location.replace(`${window.location.origin}/village`)
            }
            transaction.onerror = event => {
              console.error('transaction error')
            }

            const objectStore = transaction.objectStore('village')
            const request = objectStore.put({
              token: state.token[state.token.lobby],
              type: 'ready',
              villageId: state.waitingForPlayers.village ? state.waitingForPlayers.village.id : 0
            })

            request.onsuccess = event => {
              console.log(event.target.result)
            }
          })

          return next(action)
        }
        case 'waitingPage': {
          const payload: Payload$WatingPage = action.payload
          const state = store.getState()

          connectLobbyDB().then(db => {
            const transaction = db.transaction('history', 'readwrite')

            transaction.oncomplete = event => {
              console.log('All done!')
            }
            transaction.onerror = event => {
              console.error('transaction error')
            }

            const objectStore = transaction.objectStore('history')
            const request = objectStore.put({
              lobby: state.token.lobby,
              token: state.token[state.token.lobby],
              type: 'lastVisited',
              villageId: payload.village.id
            })

            request.onsuccess = event => {
              console.log(event.target.result)
            }
          })

          return next(action)
        }
        default:
          return next(action)
      }
    }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
