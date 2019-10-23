import {
  UNPLAYABLE_ROLE,
  VILLAGER_TEAM,
  WEREHAMSTER_TEAM
} from '../constants/Role'
import {village} from '../types'

export const countText = (text: string): number => Array.of(... text).length
export const getBaseUri = (id: string): string => {
  const match = (/^(?<baseUri>[^\n]+)\/\w+$/).exec(id)

  if (match && match.groups) {
    return match.groups.baseUri
  }

  return ''
}
export const getInitial = (name: string) => name.toUpperCase()[0]
export const trimBaseUri = (id: string): string => {
  const match = (/\/(?<path>\w+)$/).exec(id)

  if (match && match.groups) {
    return match.groups.path
  }

  return ''
}

type PublicChannel = 'anonymousAudience' | 'onymousAudience' | 'public'

interface getChannelFromInputChennelArg {
  inputChannel: village.InputChannel
  role?: village.RoleId
  publicChannel?: PublicChannel
}

export const getChannelFromInputChennel = ({inputChannel, role, publicChannel}: getChannelFromInputChennelArg): village.Channel => {
  const channel = [
    village.Channel.anonymousAudience,
    village.Channel.grave,
    village.Channel.hunter,
    village.Channel.master,
    village.Channel.onymousAudience,
    village.Channel.private,
    village.Channel.public,
    village.Channel.seer,
    village.Channel.werewolf
  ]
  const maybe = channel.find(v => {
    switch (inputChannel) {
      case village.InputChannel.werewolf: {
        switch (role) {
          case village.RoleId.hunter:
            return v === village.Channel.hunter
          case village.RoleId.seer:
            return v === village.Channel.seer
          case village.RoleId.werewolf:
            return v === village.Channel.werewolf
          default:
            return false
        }
      }
      case village.InputChannel.public:
      case village.InputChannel.postMortem:
        return v === (publicChannel || 'public')
      case village.InputChannel.grave:
        return v === village.Channel.grave
      case village.InputChannel.private:
        return v === village.Channel.private
      default:
        return false
    }
  })

  if (!maybe) {
    throw new Error(`Unexpected channel: ${inputChannel}`)
  }

  return maybe
}

export const getChatChannelFromChannel = (channel: village.Channel): village.ChatChannel => {
  const chatChannel = [
    village.ChatChannel.grave,
    village.ChatChannel.master,
    village.ChatChannel.private,
    village.ChatChannel.public,
    village.ChatChannel.werewolf
  ]
  const table = {
    [village.Channel.anonymousAudience]: village.ChatChannel.public,
    [village.Channel.grave]: village.ChatChannel.grave,
    [village.Channel.hunter]: village.ChatChannel.werewolf,
    [village.Channel.master]: village.ChatChannel.master,
    [village.Channel.onymousAudience]: village.ChatChannel.public,
    [village.Channel.private]: village.ChatChannel.private,
    [village.Channel.public]: village.ChatChannel.public,
    [village.Channel.seer]: village.ChatChannel.werewolf,
    [village.Channel.werewolf]: village.ChatChannel.werewolf
  }
  const maybe = chatChannel.find(v => v === table[channel])

  if (!maybe) {
    throw new Error(`Unexpected channel: ${channel}`)
  }

  return maybe
}

export const getInputChannelFromChannel = (channel: village.Channel): village.InputChannel => {
  if (channel === village.Channel.master) {
    throw new Error(`channel === '${channel}' is undefined behavior`)
  }
  const inputChannel = [
    village.InputChannel.grave,
    village.InputChannel.postMortem,
    village.InputChannel.private,
    village.InputChannel.public,
    village.InputChannel.werewolf
  ]
  const table = {
    [village.Channel.anonymousAudience]: village.InputChannel.public,
    [village.Channel.grave]: village.InputChannel.grave,
    [village.Channel.hunter]: village.InputChannel.public,
    [village.Channel.onymousAudience]: village.InputChannel.public,
    [village.Channel.private]: village.InputChannel.private,
    [village.Channel.public]: village.InputChannel.public,
    [village.Channel.seer]: village.InputChannel.public,
    [village.Channel.werewolf]: village.InputChannel.werewolf
  }
  const maybe = inputChannel.find(v => v === table[channel])

  if (!maybe) {
    throw new Error(`Unexpected channel: ${channel}`)
  }

  return maybe
}

