let agents,
    date,
    phase,
    phaseTimeLimit,
    rawjson,
    roles,
    timestamp

const storeJson = json => {
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

const getMine = () => {
  const agent = getAllAgents().filter(a => a.agentIsMine)[0]
  const role = getAllRoles().filter(r => r.roleIsMine)[0]

  return {
    agent,
    role
  }
}

const parsePhase = text => {
  if (text === 'none') {
    return {
      minute: 0,
      second: 0
    }
  } else if (text === 'debug') {
    return {
      minute: 0,
      second: 3
    }
  }
  const minute = (/(\d+)m/).exec(text) || 0
  const second = (/(\d+)s/).exec(text) || 0

  return {
    minute: minute[1],
    second: second[1]
  }
}

const getPhaseInfo = () =>
  ({
    date,
    phase,
    phaseTimeLimit: parsePhase(phaseTimeLimit)
  })

const getGameInfo = () => ({
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

export {
  storeJson,
  getAllRoles,
  getAllAgents,
  getMine,
  getPhaseInfo,
  getGameInfo
}
