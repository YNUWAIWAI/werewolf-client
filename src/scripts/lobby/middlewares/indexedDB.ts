/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import {changeLobby, selectVillage} from '../actions'
import {connectDB, deleteValue, getValue, updateValue} from '../../indexeddb'
import {Middleware} from '.'

interface Village {
  lobbyType: lobby.Lobby
  token: string
  villageId: number
}

const indexedDBMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.indexedDB.INIT: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB')
          const objectStore = transaction.objectStore('licosDB')

          getValue<Village>(objectStore, 'viilage')
            .then(result => {
              store.dispatch(changeLobby(result.lobbyType))
              store.dispatch(selectVillage(result.villageId))
            })
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.Target.LEAVE_WAITING_PAGE: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')

          deleteValue(objectStore, 'village')
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload.type) {
        case lobby.PayloadType.played: {
          const payload = action.payload

          connectDB()
            .then(db => {
              const transaction = db.transaction('licosDB', 'readwrite')
              const objectStore = transaction.objectStore('licosDB')

              updateValue<lobby.Language>(
                objectStore,
                'lang',
                payload.lang
              )
                .then(() => {
                  window.location.replace(`${window.location.origin}/village`)
                })
            })

          return next(action)
        }
        case lobby.PayloadType.waitingPage: {
          const payload = action.payload
          const state = store.getState()

          connectDB()
            .then(db => {
              const transaction = db.transaction('licosDB', 'readwrite')
              const objectStore = transaction.objectStore('licosDB')

              updateValue<Village>(
                objectStore,
                'village',
                {
                  lobbyType: state.token.lobby,
                  token: state.token[state.token.lobby],
                  villageId: payload.village.id
                }
              )
            })

          return next(action)
        }
        default:
          return next(action)
      }
    }
    case ActionTypes.socket.SEND:
      switch (action.payload.type) {
        case lobby.PayloadType.buildVillage: {
          const payload = action.payload

          connectDB()
            .then(db => {

              const transaction = db.transaction('licosDB', 'readwrite')
              const objectStore = transaction.objectStore('licosDB')

              updateValue<lobby.Payload$BuildVillage>(
                objectStore,
                'buildVillagePayload',
                payload
              )
            })

          return next(action)
        }
        default:
          return next(action)
      }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
