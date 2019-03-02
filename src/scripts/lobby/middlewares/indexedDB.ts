/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import {Key, Village, WhatToDoNextInLobby, connectDB, deleteValue, getValue, updateValue} from '../../indexeddb'
import {changeLobby, selectVillage, socket} from '../actions'
import {Middleware} from '.'

const indexedDBMiddleware: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.indexedDB.INIT: {
      connectDB()
        .then(async db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')
          const [
            whatToDoNextInLobby,
            nextGameVillageId,
            villageInfo
          ] = await Promise.all([
            getValue<WhatToDoNextInLobby>(
              objectStore,
              Key.whatToDoNextInLobby
            ),
            getValue<number>(
              objectStore,
              Key.nextGameVillageId
            ),
            getValue<Village>(
              objectStore,
              Key.village
            )
          ])

          switch (whatToDoNextInLobby) {
            case WhatToDoNextInLobby.leaveWaitingPage: {
              const payload: lobby.Payload$LeaveWaitingPage = {
                lobby: villageInfo.lobbyType,
                token: villageInfo.token,
                type: lobby.PayloadType.leaveWaitingPage,
                villageId: villageInfo.villageId
              }

              store.dispatch(socket.send(payload))
              Promise.all([
                deleteValue(
                  objectStore,
                  Key.buildVillagePayload
                ),
                deleteValue(
                  objectStore,
                  Key.isHost
                ),
                deleteValue(
                  objectStore,
                  Key.nextGameVillageId
                ),
                deleteValue(
                  objectStore,
                  Key.village
                ),
                updateValue<WhatToDoNextInLobby>(
                  objectStore,
                  Key.whatToDoNextInLobby,
                  WhatToDoNextInLobby.nothing
                )
              ]).catch(reason => console.error(reason))
              break
            }
            case WhatToDoNextInLobby.selectNextVillage: {
              store.dispatch(changeLobby(villageInfo.lobbyType))
              store.dispatch(selectVillage(nextGameVillageId))
              Promise.all([
                deleteValue(
                  objectStore,
                  Key.isHost
                ),
                deleteValue(
                  objectStore,
                  Key.nextGameVillageId
                ),
                updateValue<WhatToDoNextInLobby>(
                  objectStore,
                  Key.whatToDoNextInLobby,
                  WhatToDoNextInLobby.nothing
                )
              ]).catch(reason => console.error(reason))
              break
            }
            case WhatToDoNextInLobby.selectVillage: {
              store.dispatch(changeLobby(villageInfo.lobbyType))
              store.dispatch(selectVillage(villageInfo.villageId))
              Promise.all([
                deleteValue(
                  objectStore,
                  Key.isHost
                ),
                deleteValue(
                  objectStore,
                  Key.buildVillagePayload
                ),
                deleteValue(
                  objectStore,
                  Key.nextGameVillageId
                ),
                updateValue<WhatToDoNextInLobby>(
                  objectStore,
                  Key.whatToDoNextInLobby,
                  WhatToDoNextInLobby.nothing
                )
              ]).catch(reason => console.error(reason))
              break
            }
            case WhatToDoNextInLobby.nothing:
            default:
              Promise.all([
                deleteValue(
                  objectStore,
                  Key.isHost
                ),
                deleteValue(
                  objectStore,
                  Key.buildVillagePayload
                ),
                deleteValue(
                  objectStore,
                  Key.nextGameVillageId
                ),
                updateValue<WhatToDoNextInLobby>(
                  objectStore,
                  Key.whatToDoNextInLobby,
                  WhatToDoNextInLobby.nothing
                )
              ]).catch(reason => console.error(reason))
              break
          }
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.Target.LEAVE_WAITING_PAGE: {
      connectDB()
        .then(db => {
          const transaction = db.transaction('licosDB', 'readwrite')
          const objectStore = transaction.objectStore('licosDB')

          deleteValue(
            objectStore,
            Key.village
          )
        })
        .catch(reason => console.error(reason))

      return next(action)
    }
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload.type) {
        case lobby.PayloadType.played: {
          const payload = action.payload

          connectDB()
            .then(async db => {
              const transaction = db.transaction('licosDB', 'readwrite')
              const objectStore = transaction.objectStore('licosDB')

              await updateValue<lobby.Language>(
                objectStore,
                Key.lang,
                payload.lang
              )
              window.onbeforeunload = null
              window.location.replace(`${window.location.origin}/village`)
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

              Promise.all([
                updateValue<Village>(
                  objectStore,
                  Key.village,
                  {
                    lobbyType: state.token.lobby,
                    token: state.token[state.token.lobby],
                    villageId: payload.village.id
                  }
                ),
                updateValue<boolean>(
                  objectStore,
                  Key.isHost,
                  payload.players.some(player => player.isHost && player.isMe)
                ),
                updateValue<WhatToDoNextInLobby>(
                  objectStore,
                  Key.whatToDoNextInLobby,
                  WhatToDoNextInLobby.selectVillage
                )
              ])
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
