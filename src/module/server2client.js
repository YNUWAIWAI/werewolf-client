let agents,
    date,
    phase,
    phaseTimeLimit,
    rawjson,
    roles,
    timestamp

const storeJson = json => {
  timestamp = json.timestamp || timestamp
  roles = json.role || roles
  agents = json.agent || agents
  phase = json.phase || phase
  date = json.date || date
  phaseTimeLimit = json.phaseTimeLimit || phaseTimeLimit
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

const getPhaseInfo = () =>
  ({
    date,
    phase,
    phaseTimeLimit
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
