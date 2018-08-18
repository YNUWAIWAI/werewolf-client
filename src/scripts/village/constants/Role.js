// @flow
import type {RoleId} from 'village'
import {VERSION} from './Version.js'
import {trimBaseUri} from '../util'

const BASE_URL = `https://werewolf.world/resource/${VERSION}`

export const MASTER = `${BASE_URL}/master`
export const VILLAGER = `${BASE_URL}/villager`
export const SEER = `${BASE_URL}/seer`
export const MEDIUM = `${BASE_URL}/medium`
export const HUNTER = `${BASE_URL}/hunter`
export const MASON = `${BASE_URL}/mason`
export const MADMAN = `${BASE_URL}/madman`
export const WEREWOLF = `${BASE_URL}/werewolf`
export const WEREHUMSTER = `${BASE_URL}/werehumster`

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
  WEREHUMSTER
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

export const getRoleId = (str: string): RoleId => {
  const id = trimBaseUri(str)
  const roleId: RoleId[] = ['villager', 'seer', 'medium', 'hunter', 'mason', 'madman', 'werewolf', 'werehumster']
  const maybe = roleId.find(v => v === id)

  if (!maybe) {
    throw new Error('Unexpected role id.')
  }

  return maybe
}
