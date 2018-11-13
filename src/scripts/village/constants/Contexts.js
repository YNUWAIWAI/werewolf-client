// @flow
import {Context} from 'village'
import {VERSION} from './Version'
const BASE_URL = `https://werewolf.world/context/${VERSION}`

export const BASE: Context = `${BASE_URL}/base.jsonld`
export const ERROR: Context = `${BASE_URL}/error.jsonld`
export const AGENT: Context = `${BASE_URL}/agent.jsonld`
export const ROLE: Context = `${BASE_URL}/role.jsonld`
export const BOARD: Context = `${BASE_URL}/board.jsonld`
export const CHAT: Context = `${BASE_URL}/chat.jsonld`
export const VOTE: Context = `${BASE_URL}/vote.jsonld`
export const VOTING_RESULT: Context = `${BASE_URL}/votingResult.jsonld`
export const SCROLL: Context = `${BASE_URL}/scroll.jsonld`
