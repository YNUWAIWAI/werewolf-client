import timer from './module/timer.js'
import {dayStart} from './module/server2client.js'
import {generatePredictionTable} from './module/prediction.js'

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
document.querySelectorAll('.command--option').forEach(elem => {
  elem.addEventListener('click', e => {
    toggleModal()
  })
})

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
document.getElementById('select-time').addEventListener('time-start', elem => {
  elem.target.style.color = 'black'
})
document.getElementById('select-time').addEventListener('time-end', elem => {
  elem.target.style.color = 'red'
})

timer('day-time', {minute: 10})
dayStart()
  .then(() => {
    generatePredictionTable()
      .then(dom => {
        document.getElementById('prediction').innerHTML = dom
        document.querySelectorAll('.prediction > div[ data-state ]').forEach(elem => {
          elem.addEventListener('click', handleClick)
        })
      })
  })
