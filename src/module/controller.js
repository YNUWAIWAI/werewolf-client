import {generateDayVoteOption, generateFixedOption, generateNightOption, getDescription} from './selection.js'
import {getAllAgents, getMine, storeJson, getPhaseInfo} from './server2client.js'
import {getPhaseText, initInfo} from './info.js'
import {generateAgentChatMessage} from './chat.js'
import {generateJson} from './client2server.js'
import {generatePredictionTable} from './prediction.js'
import {generateResultTable} from './result.js'
import {send} from './websocket.js'
import timer from './timer.js'

const baseURI = 'https://werewolf.world/resource/0.1'
const phase = {
  dayConversation: 'day conversation',
  dayVote: 'day vote',
  night: 'night',
  postMortem: 'post mortem',
  results: 'results'
}

const handleClick = e => {
  const state = [ '?', 'Δ', 'O', 'X' ]
  const currentState = e.target.dataset.state

  if (!state.includes(currentState)) {
    e.target.removeEventListener('click', handleClick)

    return
  }
  const nextIndex = (state.indexOf(currentState) + 1) % state.length
  const nextState = state[nextIndex]

  e.target.dataset.state = nextState
  const mine = getMine()
  const data = {
    agent: mine.agent,
    prediction: nextState,
    role: mine.role
  }

  send(generateJson(data, 'board'))
}

const toggleModal = () => {
  const obfucator = document.getElementById('obfucator')
  const modal = document.getElementById('modal')

  obfucator.classList.toggle('hidden')
  modal.classList.toggle('hidden')
}

const obfucator = document.getElementById('obfucator')

