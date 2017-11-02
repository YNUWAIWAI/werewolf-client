const baseURI = 'https://werewolf.world/example/0.1/server2client'
let timestamp
let roles
let agents
let phase
let date
let phaseTimeLimit

const startDayConversation = json => {
  timestamp = json.timestamp
  roles = json.role
  agents = json.agent
  phase = json.phase
  date = json.date
  phaseTimeLimit = json.phaseTimeLimit
}

const startResultPhase = json => {
  timestamp = json.timestamp
  roles = json.role
  agents = json.agent
  phase = json.phase
  date = json.date
  phaseTimeLimit = json.phaseTimeLimit
}

const startDayVotePhase = json => {
  timestamp = json.timestamp
  roles = json.role
  agents = json.agent
  phase = json.phase
  date = json.date
  phaseTimeLimit = json.phaseTimeLimit
}

const startNightPhase = json => {
  timestamp = json.timestamp
  roles = json.role
  agents = json.agent
  phase = json.phase
  date = json.date
  phaseTimeLimit = json.phaseTimeLimit
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

export {startDayConversation, startResultPhase, startDayVotePhase, startNightPhase, getAllRoles, getAllAgents, getPhaseInfo}
