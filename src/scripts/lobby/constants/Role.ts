import {VERSION} from './Version'

const BASE_URL = `https://werewolf.world/image/${VERSION}`

export const VILLAGER = {
  id: lobby.RoleId.villager,
  image: `${BASE_URL}/villager.jpg`,
  name: {
    en: 'Villager',
    ja: '村人'
  }
}
export const SEER = {
  id: lobby.RoleId.seer,
  image: `${BASE_URL}/seer.jpg`,
  name: {
    en: 'Seer',
    ja: '占い師'
  }
}
export const MEDIUM = {
  id: lobby.RoleId.medium,
  image: `${BASE_URL}/medium.jpg`,
  name: {
    en: 'Medium',
    ja: '霊媒師'
  }
}
export const HUNTER = {
  id: lobby.RoleId.hunter,
  image: `${BASE_URL}/hunter.jpg`,
  name: {
    en: 'Hunter',
    ja: 'ハンター'
  }
}
export const MASON = {
  id: lobby.RoleId.mason,
  image: `${BASE_URL}/mason.jpg`,
  name: {
    en: 'Mason',
    ja: '共有者'
  }
}
export const MADMAN = {
  id: lobby.RoleId.madman,
  image: `${BASE_URL}/madman.jpg`,
  name: {
    en: 'Madman',
    ja: '狂人'
  }
}
export const WEREWOLF = {
  id: lobby.RoleId.werewolf,
  image: `${BASE_URL}/werewolf.jpg`,
  name: {
    en: 'Werewolf',
    ja: '人狼'
  }
}
export const WEREHAMSTER = {
  id: lobby.RoleId.werehamster,
  image: `${BASE_URL}/werehamster.jpg`,
  name: {
    en: 'Werehamster',
    ja: 'ハムスター人間'
  }
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
