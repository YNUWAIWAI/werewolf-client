// @flow
import {VERSION} from './Version.js'

const BASE_URL = `https://werewolf.world/image/${VERSION}`

export const VILLAGER = {
  id: 'villager',
  image: `${BASE_URL}/villager.jpg`,
  name: {
    en: 'Villager',
    ja: '村人'
  }
}
export const SEER = {
  id: 'seer',
  image: `${BASE_URL}/seer.jpg`,
  name: {
    en: 'Seer',
    ja: '占い師'
  }
}
export const MEDIUM = {
  id: 'medium',
  image: `${BASE_URL}/medium.jpg`,
  name: {
    en: 'Medium',
    ja: '霊媒師'
  },
}
export const HUNTER = {
  id: 'hunter',
  image: `${BASE_URL}/hunter.jpg`,
  name: {
    en: 'Hunter',
    ja: 'ハンター'
  },
}
export const MASON = {
  id: 'mason',
  image: `${BASE_URL}/mason.jpg`,
  name: {
    en: 'Mason',
    ja: '共有者'
  },
}
export const MADMAN = {
  id: 'madman',
  image: `${BASE_URL}/madman.jpg`,
  name: {
    en: 'Madman',
    ja: '狂人'
  },
}
export const WEREWOLF = {
  id: 'werewolf',
  image: `${BASE_URL}/werewolf.jpg`,
  name: {
    en: 'Werewolf',
    ja: '人狼'
  },
}
export const WEREHUMSTER = {
  id: 'werehumster',
  image: `${BASE_URL}/werehumster.jpg`,
  name: {
    en: 'Werehumster',
    ja: 'ハムスター人間'
  },
}

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
