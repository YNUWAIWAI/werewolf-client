import * as lobby from '../types'

const BASE_URL = 'https://werewolf.world/image/0.3/role_icons/50x50withTI/'

export const VILLAGER = {
  id: lobby.RoleId.villager,
  image: `${BASE_URL}/villager_50x50.png`
}
export const SEER = {
  id: lobby.RoleId.seer,
  image: `${BASE_URL}/seer_50x50.png`
}
export const MEDIUM = {
  id: lobby.RoleId.medium,
  image: `${BASE_URL}/medium_50x50.png`
}
export const HUNTER = {
  id: lobby.RoleId.hunter,
  image: `${BASE_URL}/hunter_50x50.png`
}
export const MASON = {
  id: lobby.RoleId.mason,
  image: `${BASE_URL}/mason_50x50.png`
}
export const MADMAN = {
  id: lobby.RoleId.madman,
  image: `${BASE_URL}/madman_50x50.png`
}
export const WEREWOLF = {
  id: lobby.RoleId.werewolf,
  image: `${BASE_URL}/werewolf_50x50.png`
}
export const WEREHAMSTER = {
  id: lobby.RoleId.werehamster,
  image: `${BASE_URL}/werehamster_50x50.png`
}

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
