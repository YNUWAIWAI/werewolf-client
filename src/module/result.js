import {getAllAgents} from './server2client.js'

const generateResultTable = () => {
  let dom = []
  const agents = getAllAgents()

  agents.forEach(agent => {
    let status = agent.status.split(' ')
    const index = status.indexOf('by')

    if (index >= 0) {
      status[index] = `<span style="font-size: 1.5rem;">${status[index]}`
      status.push('</span>')
    }
    status = status.join(' ')
    dom.push(`<div data-result="image" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}"><img src="${agent.image}"></div>`)
    dom.push(`<div data-result="name" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}">${agent.name.ja}</div>`)
    dom.push(`<div data-result="status" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}">${status}</div>`)
    dom.push(`<div data-result="result" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}">${agent.result}</div>`)
    dom.push(`<div data-result="roleImage" data-tooltip="${agent.role.roleName.ja}" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}"><img src="${agent.role.roleImage}"></div>`)
    dom.push(`<div data-result="userAvatar" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}"><img src="${agent.userAvatar}"></div>`)
    dom.push(`<div data-result="userName" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}">${agent.userName}</div>`)
  })

  return dom.join('')
}

export {generateResultTable}
