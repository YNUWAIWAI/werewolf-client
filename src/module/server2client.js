const baseURI = 'https://werewolf.world/example/0.1/server2client'
let timestamp
let roles
let agents

const dayStart = async () => {
  await fetch(`${baseURI}/first-day-conversation.jsonld`)
    .then(res => res.json())
    .then(json => {
      timestamp = json.timestamp
      roles = json.role
      agents = json.agent
    })
}

const getResult = async () => {
  await fetch(`${baseURI}/results.jsonld`)
    .then(res => res.json())
    .then(json => {
      timestamp = json.timestamp
      roles = json.role
      agents = json.agent
    })
}

const getAllRoles = () => {
  return roles.filter(role => !role['@id'].includes('master'))
}

const getAllAgents = () => {
  return agents
}


export {dayStart, getResult, getAllRoles, getAllAgents}
