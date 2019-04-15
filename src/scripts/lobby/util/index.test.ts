/* global lobby */
import {
  getAnonymousVillageName,
  getCastFromNumberOfPlayers,
  getText
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
    expect(getCastFromNumberOfPlayers(4)).toEqual(Cast['4'])
  })
  test('5', () => {
    expect(getCastFromNumberOfPlayers(5)).toEqual(Cast['5'])
  })
  test('6', () => {
    expect(getCastFromNumberOfPlayers(6)).toEqual(Cast['6'])
  })
  test('7', () => {
    expect(getCastFromNumberOfPlayers(7)).toEqual(Cast['7'])
  })
  test('8', () => {
    expect(getCastFromNumberOfPlayers(8)).toEqual(Cast['8'])
  })
  test('9', () => {
    expect(getCastFromNumberOfPlayers(9)).toEqual(Cast['9'])
  })
  test('10', () => {
    expect(getCastFromNumberOfPlayers(10)).toEqual(Cast['10'])
  })
  test('11', () => {
    expect(getCastFromNumberOfPlayers(11)).toEqual(Cast['11'])
  })
  test('12', () => {
    expect(getCastFromNumberOfPlayers(12)).toEqual(Cast['12'])
  })
  test('13', () => {
    expect(getCastFromNumberOfPlayers(13)).toEqual(Cast['13'])
  })
  test('14', () => {
    expect(getCastFromNumberOfPlayers(14)).toEqual(Cast['14'])
  })
  test('15', () => {
    expect(getCastFromNumberOfPlayers(15)).toEqual(Cast['15'])
  })
  test('throw Exception', () => {
    expect(() => getCastFromNumberOfPlayers(16)).toThrow()
    expect(() => getCastFromNumberOfPlayers(3)).toThrow()
  })
})
