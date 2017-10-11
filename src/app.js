const predictions = document.querySelectorAll('.prediction > div[ data-state ]')

predictions.forEach(elem => {
  elem.addEventListener('click', handleClick)
});

function handleClick(e) {
  const state = ['o', 'x', 'tri', 'unk']
  const currentState = e.target.dataset['state']
  const nextIndex = (state.indexOf(currentState) + 1) % state.length
  const nextState = state[nextIndex]
  e.target.dataset['state'] = nextState
}
