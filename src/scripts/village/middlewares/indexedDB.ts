import * as ActionTypes from '../constants/ActionTypes'
import {changeLanguage, ready} from '../actions'
import {connectDB, getValue} from '../../indexeddb'
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

          getValue<Village>(objectStore, 'village')
            .then(result => {
              store.dispatch(ready({
                token: result.token,
                villageId: result.villageId
              }))
            })
        })

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
            .catch(message => {
              console.log(message)
            })
          getValue<Village>(objectStore, 'village')
            .then(result => {
              store.dispatch(ready({
                token: result.token,
                villageId: result.villageId
              }))
            })
            .catch(message => {
              console.log(message)
            })
        })

      return next(action)
    }
    default:
      return next(action)
  }
}

export default indexedDBMiddleware
