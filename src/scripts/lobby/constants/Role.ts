import {ImagePath} from './ImagePath'
import {lobby} from '../types'

export const VILLAGER = {
  id: lobby.RoleId.villager,
  image: ImagePath.Role.villager
}
export const SEER = {
  id: lobby.RoleId.seer,
  image: ImagePath.Role.seer
}
export const MEDIUM = {
  id: lobby.RoleId.medium,
  image: ImagePath.Role.medium
}
export const HUNTER = {
  id: lobby.RoleId.hunter,
  image: ImagePath.Role.hunter
}
export const MASON = {
  id: lobby.RoleId.mason,
  image: ImagePath.Role.mason
}
export const MADMAN = {
  id: lobby.RoleId.madman,
  image: ImagePath.Role.madman
}
export const WEREWOLF = {
  id: lobby.RoleId.werewolf,
  image: ImagePath.Role.werewolf
}
export const WEREHAMSTER = {
  id: lobby.RoleId.werehamster,
  image: ImagePath.Role.werehamster
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
