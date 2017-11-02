import timer from './module/timer.js'
import {startDay, startResultPhase, startDayVotePhase, startNightPhase} from './module/server2client.js'
import {generatePredictionTable} from './module/prediction.js'
import {generateResultTable} from './module/result.js'
import {generateDayVoteOption, generateNightOption, getDescription, generateFixedOption} from './module/selection.js'
import {initInfo} from './module/info.js'

const handleClick = e => {
  const state = [ 'o', 'x', 'unk', 'tri' ]
  const currentState = e.target.dataset.state
  if (!state.includes(currentState)) {
    e.target.removeEventListener('click', handleClick)
    return;
  }
  const nextIndex = (state.indexOf(currentState) + 1) % state.length
  const nextState = state[nextIndex]

  e.target.dataset.state = nextState
}

const toggleModal = () => {
  const obfucator = document.getElementById('obfucator')
  const modal = document.getElementById('modal')

  obfucator.classList.toggle('hidden')
  modal.classList.toggle('hidden')
}

startDay()
  .then(() => {
    document.getElementById('info').innerHTML = initInfo()
    document.getElementById('prediction').innerHTML = generatePredictionTable()
    document.querySelectorAll('.prediction > div[ data-state ]').forEach(elem => {
      elem.addEventListener('click', handleClick)
    })
    timer('day-time', {minute: 10})
    document.getElementById('day-time').addEventListener('time-start', elem => {
      elem.target.style.color = 'black'
    })
    document.getElementById('day-time').addEventListener('time-end', elem => {
      elem.target.style.color = 'red'
      document.querySelectorAll('.command--input').forEach(elem => elem.classList.add('hidden'))
      document.querySelector('.command--select').classList.remove('hidden')
      timer('select-time')
      timer('modal-time')
    })
  })

startDayVotePhase()
  .then(() => {
    const dom = generateDayVoteOption()

    document.getElementById('command--option-container').innerHTML = dom
    document.getElementById('command-text').textContent = getDescription().command
    document.getElementById('modal-text').textContent = getDescription().modal
    const user = {}

    document.querySelectorAll('.command--option')
      .forEach(elem => {
        elem.addEventListener('click', e => {
          const option = e.target.dataset.player ? e.target : e.target.parentNode

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
      document.getElementById('command--option-container').innerHTML = generateFixedOption()
    })
    document.getElementById('no').addEventListener('click', toggleModal)
    document.getElementById('select-time').addEventListener('time-start', elem => {
      elem.target.style.color = 'black'
    })
    document.getElementById('select-time').addEventListener('time-end', elem => {
      elem.target.style.color = 'red'
    })
  })

startNightPhase()
  .then(() => {
    const dom = generateNightOption()

    document.getElementById('command--option-container').innerHTML = dom
    document.getElementById('command-text').textContent = getDescription().command
    document.getElementById('modal-text').textContent = getDescription().modal
    const user = {}

    document.querySelectorAll('.command--option')
      .forEach(elem => {
        elem.addEventListener('click', e => {
          const option = e.target.dataset.player ? e.target : e.target.parentNode

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
    })
    document.getElementById('no').addEventListener('click', toggleModal)
    document.getElementById('select-time').addEventListener('time-start', elem => {
      elem.target.style.color = 'black'
    })
    document.getElementById('select-time').addEventListener('time-end', elem => {
      elem.target.style.color = 'red'
    })
  })

startResultPhase()
  .then(() => {
    const dom = generateResultTable()
    document.getElementById('result').innerHTML = dom
  })
