import {
  LOBBY_SCHEMA,
  VILLAGE_SCHEMA
} from '../../constants/SchemaPath'
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
import Ajv from 'ajv'
import fetch from 'node-fetch'

test('validate avatar', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.avatar,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.avatar, avatar)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate avatar2', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.avatar,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.avatar, avatar2)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate enterHumanPlayerLobby', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.lobby,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.lobby, enterHumanPlayerLobby)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate enterOnymousAudienceLobby', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.lobby,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.lobby, enterOnymousAudienceLobby)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate enterRobotPlayerLobby', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.lobby,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.lobby, enterRobotPlayerLobby)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate ping', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.ping,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.timestamp
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.ping, ping)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate played', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.played,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.played, played)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate searchResult', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.searchResult,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.searchResult, searchResult)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate settings', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.settings,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.settings, settings)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate waitingPage', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.waitingPage,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.waitingPage, waitingPage)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate waitingPage2', async () => {
  expect.hasAssertions()
  const schemas = await Promise.all([
    LOBBY_SCHEMA.server2client.waitingPage,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.timestamp,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const ajv = new Ajv({
    schemas
  })
  const validate = ajv.validate(LOBBY_SCHEMA.server2client.waitingPage, waitingPage2)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
