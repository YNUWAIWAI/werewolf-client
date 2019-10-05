import * as lobby from '../types'
import Cast from '../constants/Cast'
import {anonymousVillageName} from '../constants/AnonymousVillageName'

export const getCastFromNumberOfPlayers = (numberOfPlayers: number): lobby.Cast[keyof lobby.Cast] => {
  const availableNumber: (keyof lobby.Cast)[] = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
  const maybe = availableNumber.find(v => v === String(numberOfPlayers))

  if (!maybe) {
    throw new Error('Unexpected number of players.')
  }

  return Cast[maybe]
}
export const getAnonymousVillageName = () => anonymousVillageName[Math.floor(Math.random() * anonymousVillageName.length)]
