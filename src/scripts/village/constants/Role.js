// @flow
import type {RoleId} from 'village'
import {trimBaseUri} from '../util'

export const MASTER = 'master'
export const VILLAGER: RoleId = 'villager'
export const SEER: RoleId = 'seer'
export const MEDIUM: RoleId = 'medium'
export const HUNTER: RoleId = 'hunter'
export const MASON: RoleId = 'mason'
export const MADMAN: RoleId = 'madman'
export const WEREWOLF: RoleId = 'werewolf'
export const WEREHAMSTER: RoleId = 'werehamster'

export const UNPLAYABLE_ROLE = [
  MASTER
]
export const ORDERED_ROLE_LIST = [
  VILLAGER,
  SEER,
  MEDIUM,
  HUNTER,
  MASON,
  MADMAN,
  WEREWOLF,
  WEREHAMSTER
]
export const WEREWOLF_SIDE = [
  MADMAN,
  WEREWOLF
]
export const AVAILABLE_FOR_LIMITED_CHAT = [
  WEREWOLF,
  SEER,
  HUNTER
]

export const PREDICTION = [
  SEER,
  MEDIUM
]

export const VILLAGER_TEAM = [
  VILLAGER,
  SEER,
  MEDIUM,
  HUNTER,
  MASON
]

export const WEREWOLF_TEAM = [
  MADMAN,
  WEREWOLF
]

export const WEREHAMSTER_TEAM = [
  WEREHAMSTER
]

export const getRoleId = (str: string): RoleId => {
  const id = trimBaseUri(str)
  const roleId: RoleId[] = ['villager', 'seer', 'medium', 'hunter', 'mason', 'madman', 'werewolf', 'werehamster']
  const maybe = roleId.find(v => v === id)

  if (!maybe) {
    throw new Error('Unexpected role id.')
  }

  return maybe
}
