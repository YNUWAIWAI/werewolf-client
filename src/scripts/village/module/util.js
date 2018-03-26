// @flow
import {UNPLAYABLE_AGENT} from '../constants/Agent'
import {UNPLAYABLE_ROLE} from '../constants/Role'

export const getPlayableAgents = <T: {'@id': string}>(agents: T[]): T[] =>
  agents.filter(a => !UNPLAYABLE_AGENT.includes(a['@id']))

export const getPlayableRoles = <T: {'@id': string}>(roles: T[]): T[] =>
  roles.filter(a => !UNPLAYABLE_ROLE.includes(a['@id']))

export const getMyAgent = <T: {'@id': string, agentIsMine: boolean}>(agents: T[]): T =>
  getPlayableAgents(agents)
    .filter(a => a.agentIsMine)[0]

export const getMyRole = <T: {'@id': string, roleIsMine: boolean}>(roles: T[]): T =>
  getPlayableRoles(roles)
    .filter(r => r.roleIsMine)[0]

export const trimBaseUri = (id: string): string => {
  const match = (/\/(\w+)$/).exec(id)

  if (match && match[1]) {
    return match[1]
  }

  return ''
}

export const xor = (a: boolean, b: boolean): boolean => a !== b
