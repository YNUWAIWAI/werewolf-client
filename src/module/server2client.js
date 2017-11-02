let agents,
    date,
    phase,
    phaseTimeLimit,
    roles,
    timestamp

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

const getAllRoles = () => roles.filter(role => !role['@id'].includes('master'))

const getAllAgents = () => agents

const getPhaseInfo = () => ({
  date,
  phase,
  phaseTimeLimit
})

export {startDayConversation, startResultPhase, startDayVotePhase, startNightPhase, getAllRoles, getAllAgents, getPhaseInfo}
