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
import {VERSION} from '../../constants/Version'
import fetch from 'node-fetch'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

test('validate anonymousAudienceChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/chatMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/chatMessage.json`, anonymousAudienceChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, firstMorning)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning2', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, firstMorning2)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning3', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, firstMorning3)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning4', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, firstMorning4)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate firstMorning5', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, firstMorning5)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate flavorText', async () => {
  expect.hasAssertions()
  const [mainSchema, subSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/flavorTextMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/flavorTextMessage.json`, flavorText)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate myMessageOnChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/chatMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/chatMessage.json`, myMessageOnChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate night', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, night)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate noon', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, noon)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate onymousAudienceChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/chatMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/chatMessage.json`, onymousAudienceChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate result', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/systemMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/boardResult.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/votingResult.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/systemMessage.json`, result)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
test('validate theirMessageOnChat', async () => {
  expect.hasAssertions()
  const [mainSchema, baseSchema, ... schemas] = await Promise.all([
    fetch(`${BASE_URI}/chatMessage.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/base.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/agent.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/avatar.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chat.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/chatSettings.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/role.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/time.json`)
      .then(res => res.json()),
    fetch(`${BASE_URI}/village.json`)
      .then(res => res.json())
  ])
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
  const validate = ajv.validate(`${BASE_URI}/chatMessage.json`, theirMessageOnChat)

  if (!validate) {
    console.error(ajv.errors)
  }
  expect(validate).toBe(true)
})
