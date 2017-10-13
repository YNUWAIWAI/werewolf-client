export default (id, option = {}) => {
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
