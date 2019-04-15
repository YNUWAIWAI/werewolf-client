/* global lobby */
import {VERSION} from './Version'

const BASE_URL = `https://werewolf.world/image/${VERSION}`

export const VILLAGER = {
  id: lobby.RoleId.villager,
  image: `${BASE_URL}/villager.jpg`
}
export const SEER = {
  id: lobby.RoleId.seer,
  image: `${BASE_URL}/seer.jpg`
}
export const MEDIUM = {
  id: lobby.RoleId.medium,
  image: `${BASE_URL}/medium.jpg`
}
export const HUNTER = {
  id: lobby.RoleId.hunter,
  image: `${BASE_URL}/hunter.jpg`
}
export const MASON = {
  id: lobby.RoleId.mason,
  image: `${BASE_URL}/mason.jpg`
}
export const MADMAN = {
  id: lobby.RoleId.madman,
  image: `${BASE_URL}/madman.jpg`
}
export const WEREWOLF = {
  id: lobby.RoleId.werewolf,
  image: `${BASE_URL}/werewolf.jpg`
}
export const WEREHAMSTER = {
  id: lobby.RoleId.werehamster,
  image: `${BASE_URL}/werehamster.jpg`
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
