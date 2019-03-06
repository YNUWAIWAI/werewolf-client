import * as Ajv from 'ajv'
import {
  avatar,
  avatar2,
  enterHumanPlayerLobby,
  enterOnymousAudienceLobby,
  enterRobotPlayerLobby,
  ping,
  played,
  searchResult,
  settings,
  waitingPage,
  waitingPage2
} from '.'
import {VERSION} from '../../constants/Version'
import fetch from 'node-fetch'

const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
const SERVER2CLIENT = `${BASE_URI}/server2client`

test('validate avatar', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/avatar.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, avatar)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate avatar2', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/avatar.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, avatar2)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate enterHumanPlayerLobby', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/lobby.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, enterHumanPlayerLobby)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate enterOnymousAudienceLobby', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/lobby.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, enterOnymousAudienceLobby)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate enterRobotPlayerLobby', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/lobby.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, enterRobotPlayerLobby)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate ping', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/ping.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, ping)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate played', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/played.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, played)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate searchResult', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/searchResult.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, searchResult)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate settings', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/settings.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, settings)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate waitingPage', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/waitingPage.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, waitingPage)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate waitingPage2', async () => {
  expect.hasAssertions()
  const ajv = new Ajv()
  const schema = await fetch(`${SERVER2CLIENT}/waitingPage.json`)
    .then(res => res.json())
  const validate = ajv.validate(schema, waitingPage2)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
