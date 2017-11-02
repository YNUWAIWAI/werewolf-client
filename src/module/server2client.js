const baseURI = 'https://werewolf.world/example/0.1/server2client'
let timestamp
let roles
let agents
let phase
let date
let phaseTimeLimit

const startDayConversation = async () => {
  await fetch(`${baseURI}/first-day-conversation.jsonld`)
    .then(res => res.json())
    .then(json => {
      timestamp = json.timestamp
      roles = json.role
      agents = json.agent
      phase = json.phase
      date = json.date
      phaseTimeLimit = json.phaseTimeLimit
    })
}

const startResultPhase = async () => {
  await fetch(`${baseURI}/results.jsonld`)
    .then(res => res.json())
    .then(json => {
      timestamp = json.timestamp
      roles = json.role
      agents = json.agent
      phase = json.phase
      date = json.date
      phaseTimeLimit = json.phaseTimeLimit
    })
}

const startDayVotePhase = async () => {
  await fetch(`${baseURI}/day-vote.jsonld`)
    .then(res => res.json())
    .then(json => {
      timestamp = json.timestamp
      roles = json.role
      agents = json.agent
      phase = json.phase
      date = json.date
      phaseTimeLimit = json.phaseTimeLimit
    })
}

const startNightPhase = async () => {
  await fetch(`${baseURI}/night.jsonld`)
    .then(res => res.json())
    .then(json => {
      timestamp = json.timestamp
      roles = json.role
      agents = json.agent
      phase = json.phase
      date = json.date
      phaseTimeLimit = json.phaseTimeLimit
    })
}

const recieveChat = async () => {
  let res
  await fetch(`${baseURI}/my-message-on-chat.jsonld`)
    .then(res => res.json())
    .then(json => {
      res = json
    })

  return res
}

const getAllRoles = () => {
  return roles.filter(role => !role['@id'].includes('master'))
}

const getAllAgents = () => {
  return agents
}

const getPhaseInfo = () => {
  return {
    phase,
    date,
    phaseTimeLimit
  }
}

export {startDayConversation, startResultPhase, startDayVotePhase, startNightPhase, recieveChat, getAllRoles, getAllAgents, getPhaseInfo}
