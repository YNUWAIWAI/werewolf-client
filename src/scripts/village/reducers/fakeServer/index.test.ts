import {
  anonymousAudienceChat,
  firstMorning,
  firstMorning2,
  firstMorning3,
  firstMorning4,
  firstMorning5,
  flavorText,
  myMessageOnChat,
  night,
  noon,
  onymousAudienceChat,
  result,
  theirMessageOnChat
} from '.'
import Ajv from 'ajv'
import {VILLAGE_SCHEMA} from '../../constants/SchemaPath'
import fetch from 'node-fetch'

test('validate anonymousAudienceChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.chatMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.chatMessage, anonymousAudienceChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, firstMorning)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning2', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, firstMorning2)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning3', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, firstMorning3)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning4', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, firstMorning4)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning5', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, firstMorning5)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate flavorText', async () => {
  expect.hasAssertions()
  const [mainSchema, subSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.flavorTextMessage,
    VILLAGE_SCHEMA.chatMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedMainSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const mergedSubSchema = {
    ... subSchema,
    properties: {
      ... subSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedMainSchema,
      mergedSubSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.flavorTextMessage, flavorText)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate myMessageOnChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.chatMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.chatMessage, myMessageOnChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate night', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, night)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate noon', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, noon)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate onymousAudienceChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.chatMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.chatMessage, onymousAudienceChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate result', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.systemMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.boardResult,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village,
    VILLAGE_SCHEMA.votingResult
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, result)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate theirMessageOnChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    VILLAGE_SCHEMA.chatMessage,
    VILLAGE_SCHEMA.base,
    VILLAGE_SCHEMA.avatar,
    VILLAGE_SCHEMA.character,
    VILLAGE_SCHEMA.chat,
    VILLAGE_SCHEMA.chatSettings,
    VILLAGE_SCHEMA.role,
    VILLAGE_SCHEMA.time,
    VILLAGE_SCHEMA.village
  ].map(
    schema => fetch(schema)
      .then(res => res.json())
  ))
  const mergedSchema = {
    ... mainSchema,
    properties: {
      ... mainSchema.properties,
      ... baseSchema.definitions
    }
  }
  const ajv = new Ajv({
    schemas: [
      mergedSchema,
      baseSchema,
      ... schemas
    ]
  })
  const validate = ajv.validate(VILLAGE_SCHEMA.chatMessage, theirMessageOnChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
