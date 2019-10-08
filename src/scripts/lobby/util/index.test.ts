import {
  getAnonymousVillageName,
  getCastFromNumberOfPlayers
} from '.'
import Cast from '../constants/Cast'
import {anonymousVillageName} from '../constants/AnonymousVillageName'

test('getAnonymousVillageName', () => {
  expect(anonymousVillageName).toContain(getAnonymousVillageName())
  expect(anonymousVillageName).toContain(getAnonymousVillageName())
  expect(anonymousVillageName).toContain(getAnonymousVillageName())
  expect(anonymousVillageName).toContain(getAnonymousVillageName())
})
describe('getCastFromNumberOfPlayers', () => {
  test('4', () => {
    expect(getCastFromNumberOfPlayers(4)).toStrictEqual(Cast['4'])
  })
  test('5', () => {
    expect(getCastFromNumberOfPlayers(5)).toStrictEqual(Cast['5'])
  })
  test('6', () => {
    expect(getCastFromNumberOfPlayers(6)).toStrictEqual(Cast['6'])
  })
  test('7', () => {
    expect(getCastFromNumberOfPlayers(7)).toStrictEqual(Cast['7'])
  })
  test('8', () => {
    expect(getCastFromNumberOfPlayers(8)).toStrictEqual(Cast['8'])
  })
  test('9', () => {
    expect(getCastFromNumberOfPlayers(9)).toStrictEqual(Cast['9'])
  })
  test('10', () => {
    expect(getCastFromNumberOfPlayers(10)).toStrictEqual(Cast['10'])
  })
  test('11', () => {
    expect(getCastFromNumberOfPlayers(11)).toStrictEqual(Cast['11'])
  })
  test('12', () => {
    expect(getCastFromNumberOfPlayers(12)).toStrictEqual(Cast['12'])
  })
  test('13', () => {
    expect(getCastFromNumberOfPlayers(13)).toStrictEqual(Cast['13'])
  })
  test('14', () => {
    expect(getCastFromNumberOfPlayers(14)).toStrictEqual(Cast['14'])
  })
  test('15', () => {
    expect(getCastFromNumberOfPlayers(15)).toStrictEqual(Cast['15'])
  })
  test('throw Exception', () => {
    expect(() => getCastFromNumberOfPlayers(16)).toThrow()
    expect(() => getCastFromNumberOfPlayers(3)).toThrow()
  })
})
