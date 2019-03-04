/* global village */
const MASTER = village.RoleId.master
const VILLAGER = village.RoleId.villager
const SEER = village.RoleId.seer
const MEDIUM = village.RoleId.medium
const HUNTER = village.RoleId.hunter
const MASON = village.RoleId.mason
const MADMAN = village.RoleId.madman
const WEREWOLF = village.RoleId.werewolf
const WEREHAMSTER = village.RoleId.werehamster

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
export const AVAILABLE_FOR_LIMITED_CHAT = [
  WEREWOLF,
  SEER,
  HUNTER
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
