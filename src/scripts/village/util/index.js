// @flow
import type {
  AgentStatus,
  Message,
  RoleId,
  Team
} from 'village'
import {
  UNPLAYABLE_ROLE,
  VILLAGER_TEAM,
  WEREHAMSTER_TEAM
} from '../constants/Role'

export const trimBaseUri = (id: string): string => {
  const match = (/\/(\w+)$/).exec(id)

  if (match && match[1]) {
    return match[1]
  }

  return ''
}

export const strToRoleId = (str: string): RoleId => {
  const roleId: RoleId[] = ['villager', 'seer', 'medium', 'hunter', 'mason', 'madman', 'werewolf', 'werehamster', 'master']
  const maybe = roleId.find(v => v === str.toLowerCase())

  if (!maybe) {
    throw new Error(`Unexpected RoleId: ${str}`)
  }

  return maybe
}

export const getMyAgent = <T: {name: {en: string}, isMine: boolean}>(agents: T[]): T => {
  const maybe = agents.find(a => a.isMine)

  if (!maybe) {
    throw Error('Not found my agent.')
  }

  return maybe
}

export const getPlayableAgents = <T: {name: {en: string}}>(agents: T[]): T[] => agents

export const getPlayableRoles = <T: {name: {en: string}}>(roles: T[]): T[] => roles.filter(r => !UNPLAYABLE_ROLE.includes(strToRoleId(r.name.en)))

export const getMyRole = <T: {name: {en: string}, isMine: boolean}>(roles: T[]): T => {
  const maybe = getPlayableRoles(roles).find(r => r.isMine)

  if (!maybe) {
    throw Error('Not found my role.')
  }

  return maybe
}

export const getTeam = (role: RoleId): Team => {
  if (VILLAGER_TEAM.includes(role)) {
    return 'villager'
  } else if (WEREHAMSTER_TEAM.includes(role)) {
    return 'werehamster'
  }

  return 'werewolf' // WEREWOLF_TEAM.includes(role)
}

export const getAgent = <T: {id: number, name: {en: string}}>(agents: T[], agentId: number): T => {
  const maybe = getPlayableAgents(agents).find(a => a.id === agentId)

  if (!maybe) {
    throw Error('Not found agent.')
  }

  return maybe
}

export const getRole = <T: {name: {en: string}}>(roles: T[], roleId: RoleId): T => {
  const maybe = getPlayableRoles(roles).find(r => strToRoleId(r.name.en) === roleId)

  if (!maybe) {
    throw Error('Not found role.')
  }

  return maybe
}

export const idGenerater = (prefix: string) => {
  let id

  return () => {
    if (id === undefined) {
      id = -1
    }
    id += 1

    return `${prefix}${id}`
  }
}

export const just = <T>(value: ?T): T => {
  if (value === undefined || value === null) {
    throw Error('Nothing')
  }

  return value
}

export const spaceSeparatedToCamelCase = (str: string) => str.trim().replace(/\s+(\w)/g, (_, p1) => p1.toUpperCase())

export const strToAgentStatus = (str: string): AgentStatus => {
  const agentStatus: AgentStatus[] = ['alive', 'dead', 'death by execution', 'death by attack', 'death by fear', 'unnatural death']
  const maybe = agentStatus.find(v => v === str)

  if (!maybe) {
    throw new Error(`Unexpected AgentStatus: ${str}`)
  }

  return maybe
}

export const strToMessage = (str: string): Message => {
  const message: Message[] = ['boardMessage', 'errorMessage', 'playerMessage', 'scrollMessage', 'systemMessage', 'voteMessage']
  const maybe = message.find(v => v === trimBaseUri(str))

  if (!maybe) {
    throw new Error(`Unexpected Message: ${str}`)
  }

  return maybe
}

export const xor = (a: boolean, b: boolean): boolean => a !== b
