import {addChatEventListner, generateAgentChatMessage} from './chat.js'
import {generateDayVoteOption, generateFixedOption, generateNightOption, getDescription} from './selection.js'
import {generatePredictionTable, handleBoardClick, updatePredictionTable} from './prediction.js'
import {getAllAgents, getMine, getPhaseInfo, isGameEnd, storeJson} from './server2client.js'
import {getPhaseText, getPlayerRole, genPlayerInfo} from './info.js'
import {generateJson} from './client2server.js'
import {generateResultTable} from './result.js'
import html from './html.js'
import {send} from './websocket.js'
import timer from './timer.js'
import {trimBaseUri} from './util.js'

const phase = {
  dayConversation: 'day conversation',
  dayVote: 'day vote',
  night: 'night',
  postMortem: 'post mortem',
  results: 'results'
}

const toggleModal = () => {
  html().obfucator.classList.toggle('hidden')
  html().modal.classList.toggle('hidden')
}

export default json => {
  const kindOfMessage = trimBaseUri(json['@id'])

  if (kindOfMessage === 'systemMessage') {
    // systemMessage
    console.log(kindOfMessage, json)
    if (json.phase === phase.dayConversation) {
      // dayConversationPhase
      storeJson(json)
      if (json.date === 1) {
        html().obfucator.classList.add('hidden')
        html().dayPhase.textContent = getPhaseText()
        html().player.innerHTML = genPlayerInfo()
        html().roleName.textContent = getPlayerRole()
        html().prediction.innerHTML = generatePredictionTable()
        document.querySelectorAll('.prediction > div[ data-state ]').forEach(elem => {
          elem.addEventListener('click', handleBoardClick)
        })
      } else {
        updatePredictionTable()
      }
      addChatEventListner()
      const myRole = trimBaseUri(getMine().role['@id'])

      if (myRole !== 'werewolf') {
        document.querySelector('.command--input.limited').classList.add('hidden')
      }
      html().dayPhase.content = getPhaseText()
      timer(html().dayTime, json.phaseTimeLimit)
      html().dayTime.addEventListener('time-start', elem => {
        elem.target.style.color = 'black'
      })
      html().dayTime.addEventListener('time-end', elem => {
        elem.target.style.color = 'red'
        const interval = setInterval(() => {
          if (getPhaseInfo().phase !== phase.dayConversation) {
            if (isGameEnd()) {
              const dom = generateResultTable()

              html().result.innerHTML = dom
              html().result.classList.remove('hidden')
            } else {
              html().obfucator.classList.add('hidden')
              document.querySelectorAll('.command--input').forEach(e => e.classList.add('hidden'))
              document.querySelector('.command--select').classList.remove('hidden')
              timer('select-time', json.phaseTimeLimit)
              timer('modal-time', json.phaseTimeLimit)
            }
            html().obfucator.classList.remove('hidden')
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

      html().dayPhase.textContent = getPhaseText()
      html().commandOptionContainer.innerHTML = dom
      html().commandText.textContent = getDescription().command
      html().modalText.textContent = getDescription().modal
      const user = {}

      document.querySelectorAll('.command--option')
        .forEach(elem => {
          elem.addEventListener('click', e => {
            const option = e.target.dataset.player ? e.target : e.target.parentNode

            user.id = Number(option.dataset.player)
            user.image = option.dataset.image
            html().modalIconImage.src = user.image
            user.name = option.dataset.name
            html().modalIconName.textContent = user.name
            toggleModal()
          })
        })
      html().yes.addEventListener('click', toggleModal)
      html().yes.addEventListener('click', () => {
        html().commandText.textContent = getDescription().fixed
        html().commandOptionContainer.innerHTML = generateFixedOption(user)
        const data = {
          agent: getAllAgents().filter(agent => agent.id === user.id)[0]
        }

        send(generateJson(data, 'vote'))
      })
      html().no.addEventListener('click', toggleModal)
      html().selectTime.addEventListener('time-start', elem => {
        elem.target.style.color = 'black'
      })
      html().selectTime.addEventListener('time-end', elem => {
        elem.target.style.color = 'red'
        const interval = setInterval(() => {
          if (getPhaseInfo().phase !== phase.dayVote) {
            if (isGameEnd()) {
              const dom = generateResultTable()

              html().result.innerHTML = dom
              html().result.classList.remove('hidden')
            } else {
              html().obfucator.classList.add('hidden')
              timer('select-time', json.phaseTimeLimit)
              timer('modal-time', json.phaseTimeLimit)
            }
            html().obfucator.classList.remove('hidden')
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

      html().dayPhase.textContent = getPhaseText()
      html().commandOptionContainer.innerHTML = dom
      html().commandText.textContent = getDescription().command
      html().modalText.textContent = getDescription().modal
      const user = {}

      document.querySelectorAll('.command--option')
        .forEach(elem => {
          elem.addEventListener('click', e => {
            const option = e.target.dataset.player ? e.target : e.target.parentNode

            user.id = Number(option.dataset.player)
            user.image = option.dataset.image
            html().modalIconImage.src = user.image
            user.name = option.dataset.name
            html().modalIconName.textContent = user.name
            toggleModal()
          })
        })
      html().yes.addEventListener('click', toggleModal)
      html().yes.addEventListener('click', () => {
        html().commandText.textContent = getDescription().fixed
        html().commandOptionContainer.innerHTML = generateFixedOption(user)
        const data = {
          agent: getAllAgents().filter(agent => agent.id === user.id)[0]
        }

        send(generateJson(data, 'vote'))
      })
      html().no.addEventListener('click', toggleModal)
      html().selectTime.addEventListener('time-start', elem => {
        elem.target.style.color = 'black'
      })
      html().selectTime.addEventListener('time-end', elem => {
        elem.target.style.color = 'red'
        const interval = setInterval(() => {
          if (getPhaseInfo().phase !== phase.nightVote) {
            if (isGameEnd()) {
              const dom = generateResultTable()

              html().result.innerHTML = dom
              html().result.classList.remove('hidden')
            } else {
              html().obfucator.classList.add('hidden')
              document.querySelectorAll('.command--option')
                .forEach(e => {
                  e.classList.remove('hidden')
                })
              document.querySelector('.command--select').classList.add('hidden')
              timer('day-time', json.phaseTimeLimit)
            }
            html().obfucator.classList.remove('hidden')
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
    console.log(kindOfMessage, json)
    if (![ 'anonymousAudience', 'onymousAudience' ].includes(json.intensionalDisclosureRange)) {
      const dom = generateAgentChatMessage(json)

      html().chat.insertAdjacentHTML('afterbegin', dom)
      if (json.chatIsMine) {
        if (json.intensionalDisclosureRange === 'public') {
          html().publicCounter.textContent = `${json.chatCounter}/${json.chatLimit}`
          html().publicTextarea.value = ''
          if (json.chatCounter !== json.chatLimit) {
            html().publicButton.disabled = false
          }
        } else if (json.intensionalDisclosureRange === 'private') {
          html().privateTextarea.value = ''
          if (json.chatCounter !== json.chatLimit) {
            html().privateButton.disabled = false
          }
        } else if (json.intensionalDisclosureRange === 'werewolf') {
          html().limitedCounter.textContent = `${json.chatCounter}/${json.chatLimit}`
          html().limitedTextarea.value = ''
          if (json.chatCounter !== json.chatLimit) {
            html().limitedButton.disabled = false
          }
        }
      }
    }
  } else {
    console.error(kindOfMessage, json)
    // error
  }
}
