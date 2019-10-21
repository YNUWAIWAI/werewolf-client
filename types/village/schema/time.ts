/*
  'https://werewolf.world/village/schema/0.3/time.json'
*/
import {
  Phase
} from '..'

export interface Time {
  '@id': string
  date: number
  phase: Phase
}
