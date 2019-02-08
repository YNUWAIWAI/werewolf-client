import * as ActionTypes from '../constants/ActionTypes'
import {changeLanguage, ready} from '../actions'
import {connectDB, deleteValue, getValue} from '../../indexeddb'
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
            .then(result => {
              if (result) {
                getValue<lobby.Payload$BuildVillage>(objectStore, 'buildVillagePayload')
                  .then(result => {

                  })
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
            .then(result => {
              store.dispatch(changeLanguage(result))
            })
          getValue<Village>(objectStore, 'village')
            .then(result => {
              store.dispatch(ready({
                token: result.token,
                villageId: result.villageId
              }))
            })
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
