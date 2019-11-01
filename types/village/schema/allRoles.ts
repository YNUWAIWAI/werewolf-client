/*
  'https://werewolf.world/village/schema/0.3/allRoles.json'
*/
import {Context} from '..'
import {Role} from './role'

export interface AllRoles {
  '@context': Context.Role
  '@id': string
  role: {
    '@id': Role['@id']
    image: Role['image']
    name: Role['name']
  }[]
}
