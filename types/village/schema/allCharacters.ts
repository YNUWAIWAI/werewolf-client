/*
  'https://werewolf.world/village/schema/0.3/allCharacters.json'
*/
import {Character} from './character'
import {
  Context
} from '..'

export interface AllCharacters {
  '@context': Context.Character
  '@id': string
  character: {
    '@id': Character['@id']
    name: Character['name']
    fullName: Character['fullName']
    gender: Character['gender']
    image: Character['image']
  }[]
}
