import {idGenerator} from './idGenerator'

describe('idGenerator', () => {
  test('idGenerator()', () => {
    const getId1 = idGenerator()
    const getId2 = idGenerator()
    const id1s = [... Array(3)].map(() => getId1())
    const id2s = [... Array(3)].map(() => getId2())

    expect(id1s).not.toStrictEqual(id2s)
    expect(id1s[0]).not.toBe(id1s[1])
  })
  test('idGenerator(false)', () => {
    const getId1 = idGenerator(false)
    const getId2 = idGenerator(false)
    const id1s = [... Array(3)].map(() => getId1())
    const id2s = [... Array(3)].map(() => getId2())

    expect(id1s).not.toStrictEqual(id2s)
    expect(id1s[0]).not.toBe(id1s[1])
  })
  test('idGenerator(true)', () => {
    const getId1 = idGenerator(true)
    const getId2 = idGenerator(true)
    const id1s = [... Array(3)].map(() => getId1())
    const id2s = [... Array(3)].map(() => getId2())

    expect(id1s).toStrictEqual(id2s)
    expect(id1s[0]).not.toBe(id1s[1])
  })
})
