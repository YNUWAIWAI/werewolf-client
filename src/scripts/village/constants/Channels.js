// @flow
import type {Channel, ChatChannel, InputChannel, RoleId} from 'village'

export const Channels = {
  anonymousAudience: 'public',
  grave: 'grave',
  hunter: 'limited',
  master: 'master',
  onymousAudience: 'public',
  private: 'private',
  public: 'public',
  seer: 'limited',
  werewolf: 'limited'
}

export const getChatChannel = (channel: Channel): ChatChannel => {
  const chatChannel: ChatChannel[] = ['grave', 'limited', 'master', 'private', 'public']
  const maybe = chatChannel.find(v => v === Channels[channel])

  if (!maybe) {
    throw new Error('Unexpected channel.')
  }

  return maybe
}

export const getInputChannel = (channel: Channel): InputChannel => {
  const inputChannel: InputChannel[] = ['limited', 'private', 'public']
  const maybe = inputChannel.find(v => v === Channels[channel])

  if (!maybe) {
    throw new Error('Unexpected channel.')
  }

  return maybe
}

type PublicChannel = 'anonymousAudience' | 'onymousAudience' | 'public'

export const getChannelFromInputChennel = (inputChannel: InputChannel, role: RoleId, publicChannel: PublicChannel = 'public'): Channel => {
  const channel: Channel[] = ['anonymousAudience', 'grave', 'hunter', 'master', 'onymousAudience', 'private', 'public', 'seer', 'werewolf']
  const maybe = channel.find(v => {
    if (inputChannel === 'limited') {
      return v === role
    }
    if (inputChannel === 'public') {
      return v === publicChannel
    }

    return v === inputChannel
  })

  if (!maybe) {
    throw new Error('Unexpected channel.')
  }

  return maybe
}

