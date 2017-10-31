import {getAllAgents} from './server2client.js'
import {getMine} from './info.js'

const generateDayVoteOption = () => {
  const dom = getAllAgents()
    .filter(agent => agent.isAChoice)
    .map(agent => `<div data-player="${agent.id}" data-image="${agent.image}" data-name="${agent.name.ja}" class="command--option">
        <img src="${agent.image}">
        <span>${agent.name.ja}</span>
      </div>`)

  return dom.join('')
}

const getDescription = () => {
  const myRole = (/\/(\w+)$/).exec(getMine().role['@id'])[1]
  const description = {}

  if (myRole === 'werewolf') {
    description.command = '襲撃先を選んでください'
    description.modal = '襲撃先はこちらでいいですか？'
  } else if (myRole === 'seer') {
    description.command = '占い先を選んでください'
    description.modal = '占い先はこちらでいいですか？'
  } else if (myRole === 'hunter') {
    description.command = '守護先を選んでください'
    description.modal = '守護先はこちらでいいですか？'
  } else {
    description.command = '投票先を選んでください'
    description.modal = '投票先はこちらでいいですか？'
  }

  return description
}

const generateNightOption = () => {
  const myRole = (/\/(\w+)$/).exec(getMine().role['@id'])[1]

  if (![ 'werewolf', 'seer', 'hunter' ].includes(myRole)) {
    return ''
  }
  const dom = getAllAgents()
    .filter(agent => agent.isAChoice)
    .map(agent => `<div data-player="${agent.id}" data-image="${agent.image}" data-name="${agent.name.ja}" class="command--option">
        <img src="${agent.image}">
        <span>${agent.name.ja}</span>
      </div>`)

  return dom.join('')
}

export {generateDayVoteOption, generateNightOption, getDescription}
