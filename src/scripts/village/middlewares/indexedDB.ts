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

          Promise.all([
            deleteValue(objectStore, 'village'),
            deleteValue(objectStore, 'nextGameVillageId')
          ])
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

          Promise.all([
            getValue<boolean>(objectStore, 'isHost'),
            getValue<village.Payload$buildVillage>(objectStore, 'buildVillagePayload')
          ])
            .then(values => {
              const [isHost, buildVillagePayload] = values

              if (isHost) {
                store.dispatch(socket.send(buildVillagePayload))
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

          Promise.all([
            getValue<village.Language>(objectStore, 'lang'),
            getValue<village.Language>(objectStore, 'isHost'),
            getValue<Village>(objectStore, 'village')
          ])
            .then(values => {
              const [lang, isHost, village] = values

              store.dispatch(changeLanguage(lang))
              if (isHost) {
                store.dispatch(activateNextButton(-1))
              }
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

            Promise.all([
              getValue<boolean>(objectStore, 'isHost'),
              updateValue<number>(objectStore, 'nextGameVillageId', payload.villageId)
            ])
              .then(values => {
                const [isHost] = values

                if (isHost) {
                  window.location.replace(`${window.location.origin}/lobby`)
                } else {
                  store.dispatch(activateNextButton(payload.villageId))
                }
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
