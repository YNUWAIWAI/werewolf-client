/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {Key, Village, WhatToDoNextInLobby, connectDB, deleteValue, getValue, updateValue} from '../../indexeddb'
import {activateNextButton, changeLanguage, ready, socket} from '../actions'
import {Middleware} from '.'

const indexedDBMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.Navigation.RETURN_TO_LOBBY: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')

          getValue<Village>(objectStore, Key.village)
            .then(villageInfo => {
              store.dispatch(socket.send({
                lobby: villageInfo.lobbyType,
                token: villageInfo.token,
                type: village.PayloadType.leaveWaitingPage,
                villageId: villageInfo.villageId
              }))
            })
          Promise.all([
            updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.leaveWaitingPage),
            deleteValue(objectStore, Key.nextGameVillageId)
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
            getValue<boolean>(objectStore, Key.isHost),
            getValue<village.Payload$buildVillage>(objectStore, Key.buildVillagePayload),
            updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.selectNextVillage)
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
            getValue<village.Language>(objectStore, Key.lang),
            getValue<village.Language>(objectStore, Key.isHost),
            getValue<Village>(objectStore, Key.village)
          ])
            .then(values => {
              const [lang, isHost, villageInfo] = values

              store.dispatch(changeLanguage(lang))
              if (isHost) {
                store.dispatch(activateNextButton(-1))
              }
              store.dispatch(ready({
                token: villageInfo.token,
                villageId: villageInfo.villageId
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
              getValue<boolean>(objectStore, Key.isHost),
              updateValue<number>(objectStore, Key.nextGameVillageId, payload.villageId)
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
