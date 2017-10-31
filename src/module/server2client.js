const baseURI = 'https://werewolf.world/example/0.1/server2client'
let timestamp
let roles
let agents
let phase
let date
let phaseTimeLimit

const dayStart = async () => {
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

const getResult = async () => {
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

export {dayStart, getResult, startVotePhase, getAllRoles, getAllAgents, getPhaseInfo}
