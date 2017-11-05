import {generateDayVoteOption, generateFixedOption, generateNightOption, getDescription} from './selection.js'
import {getAllAgents, getMine, storeJson, getPhaseInfo, isGameEnd} from './server2client.js'
import {getPhaseText, initInfo} from './info.js'
import {generateAgentChatMessage} from './chat.js'
import {generateJson} from './client2server.js'
import {generatePredictionTable} from './prediction.js'
import {generateResultTable} from './result.js'
import {send} from './websocket.js'
import {trimBaseUri} from './util.js'
import timer from './timer.js'

const phase = {
  dayConversation: 'day conversation',
  dayVote: 'day vote',
  night: 'night',
  postMortem: 'post mortem',
  results: 'results'
}

const obfucator = document.getElementById('obfucator')

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
  const modal = document.getElementById('modal')

  obfucator.classList.toggle('hidden')
  modal.classList.toggle('hidden')
}

export default json => {
  const kindOfMessage = trimBaseUri(json['@id'])

  if (kindOfMessage === 'systemMessage') {
    // systemMessage
    if (json.phase === phase.dayConversation) {
      // dayConversationPhase
      storeJson(json)
      if (json.date === 1) {
        document.getElementById('info').innerHTML = initInfo()
        obfucator.classList.add('hidden')
      }
      document.getElementById('day-phase').content = getPhaseText()
      const myRole = trimBaseUri(getMine().role['@id'])

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
            if (isGameEnd()) {
              const dom = generateResultTable()
              const result = document.getElementById('result')

              result.innerHTML = dom
              result.classList.remove('hidden')
            } else {
              obfucator.classList.add('hidden')
              document.querySelectorAll('.command--input').forEach(e => e.classList.add('hidden'))
              document.querySelector('.command--select').classList.remove('hidden')
              timer('select-time', json.phaseTimeLimit)
              timer('modal-time', json.phaseTimeLimit)
            }
            obfucator.classList.remove('hidden')
            clearInterval(interval)

            return
          }
          console.log(`wait for starting ${phase.dayVote}`)
        }, 100)
      })
    } else if (json.phase === phase.dayVote) {
      // dayVotePhase
      storeJson(json)
      const dom = generateDayVoteOption()

      document.getElementById('day-phase').textContent = getPhaseText()
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
            if (isGameEnd()) {
              const dom = generateResultTable()
              const result = document.getElementById('result')

              result.innerHTML = dom
              result.classList.remove('hidden')
            } else {
              obfucator.classList.add('hidden')
              timer('select-time', json.phaseTimeLimit)
              timer('modal-time', json.phaseTimeLimit)
            }
            obfucator.classList.remove('hidden')
            clearInterval(interval)

            return
          }
          console.log(`wait for starting ${phase.dayVote}`)
        }, 100)
      })
    } else if (json.phase === phase.night) {
      // nightPhase
      storeJson(json)
      const dom = generateNightOption()

      document.getElementById('day-phase').textContent = getPhaseText()
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
            if (isGameEnd()) {
              const dom = generateResultTable()
              const result = document.getElementById('result')

              result.innerHTML = dom
              result.classList.remove('hidden')
            } else {
              obfucator.classList.add('hidden')
              document.querySelectorAll('.command--option')
                .forEach(e => {
                  e.classList.remove('hidden')
                })
              document.querySelector('.command--select').classList.add('hidden')
              timer('day-time', json.phaseTimeLimit)
            }
            obfucator.classList.remove('hidden')
            clearInterval(interval)

            return
          }
          console.log(`wait for stating ${phase.datConversation}`)
        }, 100)
      })
    } else if (json.phase === phase.results) {
      // resultPhase
      storeJson(json)
    } else {
      // postMotermPhase
      storeJson(json)
    }
  } else if (kindOfMessage === 'playerMessage') {
    // playerMessage
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
