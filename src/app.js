import timer from './module/timer.js'
import {dayStart, getResult, startDayVotePhase} from './module/server2client.js'
import {generatePredictionTable} from './module/prediction.js'
import {generateResultTable} from './module/result.js'
import {generateDayVoteOption} from './module/selection.js'
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

document.getElementById('yes').addEventListener('click', toggleModal)
document.getElementById('no').addEventListener('click', toggleModal)

dayStart()
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
    document.querySelectorAll('.command--option')
      .forEach(elem => {
        elem.addEventListener('click', e => {
          const option = e.target.dataset.player ? e.target : e.target.parentNode

          document.getElementById('modal-icon-image').src = option.dataset.image
          document.getElementById('modal-icon-name').textContent = option.dataset.name
          toggleModal()
        })
      })
    document.getElementById('select-time').addEventListener('time-start', elem => {
      elem.target.style.color = 'black'
    })
    document.getElementById('select-time').addEventListener('time-end', elem => {
      elem.target.style.color = 'red'
    })
  })

getResult()
  .then(() => {
    const dom = generateResultTable()
    document.getElementById('result').innerHTML = dom
  })
