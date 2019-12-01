/* eslint no-console: 0 */
import {lobby} from './types'

const VERSION = 3

export const enum Key {
  buildVillagePayload = 'buildVillagePayload',
  isHost = 'isHost',
  language = 'language',
  nextGameVillageId = 'nextGameVillageId',
  village = 'village',
  whatToDoNextInLobby = 'whatToDoNextInLobby'
}
export interface Village {
  lobbyType: lobby.LobbyType
  token: string
  villageId: number
}
export const enum WhatToDoNextInLobby {
  leaveWaitingPage = 'leaveWaitingPage',
  nothing = 'nothing',
  selectNextVillage = 'selectNextVillage',
  selectVillage = 'selectVillage'
}

export const connectDB = (() => {
  let db: IDBDatabase

  return () => new Promise<IDBDatabase>((resolve, reject) => {
    if (db) {
      resolve(db)

      return
    }
    const request = indexedDB.open('licosDB', VERSION)

    request.onerror = () => {
      console.error(request.error)
      reject(request.error)
    }
    request.onblocked = () => {
      console.error('Your database version can\'t be upgraded because the app is open somewhere else.')
      reject(request.error)
    }
    request.onupgradeneeded = event => {
      console.log(`Upgrade: v${event.oldVersion} -> v${event.newVersion}`)
      db = request.result
      db.createObjectStore('licosDB')
    }
    request.onsuccess = () => {
      db = request.result
      db.onabort = () => {
        console.error('Database opening aborted!')
      }
      db.onerror = () => {
        console.error('Error opening database.')
      }
      db.onclose = () => {
        console.log(`The database ${db.name} has unexpectedly closed.`)
      }
      db.onversionchange = event => {
        console.log(`Version changed: v${event.oldVersion} -> v${event.newVersion}`)
      }
      console.log('success', db)
      resolve(db)
    }
  })
})()

export const getValue = <T>(objectStore: IDBObjectStore, key: Key) => new Promise<T>((resolve, reject) => {
  const request: IDBRequest<T> = objectStore.get(key)

  request.onerror = () => {
    reject(request.error)
  }
  request.onsuccess = () => {
    const result = request.result

    if (typeof result === 'undefined' || result === null) {
      console.error(`Fail to get ${objectStore.name}.${key}`)
      resolve(undefined)
    }

    resolve(result)
  }
})
export const deleteValue = (objectStore: IDBObjectStore, key: Key) => new Promise<never>((resolve, reject) => {
  const request = objectStore.delete(key)

  request.onerror = () => {
    reject(request.error)
  }
  request.onsuccess = () => {
    console.log('Success to delete')
    resolve()
  }
})
export const updateValue = <T>(objectStore: IDBObjectStore, key: Key, newValue: T) => new Promise<never>((resolve, reject) => {
  const request = objectStore.put(newValue, key)

  request.onerror = () => {
    reject(request.error)
  }
  request.onsuccess = () => {
    console.log('Success to update')
    resolve()
  }
})
