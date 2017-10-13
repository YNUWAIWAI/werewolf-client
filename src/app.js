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

}

