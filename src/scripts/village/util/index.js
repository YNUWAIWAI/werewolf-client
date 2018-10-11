// @flow
import {UNPLAYABLE_AGENT} from '../constants/Agent'
import {UNPLAYABLE_ROLE} from '../constants/Role'

export const getPlayableAgents = <T: {'@id': string}>(agents: T[]): T[] =>
  agents.filter(a => !UNPLAYABLE_AGENT.includes(a['@id']))

export const getPlayableRoles = <T: {'@id': string}>(roles: T[]): T[] =>
  roles.filter(a => !UNPLAYABLE_ROLE.includes(a['@id']))

export const getMyAgent = <T: {'@id': string, agentIsMine: boolean}>(agents: T[]): T => {
  const maybe = getPlayableAgents(agents).find(a => a.agentIsMine)

  if (!maybe) {
    throw Error('Not found my agent.')
  }

  return maybe
}

export const getMyRole = <T: {'@id': string, roleIsMine: boolean}>(roles: T[]): T => {
  const maybe = getPlayableRoles(roles).find(r => r.roleIsMine)

  if (!maybe) {
    throw Error('Not found my role.')
  }

  return maybe
}

export const getVotedAgent = <T: {'@id': string, id: number}>(agents: T[], agentId: number): T => {
  const maybe = getPlayableAgents(agents).find(a => a.id === agentId)

  if (!maybe) {
    throw Error('Not found voted agent.')
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

export const trimBaseUri = (id: string): string => {
  const match = (/\/(\w+)$/).exec(id)

  if (match && match[1]) {
    return match[1]
  }

  return ''
}

export const xor = (a: boolean, b: boolean): boolean => a !== b
