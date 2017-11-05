import {getAllAgents, getAllRoles, getMine} from './server2client.js'
import {generateJson} from './client2server.js'
import {send} from './websocket.js'
import {trimBaseUri} from './util.js'

let predictionTable
const initPredictionTable = () => {
  const roles = getAllRoles()
  const agents = getAllAgents()
  const table = {}

  agents.forEach(agent => {
    table[agent.id] = {}
    roles.forEach(role => {
      const roleId = trimBaseUri(role['@id'])

      if (agent.agentIsMine && role.roleIsMine) {
        table[agent.id][roleId] = 'fix'
      } else if (agent.agentIsMine && !role.roleIsMine) {
        table[agent.id][roleId] = 'fill'
      } else if (!agent.agentIsMine && role.roleIsMine && role.numberOfAgents === 1) {
        table[agent.id][roleId] = 'fill'
      } else {
        table[agent.id][roleId] = '?'
      }
    })
  })
  predictionTable = table
}

const updatePredictionTable = () => {
  getAllAgents()
    .filter(agent => agent.status !== 'alive')
    .forEach(agent => {
      document.querySelecter(`.prediction--player[ data-player = ${agent.id} ]`).classList.add('dead')
    })
  const roleId = trimBaseUri(getMine().role['@id'])

  if ([ 'seer', 'medium' ].includes(roleId)) {
    getAllRoles().forEach(role => {
      const roleId = trimBaseUri(role['@id'])
      const agentId = role.board.boardAgent.boardAgentId

      predictionTable[agentId][roleId] = role.board.boardPolarity === 'positive' ? 'fix' : 'fill'
      const cell = document.querySelecter(`.prediction > div[ data-role = ${roleId} ][ data-player = ${agentId} ]`)

      cell.dataset.state = predictionTable[agentId][roleId]
      cell.dataset.date = role.board.boardDate
    })
  }
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

const handleBoardClick = e => {
  const state = [ '?', 'Δ', 'O', 'X' ]
  const currentState = e.target.dataset.state

  if (!state.includes(currentState)) {
    e.target.removeEventListener('click', handleBoardClick)

    return
  }
  const nextIndex = (state.indexOf(currentState) + 1) % state.length
  const nextState = state[nextIndex]

  e.target.dataset.state = nextState
  predictionTable[e.target.dataset.player][e.target.dataset.role] = e.target.dataset.state
  const mine = getMine()
  const data = {
    agent: mine.agent,
    prediction: nextState,
    role: mine.role
  }

  send(generateJson(data, 'board'))
}

export {generatePredictionTable, handleBoardClick, updatePredictionTable}
