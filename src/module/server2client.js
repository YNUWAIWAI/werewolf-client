let agents,
    date,
    rawjson,
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
  rawjson = json
}

const startResultPhase = json => {
  timestamp = json.timestamp
  roles = json.role
  agents = json.agent
  phase = json.phase
  date = json.date
  phaseTimeLimit = json.phaseTimeLimit
  rawjson = json
}

const startDayVotePhase = json => {
  timestamp = json.timestamp
  roles = json.role
  agents = json.agent
  phase = json.phase
  date = json.date
  phaseTimeLimit = json.phaseTimeLimit
  rawjson = json
}

const startNightPhase = json => {
  timestamp = json.timestamp
  roles = json.role
  agents = json.agent
  phase = json.phase
  date = json.date
  phaseTimeLimit = json.phaseTimeLimit
  rawjson = json
}

const getAllRoles = () =>
  roles
    .filter(role => !role['@id'].includes('master'))
    .sort((r1, r2) => {
      const order = [ 'villager', 'seer', 'medium', 'hunter', 'mason', 'madman', 'werewolf', 'werehumster' ]
      const id1 = (/\/(\w+)$/).exec(r1['@id'])[1]
      const id2 = (/\/(\w+)$/).exec(r2['@id'])[1]

      return order.indexOf(id1) > order.indexOf(id2)
    })

const getAllAgents = () => agents

const getPhaseInfo = () => {
  return {
    date,
    phase,
    phaseTimeLimit
  }
}

const getGameInfo = () => ({
  clientTimestamp: rawjson.clientTimestamp,
  date: rawjson.date,
  phase: rawjson.phase,
  phaseStartTime: rawjson.phaseStartTime,
  phaseTimeLimit: rawjson.phaseTimeLimit,
  serverTimestamp: rawjson.serverTimestamp,
  token: rawjson.token,
  totalNumberOfAgents: rawjson.totalNumberOfAgents,
  villageId: rawjson.villageId,
  villageName: rawjson.villageName
})

export {startDayConversation, startResultPhase, startDayVotePhase, startNightPhase, getAllRoles, getAllAgents, getPhaseInfo, getGameInfo}
