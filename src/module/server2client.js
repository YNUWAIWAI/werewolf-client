let agents,
    rawjson,
    roles,
    results,
    postMortem

const storeJson = json => {
  if (json.phase === 'results') {
    results = json
  } else if (json.phase === 'post mortem') {
    postMortem = json
  }
  roles = json.role || roles
  agents = json.agent || agents
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

const getAllAgents = () =>
  agents.filter(agent => {
    const id = (/\/(\w+)$/).exec(agent['@id'])[1]

    return ![ 'Gert', 'Catalina' ].includes(id)
  })

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
    date: rawjson.date,
    phase: rawjson.phase,
    phaseTimeLimit: rawjson.phaseTimeLimit
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

const isGameEnd = () => Boolean(results || postMortem)

const getResultsAgents = () => {
  agents = results.agent

  return getAllAgents()
}

export {
  storeJson,
  isGameEnd,
  getAllRoles,
  getAllAgents,
  getMine,
  getPhaseInfo,
  getResultsAgents,
  getGameInfo
}
