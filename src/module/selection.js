import {getAllAgents, getMine, getPhaseInfo} from './server2client.js'
import {trimBaseUri} from './util.js'

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
  const description = {}

  if (getPhaseInfo() === 'day vote') {
    description.command = '投票先を選んでください'
    description.modal = '投票先はこちらでいいですか？'
    description.fixed = 'あなたの選んだ投票先はこちらです'

    return description
  }

  const myRole = trimBaseUri(getMine().role['@id'])

  if (myRole === 'werewolf') {
    description.command = '襲撃先を選んでください'
    description.modal = '襲撃先はこちらでいいですか？'
    description.fixed = 'あなたの選んだ襲撃先はこちらです'
  } else if (myRole === 'seer') {
    description.command = '占い先を選んでください'
    description.modal = '占い先はこちらでいいですか？'
    description.fixed = 'あなたの選んだ占い先はこちらです'
  } else if (myRole === 'hunter') {
    description.command = '守護先を選んでください'
    description.modal = '守護先はこちらでいいですか？'
    description.fixed = 'あなたの選んだ守護先はこちらです'
  } else {
    description.command = '待ってください'
    description.modal = ''
    description.fixed = ''
  }

  return description
}

const generateNightOption = () => {
  const myRole = trimBaseUri(getMine().role['@id'])

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

const generateFixedOption = user => `<div class="command--option"><img src="${user.image}"><span>${user.name}</span></div>`

export {generateDayVoteOption, generateNightOption, getDescription, generateFixedOption}
