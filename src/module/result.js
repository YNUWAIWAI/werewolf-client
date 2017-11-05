import {getResultsAgents} from './server2client.js'
import {trimBaseUri} from './util.js'

const generateResultTable = () => {
  let dom = []
  const agents = getResultsAgents()
  const summary = (() => {
    const mine = agents.filter(agent => agent.agentIsMine)[0]
    const isWerewolfSide = [ 'werewolf', 'madman' ].includes(trimBaseUri(mine.role['@id']))
    const isWin = mine.result === 'win'

    return `人間側の${isWerewolfSide ^ isWin ? '勝利' : '敗北'}のため，あなたは${isWin ? '勝ち' : '負け'}ました`
  })()

  dom.push(`<div data-result="summary" class="result--cell">${summary}</div>`)
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
    dom.push(`<div data-result="status" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}">${status === 'alive' ? '生存' : '死亡'}</div>`)
    dom.push(`<div data-result="result" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}">${agent.result === 'win' ? '勝利' : '敗北'}</div>`)
    dom.push(`<div data-result="roleImage" data-tooltip="${agent.role.roleName.ja}" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}"><img src="${agent.role.roleImage}"></div>`)
    dom.push(`<div data-result="userAvatar" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}"><img src="${agent.userAvatar}"></div>`)
    dom.push(`<div data-result="userName" class="result--cell ${agent.status === 'alive' ? '' : 'dead'} ${agent.result === 'win' ? 'win' : ''}">${agent.userName}</div>`)
  })

  return dom.join('')
}

export {generateResultTable}
