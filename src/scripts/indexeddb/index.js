const VERSION = 2

export const connectLobbyDB = (() => {
  let db

  return () => new Promise((resolve, reject) => {
    if (db) {
      resolve(db)

      return
    }
    const request = window.indexedDB.open('lobby', VERSION)

    request.onerror = event => {
      console.error(event.target.error)
      reject(event.target.error)
    }
    request.onupgradeneeded = event => {
      db = event.target.result
      const objectStore = db.createObjectStore(
        'history',
        {
          keyPath: 'type'
        }
      )

      objectStore.createIndex(
        'lobby',
        'lobby',
        {
          unique: false
        }
      )
      objectStore.createIndex(
        'token',
        'token',
        {
          unique: true
        }
      )
      objectStore.createIndex(
        'villageId',
        'villageId',
        {
          unique: false
        }
      )
    }
    request.onsuccess = event => {
      db = event.target.result
      db.onabort = event_ => {
        console.error('Database opening aborted!', event_)
      }
      db.onerror = event_ => {
        console.error('Error opening database.', event_)
      }
      db.onclose = event_ => {
        console.log(`The database ${db.name} has unexpectedly closed.`, event_)
      }
      db.onversionchange = event_ => {
        console.log('version changed', event_)
      }
      console.log('success', db)
      resolve(db)
    }
  })
})()
export const connectVillageDB = (() => {
  let db

  return () => new Promise((resolve, reject) => {
    if (db) {
      resolve(db)

      return
    }
    const request = window.indexedDB.open('village', VERSION)

    request.onerror = event => {
      console.error(event.target.error)
      reject(event.target.error)
    }
    request.onupgradeneeded = event => {
      db = event.target.result
      const objectStore = db.createObjectStore(
        'village',
        {
          keyPath: 'type'
        }
      )

      objectStore.createIndex(
        'token',
        'token',
        {
          unique: true
        }
      )
      objectStore.createIndex(
        'villageId',
        'villageId',
        {
          unique: false
        }
      )
    }
    request.onsuccess = event => {
      db = event.target.result
      db.onabort = event_ => {
        console.error('Database opening aborted!', event_)
      }
      db.onerror = event_ => {
        console.error('Error opening database.', event_)
      }
      db.onclose = event_ => {
        console.log(`The database ${db.name} has unexpectedly closed.`, event_)
      }
      db.onversionchange = event_ => {
        console.log('version changed', event_)
      }
      console.log('success', db)
      resolve(db)
    }
  })
})()
