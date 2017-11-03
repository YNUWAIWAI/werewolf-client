import {getGameInfo, getMine} from './server2client.js'

const getMyAgent = () => {
  const mine = getMine()

  return {
    '@id': mine.agent['@id'],
    'myAgentId': mine.agent.id,
    'myAgentImage': mine.agent.image,
    'myAgentName': mine.agent.name,
    'myRole': {
      '@id': mine.role['@id'],
      'myRoleImage': mine.role.image,
      'myRoleName': mine.role.name
    }
  }
}

const getBoardAgent = agent =>
  ({
    '@id': agent['@id'],
    'agentId': agent.id,
    'agentImage': agent.image,
    'agentName': agent.name
  })

const getBoardRole = role =>
  ({
    '@id': role['@id'],
    'agentImage': role.image,
    'agentName': role.name
  })

const getChatAgent = () => {
  const mine = getMine()

  return {
    '@id': mine.agent['@id'],
    'chatAgentId': mine.agent.id,
    'chatAgentImage': mine.agent.image,
    'chatAgentName': mine.agent.name
  }
}

const getVotedAgent = agent =>
  ({
    '@id': agent['@id'],
    'votedAgentId': agent.id,
    'votedAgentImage': agent.image,
    'votedAgentName': agent.name
  })

const getTimeStamp = () => {
  const zeropad = num => String(num).padStart(2, '0')
  const now = new Date()
  const Y = now.getFullYear()
  const M = zeropad(now.getMonth() + 1)
  const D = zeropad(now.getDate())
  const h = zeropad(now.getHours())
  const m = zeropad(now.getMinutes())
  const s = zeropad(now.getSeconds())
  const ms = String(now.getMilliseconds()).padStart(3, '0')
  const to = now.getTimezoneOffset()
  const tz = `${to >= '0' ? '-' : '+'}${zeropad(Math.floor(Math.abs(to) / 60))}:${zeropad(to % 60)}`

  return `${Y}-${M}-${D}T${h}:${m}:${s}.${ms}${tz}`
}

const genBoardInfo = data =>
  ({
    '@context': [
      'https://werewolf.world/context/0.1/base.jsonld',
      'https://werewolf.world/context/0.1/board.jsonld'
    ],
    '@id': 'https://werewolf.world/resource/0.1/boardMessage',
    'boardAgent': getBoardAgent(data.agent),
    'boardPrediction': data.prediction,
    'boardRole': getBoardRole(data.role),
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': 'private',
    'myAgent': getMyAgent()
  })

const genChatInfo = data =>
  ({
    '@context': [
      'https://werewolf.world/context/0.1/base.jsonld',
      'https://werewolf.world/context/0.1/chat.jsonld'
    ],
    '@id': 'https://werewolf.world/resource/0.1/playerMessage',
    'chatAgent': getChatAgent(),
    'chatCharacterLimit': 140,
    'chatIsMine': true,
    'chatIsOver': false,
    'chatLanguage': 'ja',
    'chatText': data.text,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': data.channel,
    'myAgent': getMyAgent()
  })

const genVoteInfo = (data) =>
  ({
    '@context': [
      'https://werewolf.world/context/0.1/base.jsonld',
      'https://werewolf.world/context/0.1/vote.jsonld'
    ],
    '@id': 'https://werewolf.world/resource/0.1/voteMessage',
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': 'private',
    'myAgent': getMyAgent(),
    'votedAgent': getVotedAgent(data.agent)
  })

const generateJson = (data, kind) => {
  const json = getGameInfo()

  json.clientTimeStamp = getTimeStamp()
  json.directionality = 'client to server'
  json.extensionalDisclosureRange = []
  if (kind === 'board') {
    Object.assign(json, genBoardInfo(data))
  } else if (kind === 'chat') {
    Object.assign(json, genChatInfo(data))
  } else if (kind === 'vote') {
    Object.assign(json, genVoteInfo(data))
  } else {
    Object.assign(json, {})
  }

  return json
}

export {generateJson}
