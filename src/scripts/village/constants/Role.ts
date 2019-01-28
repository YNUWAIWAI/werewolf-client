/* global village */
export const MASTER = village.RoleId.master
export const VILLAGER = village.RoleId.villager
export const SEER = village.RoleId.seer
export const MEDIUM = village.RoleId.medium
export const HUNTER = village.RoleId.hunter
export const MASON = village.RoleId.mason
export const MADMAN = village.RoleId.madman
export const WEREWOLF = village.RoleId.werewolf
export const WEREHAMSTER = village.RoleId.werehamster

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
