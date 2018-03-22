// @flow
import {UNPLAYABLE_AGENT} from '../constants/Agent'
import {UNPLAYABLE_ROLE} from '../constants/Role'
export const getPlayableAgents = (agents: Agent[]): Agent[] => agents.filter(a => !UNPLAYABLE_AGENT.includes(a['@id']))
export const getPlayableRoles = (agents: Role[]): Role[] => agents.filter(a => !UNPLAYABLE_ROLE.includes(a['@id']))
export const getMyAgent = (agents: Agent[]): Agent => getPlayableAgents(agents).filter(a => a.agentIsMine)[0]
export const getMyRole = (roles: Role[]): Role => getPlayableRoles(roles).filter(r => r.roleIsMine)[0]
export const trimBaseUri: <T>(string) => T = id => (/\/(\w+)$/).exec(id)[1]
export const xor = (a: boolean, b: boolean): boolean => a !== b
