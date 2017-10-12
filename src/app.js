const predictions = document.querySelectorAll('.prediction > div[ data-state ]')

predictions.forEach(elem => {
  elem.addEventListener('click', handleClick)
});

document.getElementById('yes').addEventListener('click', toggleModal)
document.getElementById('no').addEventListener('click', toggleModal)
document.querySelectorAll('.command--option').forEach(elem => {
  elem.addEventListener('click', e => {
    console.log(e.target)
    toggleModal()
  })
})

function handleClick(e) {
  const state = ['o', 'x', 'tri', 'unk']
  const currentState = e.target.dataset['state']
  const nextIndex = (state.indexOf(currentState) + 1) % state.length
  const nextState = state[nextIndex]
  e.target.dataset['state'] = nextState
}

function toggleModal() {
  const obfucator = document.getElementById('obfucator')
  const modal = document.getElementById('modal')
  obfucator.classList.toggle('hidden')
  modal.classList.toggle('hidden')
}


