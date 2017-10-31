import {getAllAgents} from './server2client.js'

const generateDayVoteOption = () => {
  const dom = getAllAgents()
    .filter(agent => agent.isAChoice)
    .map(agent => `<div data-player="${agent.id}" data-image="${agent.image}" data-name="${agent.name.ja}" class="command--option">
        <img src="${agent.image}">
        <span>${agent.name.ja}</span>
      </div>`)

  return dom.join('')
}

export {generateDayVoteOption}
