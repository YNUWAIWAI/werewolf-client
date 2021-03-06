import * as ActionTypes from '../constants/ActionTypes'
import {
  Key,
  Village,
  WhatToDoNextInLobby,
  connectDB,
  deleteValue,
  getValue,
  updateValue
} from '../../indexeddb'
import {
  activateNextButton,
  changeLanguage,
  ready,
  showLobby,
  socket
} from '../actions'
import {
  lobby,
  village
} from '../types'
import {Middleware} from '.'

const indexedDBMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.App.INIT: {
      connectDB()
        .then(async db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')
          const [language, isHost, villageInfo] = await Promise.all([
            getValue<village.Language>(objectStore, Key.language),
            getValue<village.Language>(objectStore, Key.isHost),
            getValue<Village>(objectStore, Key.village)
          ])

          store.dispatch(changeLanguage(language))
          if (isHost) {
            store.dispatch(activateNextButton(-1))
          }
          store.dispatch(ready({
            token: villageInfo.token,
            villageId: villageInfo.villageId
          }))
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.Navigation.RETURN_TO_LOBBY: {
      connectDB()
        .then(async db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')
          const villageInfo = await getValue<Village>(objectStore, Key.village)

          store.dispatch(socket.send({
            lobby: villageInfo.lobbyType,
            token: villageInfo.token,
            type: lobby.PayloadType.leaveWaitingPage,
            villageId: villageInfo.villageId
          }))
          await Promise.all([
            updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.leaveWaitingPage),
            deleteValue(objectStore, Key.nextGameVillageId)
          ])
          store.dispatch(showLobby())
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.Navigation.NEXT_GAME: {
      connectDB()
        .then(async db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')
          const [isHost, buildVillagePayload] = await Promise.all([
            getValue<boolean>(objectStore, Key.isHost),
            getValue<village.Payload$BuildVillage>(objectStore, Key.buildVillagePayload),
            updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.selectNextVillage)
          ])

          if (isHost) {
            store.dispatch(socket.send(buildVillagePayload))
          } else {
            store.dispatch(showLobby())
          }
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.Message.NEXT_GAME_INVITATION: {
      const payload = action.payload

      connectDB()
        .then(async db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')
          const [isHost] = await Promise.all([
            getValue<boolean>(objectStore, Key.isHost),
            updateValue<number>(objectStore, Key.nextGameVillageId, payload.villageId)
          ])

          if (isHost) {
            store.dispatch(showLobby())
          } else {
            store.dispatch(activateNextButton(payload.villageId))
          }
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
