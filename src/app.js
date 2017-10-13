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

const timer = (id, option = {}) => {
  option.minute = option.minute || 3
  option.second = option.second || 0
  if (option.second < 10) {
    option.second = `0${option.second}`
  }

  const node = document.getElementById(id)
  const timerEvent = {
    timerEnd: new Event('time-end'),
    timerStart: new Event('time-start')
  }

  const tick = () => {
    let [ , minute, second ] = (/残り(\d+)'(\d+)/).exec(node.textContent)

    minute = Number(minute)
    second = Number(second)

    if (minute === 0 && second === 0) {
      node.textContent = '終了'
      return false
    }

    second--
    if (second < 0) {
      second = 59
      minute--
    } else if (second < 10) {
      second = `0${second}`
    }
    node.textContent = `残り${minute}'${second}`

    return true
  }

  node.textContent = `残り${option.minute}'${option.second}`
  node.dispatchEvent(timerEvent.timerStart)
  const interval = window.setInterval(() => {
    if (!tick(id)) {
      clearInterval(interval)
      node.dispatchEvent(timerEvent.timerEnd)
    }
  }, 1000)
}

document.getElementById('chat-time').addEventListener('time-start', elem => {
  elem.target.style.color = 'black'
})
document.getElementById('chat-time').addEventListener('time-end', elem => {
  elem.target.style.color = 'red'
})
document.getElementById('select-time').addEventListener('time-start', elem => {
  elem.target.style.color = 'black'
})
document.getElementById('select-time').addEventListener('time-end', elem => {
  elem.target.style.color = 'red'
})
