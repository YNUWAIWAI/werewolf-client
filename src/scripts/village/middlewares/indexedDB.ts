/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {activateNextButton, changeLanguage, ready, socket} from '../actions'
import {connectDB, deleteValue, getValue, updateValue} from '../../indexeddb'
import {Middleware} from '.'

interface Village {
  lobbyType: lobby.Lobby
  token: string
  villageId: number
}

const indexedDBMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.Navigation.RETURN_TO_LOBBY: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')

          deleteValue(objectStore, 'village')
            .then(() => {
              window.location.replace(`${window.location.origin}/lobby`)
            })
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.Navigation.NEXT_GAME: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')

          getValue<boolean>(objectStore, 'isHost')
            .then(isHost => {
              if (isHost) {
                getValue<village.Payload$buildVillage>(objectStore, 'buildVillagePayload')
                  .then(buildVillagePayload => {
                    store.dispatch(socket.send(buildVillagePayload))
                  })
              } else {
                window.location.replace(`${window.location.origin}/lobby`)
              }
            })
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.indexedDB.INIT: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')

          getValue<village.Language>(objectStore, 'lang')
            .then(lang => {
              store.dispatch(changeLanguage(lang))
            })
          getValue<village.Language>(objectStore, 'isHost')
            .then(isHost => {
              if (isHost) {
                store.dispatch(activateNextButton(-1))
              }
            })
          getValue<Village>(objectStore, 'village')
            .then(village => {
              store.dispatch(ready({
                token: village.token,
                villageId: village.villageId
              }))
            })
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.socket.MESSAGE: {
      if (action.payload['@payload'] === village.PayloadType.nextGameInvitation) {
        const payload = action.payload

        connectDB()
          .then(db => {
            const transaction = db.transaction('licosDB', 'readwrite')
            const objectStore = transaction.objectStore('licosDB')

            updateValue<number>(objectStore, 'nextGameVillageId', payload.villageId)
              .then(() => {
                getValue<village.Language>(objectStore, 'isHost')
                  .then(isHost => {
                    if (isHost) {
                      window.location.replace(`${window.location.origin}/lobby`)
                    } else {
                      store.dispatch(activateNextButton(payload.villageId))
                    }
                  })
              })
          })
          .catch(reason => console.error(reason))
      }

      return next(action)
    }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
