import uuidv4 from 'uuid/v4'
import uuidv5 from 'uuid/v5'

export const idGenerator = (isTest?: boolean) => {
  if (typeof isTest === 'boolean' && isTest) {
    const infiniteList = (function* infiniteListGenerator() {
      let index: number

      index = 0
      while (true) {
        index += 1
        yield uuidv5(String(index), uuidv5.URL)
      }
    })()

    return () => infiniteList.next().value
  }

  return () => uuidv4()
}