export default json => {
  const kindOfMessage = json['@id']

  if (kindOfMessage === `${baseURI}/systemMessage`) {
    // systemMessage
    if (json.phase === phase.dayConversation) {
      // dayConversationPhase
      storeJson(json)
      console.log(kindOfMessage, json)
      if (json.date === 1) {
        document.getElementById('info').innerHTML = initInfo()
        obfucator.classList.add('hidden')
      }
      document.getElementById('day-phase').content = getPhaseText()
      const myRole = (/\/(\w+)$/).exec(getMine().role['@id'])[1]

      if (myRole !== 'werewolf') {
        document.querySelector('.command--input.limited').classList.add('hidden')
      }
      document.getElementById('prediction').innerHTML = generatePredictionTable()
      document.querySelectorAll('.prediction > div[ data-state ]').forEach(elem => {
        elem.addEventListener('click', handleClick)
      })
      timer('day-time', json.phaseTimeLimit)
      document.getElementById('day-time').addEventListener('time-start', elem => {
        elem.target.style.color = 'black'
      })
      document.getElementById('day-time').addEventListener('time-end', elem => {
        elem.target.style.color = 'red'
        const interval = setInterval(() => {
          if (getPhaseInfo().phase !== phase.dayConversation) {
            obfucator.classList.add('hidden')
            document.querySelectorAll('.command--input').forEach(e => e.classList.add('hidden'))
            document.querySelector('.command--select').classList.remove('hidden')
            timer('select-time', json.phaseTimeLimit)
            timer('modal-time', json.phaseTimeLimit)
            clearInterval(interval)

            return
          }
          obfucator.classList.remove('hidden')
          console.log(`wait for starting ${phase.dayVote}`)
        }, 100)
      })
    } else if (json.phase === phase.dayVote) {
      // dayVotePhase
      console.log(kindOfMessage, json)
      storeJson(json)
      const dom = generateDayVoteOption()

      document.getElementById('day-phase').content = getPhaseText()
      document.getElementById('command--option-container').innerHTML = dom
      document.getElementById('command-text').textContent = getDescription().command
      document.getElementById('modal-text').textContent = getDescription().modal
      const user = {}

      document.querySelectorAll('.command--option')
        .forEach(elem => {
          elem.addEventListener('click', e => {
            const option = e.target.dataset.player ? e.target : e.target.parentNode

            user.id = Number(option.dataset.player)
            user.image = option.dataset.image
            document.getElementById('modal-icon-image').src = user.image
            user.name = option.dataset.name
            document.getElementById('modal-icon-name').textContent = user.name
            toggleModal()
          })
        })
      document.getElementById('yes').addEventListener('click', toggleModal)
      document.getElementById('yes').addEventListener('click', () => {
        document.getElementById('command-text').textContent = getDescription().fixed
        document.getElementById('command--option-container').innerHTML = generateFixedOption(user)
        const data = {
          agent: getAllAgents().filter(agent => agent.id === user.id)[0]
        }

        send(generateJson(data, 'vote'))
      })
      document.getElementById('no').addEventListener('click', toggleModal)
      document.getElementById('select-time').addEventListener('time-start', elem => {
        elem.target.style.color = 'black'
      })
      document.getElementById('select-time').addEventListener('time-end', elem => {
        elem.target.style.color = 'red'
        const interval = setInterval(() => {
          if (getPhaseInfo().phase !== phase.dayVote) {
            obfucator.classList.add('hidden')
            timer('select-time', json.phaseTimeLimit)
            timer('modal-time', json.phaseTimeLimit)
            clearInterval(interval)

            return
          }
          obfucator.classList.remove('hidden')
          console.log(`wait for starting ${phase.dayVote}`)
        }, 100)
      })
    } else if (json.phase === phase.night) {
      // nightPhase
      console.log(kindOfMessage, json)
      storeJson(json)
      const dom = generateNightOption()

      document.getElementById('day-phase').content = getPhaseText()
      document.getElementById('command--option-container').innerHTML = dom
      document.getElementById('command-text').textContent = getDescription().command
      document.getElementById('modal-text').textContent = getDescription().modal
      const user = {}

      document.querySelectorAll('.command--option')
        .forEach(elem => {
          elem.addEventListener('click', e => {
            const option = e.target.dataset.player ? e.target : e.target.parentNode

            user.id = Number(option.dataset.player)
            user.image = option.dataset.image
            document.getElementById('modal-icon-image').src = user.image
            user.name = option.dataset.name
            document.getElementById('modal-icon-name').textContent = user.name
            toggleModal()
          })
        })
      document.getElementById('yes').addEventListener('click', toggleModal)
      document.getElementById('yes').addEventListener('click', () => {
        document.getElementById('command-text').textContent = getDescription().fixed
        document.getElementById('command--option-container').innerHTML = generateFixedOption(user)
        const data = {
          agent: getAllAgents().filter(agent => agent.id === user.id)[0]
        }

        send(generateJson(data, 'vote'))
      })
      document.getElementById('no').addEventListener('click', toggleModal)
      document.getElementById('select-time').addEventListener('time-start', elem => {
        elem.target.style.color = 'black'
      })
      document.getElementById('select-time').addEventListener('time-end', elem => {
        elem.target.style.color = 'red'
        const interval = setInterval(() => {
          if (getPhaseInfo().phase !== phase.nightVote) {
            obfucator.classList.add('hidden')
            timer('select-time', json.phaseTimeLimit)
            timer('modal-time', json.phaseTimeLimit)
            clearInterval(interval)

            return
          }
          obfucator.classList.remove('hidden')
          console.log(`wait for stating ${phase.datConversation}`)
        }, 100)
      })
    } else if (json.phase === phase.results) {
      // resultPhase
      console.log(kindOfMessage, json)
      storeJson(json)
      const dom = generateResultTable()

      document.getElementById('result').innerHTML = dom
    } else {
      console.log(kindOfMessage, json)
      // postMotermPhase
    }
  } else if (kindOfMessage === `${baseURI}/playerMessage`) {
    // playerMessage
    console.log(kindOfMessage, json)
    if (![ 'anonymousAudience', 'onymousAudience' ].includes(json.intensionalDisclosureRange)) {
      const dom = generateAgentChatMessage(json)

      document.getElementById('chat').insertAdjacentHTML('afterbegin', dom)
      if (json.chatIsMine) {
        if (json.intensionalDisclosureRange === 'public') {
          const counter = document.getElementById('public-counter')

          counter.textContent = `${json.chatCounter}/${json.chatLimit}`
        } else if (json.intensionalDisclosureRange === 'werewolf') {
          const counter = document.getElementById('limited-counter')

          counter.textContent = `${json.chatCounter}/${json.chatLimit}`
        }
      }
      const chatInterval = (/(\d+)s/).exec(json.chatInterval)[1] * 1000
      const publicButton = document.getElementById('public')
      const privateButton = document.getElementById('private')
      const limitedButton = document.getElementById('limited')

      publicButton.disabled = true
      privateButton.disabled = true
      limitedButton.disabled = true
      const interval = setInterval(() => {
        publicButton.disabled = false
        privateButton.disabled = false
        limitedButton.disabled = false
        clearInterval(interval)
      }, chatInterval)

    }
  } else {
    console.error(kindOfMessage, json)
    // error
  }
}
