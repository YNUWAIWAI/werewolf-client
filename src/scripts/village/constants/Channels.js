// @flow
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
  const inputChannel: ChatChannel[] = [ 'grave', 'limited', 'master', 'private', 'public' ]
  const maybe = inputChannel.find(v => v === Channels[channel])

  if (!maybe) {
    throw new Error('Unexpected channel.')
  }

  return maybe
}

export const getInputChannel = (channel: Channel): InputChannel => {
  const inputChannel: InputChannel[] = [ 'limited', 'private', 'public' ]
  const maybe = inputChannel.find(v => v === Channels[channel])

  if (!maybe) {
    throw new Error('Unexpected channel.')
  }

  return maybe
}

