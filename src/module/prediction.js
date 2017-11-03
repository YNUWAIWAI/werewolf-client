import {getAllRoles, getAllAgents} from './server2client.js'

let predictionTable
const initPredictionTable = () => {
  const roles = getAllRoles()
  const agents = getAllAgents()
  const table = {}

  agents.forEach(agent => {
    table[agent.id] = {}
    roles.forEach(role => {
      const id = (/\/(\w+)$/).exec(role['@id'])[1]

      if (agent.agentIsMine && role.roleIsMine) {
        table[agent.id][id] = 'fix'
      } else if (agent.agentIsMine && !role.roleIsMine) {
        table[agent.id][id] = 'fill'
      } else if (!agent.agentIsMine && role.roleIsMine && role.numberOfAgents === 1) {
        table[agent.id][id] = 'fill'
      } else {
        table[agent.id][id] = 'unk'
      }
    })
  })
  predictionTable = table
}

const generatePredictionTable = () => {
  let dom = ['<div></div>']
  const roles = getAllRoles()
  const agents = getAllAgents()

  dom = dom.concat(roles.map(role => {
    const id = (/\/(\w+)$/).exec(role['@id'])[1]

    return `
      <div data-role="${id}" data-tooltip="${role.name.ja}">
        <img src="${role.image}">
        ${role.numberOfAgents > 0 ? '&times' + role.numberOfAgents : ''}
      </div>`
  }))
  initPredictionTable()
  const agentdom = agents.map(agent => {
    const d1 = [`
      <div class="prediction--player" data-player="${agent.id}">
        <img src="${agent.image}">
        <span>${agent.name.ja}</span>
      </div>`]
    const d2 = roles.map(role => {
      const id = (/\/(\w+)$/).exec(role['@id'])[1]
      const state = predictionTable[agent.id][id]

      return `<div data-role="${id}" data-player="${agent.id}" data-state="${state}" data-date="1"></div>`
    })

    return d1.concat(d2)
  })

  dom = dom.concat(agentdom.reduce((a,b) => a.concat(b)))
  document.querySelector('.prediction').style.grid = `repeat(${1 + agents.length}, 1fr) / repeat(${1 + roles.length}, 1fr)`

  return dom.join('')
}

export {generatePredictionTable}
