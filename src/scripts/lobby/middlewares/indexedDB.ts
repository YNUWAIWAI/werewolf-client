/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import {Key, Village, WhatToDoNextInLobby, connectDB, deleteValue, getValue, updateValue} from '../../indexeddb'
import {changeLobby, selectVillage} from '../actions'
import {Middleware} from '.'

const indexedDBMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.indexedDB.INIT: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB')
          const objectStore = transaction.objectStore('licosDB')

          Promise.all([
            getValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby),
            getValue<number>(objectStore, Key.nextGameVillageId),
            getValue<Village>(objectStore, Key.village)
          ])
            .then(values => {
              const [whatToDoNextInLobby, nextGameVillageId, villageInfo] = values

              switch (whatToDoNextInLobby) {
                case WhatToDoNextInLobby.leaveWaitingPage: {
                  break
                }
                case WhatToDoNextInLobby.selectNextVillage: {
                  store.dispatch(changeLobby(villageInfo.lobbyType))
                  store.dispatch(selectVillage(nextGameVillageId))
                  break
                }
                case WhatToDoNextInLobby.selectVillage: {
                  store.dispatch(changeLobby(villageInfo.lobbyType))
                  store.dispatch(selectVillage(villageInfo.villageId))
                  break
                }
                case WhatToDoNextInLobby.nothing:
                default:
                  break
              }
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

          deleteValue(objectStore, Key.village)
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
                Key.lang,
                payload.lang
              )
                .then(() => {
                  window.location.replace(`${window.location.origin}/village`)
                })
            })
            .catch(reason => console.error(reason))

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
                Key.village,
                {
                  lobbyType: state.token.lobby,
                  token: state.token[state.token.lobby],
                  villageId: payload.village.id
                }
              )
              updateValue<boolean>(
                objectStore,
                Key.isHost,
                state.waitingForPlayers.players.some(player => player.isHost && player.isMe)
              )
            })
            .catch(reason => console.error(reason))

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
                Key.buildVillagePayload,
                payload
              )
            })
            .catch(reason => console.error(reason))

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
