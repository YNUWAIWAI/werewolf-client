import * as Ajv from 'ajv'
import {
  anonymousAudienceChat,
  day,
  firstMorning,
  firstMorning2,
  firstMorning3,
  firstMorning4,
  firstMorning5,
  flavorText,
  myMessageOnChat,
  night,
  onymousAudienceChat,
  result,
  theirMessageOnChat
} from '.'
import {VERSION} from '../../constants/Version'
import fetch from 'node-fetch'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

test('validate anonymousAudienceChat', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, anonymousAudienceChat)

      expect(validate).toBe(true)
    })
})
test('validate day', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, day)

      expect(validate).toBe(true)
    })
})
test('validate firstMorning', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, firstMorning)

      expect(validate).toBe(true)
    })
})
test('validate firstMorning2', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, firstMorning2)

      expect(validate).toBe(true)
    })
})
test('validate firstMorning3', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, firstMorning3)

      expect(validate).toBe(true)
    })
})
test('validate firstMorning4', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, firstMorning4)

      expect(validate).toBe(true)
    })
})
test('validate firstMorning5', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, firstMorning4)

      expect(validate).toBe(true)
    })
})
test('validate flavorText', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, flavorText)

      expect(validate).toBe(true)
    })
})
test('validate myMessageOnChat', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, myMessageOnChat)

      expect(validate).toBe(true)
    })
})
test('validate night', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, night)

      expect(validate).toBe(true)
    })
})
test('validate onymousAudienceChat', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, onymousAudienceChat)

      expect(validate).toBe(true)
    })
})
test('validate result', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, result)

      expect(validate).toBe(true)
    })
})
test('validate theirMessageOnChat', async () => {
  const ajv = new Ajv()

  expect.hasAssertions()
  await Promise.all([
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json())
  ])
    .then(schemas => {
      const [schema, ... rest] = schemas
      const validate = ajv
        .addSchema(rest)
        .validate(schema, theirMessageOnChat)

      expect(validate).toBe(true)
    })
})
