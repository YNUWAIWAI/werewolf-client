const VERSION = 2

export const connectDB = (() => {
  let db: IDBDatabase

  return () => new Promise<IDBDatabase>((resolve, reject) => {
    if (db) {
      resolve(db)

      return
    }
    const request = window.indexedDB.open('licosDB', VERSION)

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

export const getValue = <T>(objectStore: IDBObjectStore, key: string) => new Promise<T>((resolve, reject) => {
  const request: IDBRequest<T> = objectStore.get(key)

  request.onerror = () => {
    reject(request.error)
  }
  request.onsuccess = () => {
    const result = request.result

    if (result === undefined || result === null) {
      reject(`Fail to get ${objectStore.name}.${key}`)
    }

    resolve(result)
  }
})
export const deleteValue = (objectStore: IDBObjectStore, key: string) => {
  const request = objectStore.delete(key)

  request.onerror = () => {
    console.error(request.error)
  }
  request.onsuccess = () => {
    console.log('Success to delete')
  }
}
export const updateValue = <T>(objectStore: IDBObjectStore, key: string, newValue: T, url?: string) => {
  const request = objectStore.put(newValue, key)

  request.onerror = () => {
    console.error(request.error)
  }
  request.onsuccess = () => {
    console.log(request.result)
    if (url) {
      window.location.replace(url)
    }
  }
}

