import {getAllRoles, getAllAgents} from './server2client.js'

const generatePredictionTable = () => new Promise((resolve, reject) => {
  let dom = ['<div></div>']
  const roles = getAllRoles()
  const agents = getAllAgents()
  dom = dom.concat(roles.map(role => {
    const id = /\/(\w+)$/.exec(role['@id'])[1]
    return `
    <div data-role="${id}">
      <img alt="${role.name.ja}" src="${role.image}">
      ${role.number > 1 ? 'x'+role.number :''}
    </div>`
  }))
  const agentdom = agents.map(agent => `
  <div class="prediction--player" data-player="${agent.id}">
    <img src="${agent.image}">
    <span>${agent.name.ja}</span>
  </div>`
  )
  agentdom.forEach(agent => {
    dom = dom.concat(agent, roles.map(() => `<div data-state="unk"></div>`))
  })
  document.querySelector('.prediction').style.grid = `repeat(${1 + agents.length}, 1fr) / repeat(${1 + roles.length}, 1fr)`
  resolve(dom.join(''))
})

export {generatePredictionTable}