export const strToRoleId = (str: string): village.RoleId => {
  const roleId = [
    village.RoleId.villager,
    village.RoleId.seer,
    village.RoleId.medium,
    village.RoleId.hunter,
    village.RoleId.mason,
    village.RoleId.madman,
    village.RoleId.werewolf,
    village.RoleId.werehamster,
    village.RoleId.master
  ]
  const maybe = roleId.find(v => v === str.toLowerCase())

  if (!maybe) {
    throw new Error(`Unexpected RoleId: ${str}`)
  }

  return maybe
}

export const getMyAgent = <T extends {name: village.LanguageMap, isMine?: boolean}>(agents: T[]): T => {
  const maybe = agents.find(a => typeof a.isMine !== 'undefined' && a.isMine)

  if (!maybe) {
    throw Error('Not found my agent.')
  }

  return maybe
}

export const getPlayableAgents = <T extends {name: village.LanguageMap}>(agents: T[]): T[] => agents

export const getPlayableRoles = <T extends {name: village.LanguageMap}>(roles: T[]): T[] => roles.filter(r => !UNPLAYABLE_ROLE.includes(strToRoleId(r.name.en)))

export const getMyRole = <T extends {name: village.LanguageMap, isMine: boolean}>(roles: T[]): T => {
  const maybe = getPlayableRoles(roles).find(r => r.isMine)

  if (!maybe) {
    throw Error('Not found my role.')
  }

  return maybe
}

export const getTeam = (role: village.RoleId): village.Team => {
  if (VILLAGER_TEAM.includes(role)) {
    return village.Team.villager
  } else if (WEREHAMSTER_TEAM.includes(role)) {
    return village.Team.werehamster
  }

  return village.Team.werewolf // WEREWOLF_TEAM.includes(role)
}

export const getText = ({language, languageMap}: {language: village.Language, languageMap: village.LanguageMap}): string => {
  const maybe = languageMap[language]

  if (!maybe) {
    console.error(`Not found language: ${language}`)

    return languageMap.en
  }

  return maybe
}

export const idGenerater = (prefix: string) => {
  let id: number | undefined

  return () => {
    if (typeof id === 'undefined') {
      id = -1
    }
    id += 1

    return `${prefix}${id}`
  }
}

export const isValidTextLength = (text: string, upperLimit: number, lowerLimit: number): boolean => {
  const textCount = countText(text)

  return textCount <= upperLimit && textCount >= lowerLimit
}

export const just = <T>(value: T | undefined | null): T => {
  if (typeof value === 'undefined' || value === null) {
    throw Error('Nothing')
  }

  return value
}

export const spaceSeparatedToCamelCase = (str: string) => str.trim().replace(/\s+(?<head>\w)/g, (_, p1) => p1.toUpperCase())

export const strToAgentStatus = (str: string): village.AgentStatus => {
  const agentStatus = [
    village.AgentStatus.alive,
    village.AgentStatus.dead,
    village.AgentStatus.deathByAttack,
    village.AgentStatus.deathByExecution,
    village.AgentStatus.deathByFear,
    village.AgentStatus.unnaturalDeath
  ]
  const maybe = agentStatus.find(v => v === str)

  if (!maybe) {
    throw new Error(`Unexpected AgentStatus: ${str}`)
  }

  return maybe
}

export const strToMessage = (str: string): village.Message => {
  const message = [
    village.Message.boardMessage,
    village.Message.chatMessage,
    village.Message.errorMessage,
    village.Message.flavorTextMessage,
    village.Message.scrollMessage,
    village.Message.systemMessage,
    village.Message.voteMessage
  ]
  const maybe = message.find(v => v === trimBaseUri(str))

  if (!maybe) {
    throw new Error(`Unexpected Message: ${str}`)
  }

  return maybe
}

export const xor = (a: boolean, b: boolean): boolean => a !== b
