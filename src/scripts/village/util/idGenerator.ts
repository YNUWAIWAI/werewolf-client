import {
  v4,
  v5
} from 'uuid'

export const idGenerator = (isTest?: boolean) => {
  if (typeof isTest === 'boolean' && isTest) {
    const infiniteList = (function* infiniteListGenerator() {
      let index: number

      index = 0
      while (true) {
        index += 1
        yield v5(String(index), v5.URL)
      }
    })()

    return () => infiniteList.next().value
  }

  return () => v4()
}
