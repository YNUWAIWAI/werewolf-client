import timer from './module/timer.js'

const handleClick = e => {
  const state = [ 'o', 'x', 'tri', 'unk' ]
  const currentState = e.target.dataset.state
  const nextIndex = (state.indexOf(currentState) + 1) % state.length
  const nextState = state[nextIndex]

  e.target.dataset.state = nextState
}

document.querySelectorAll('.prediction > div[ data-state ]').forEach(elem => {
  elem.addEventListener('click', handleClick)
})

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
