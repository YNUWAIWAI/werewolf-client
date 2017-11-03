const parseTimeString = text => {
  if (typeof text !== 'string' || text === 'none') {
    return {
      minute: '0',
      second: '0'
    }
  }
  const minute = (() => {
    if ((/(\d+)m/).test(text)) {
      return String((/(\d+)m/).exec(text)[1])
    }

    return '0'
  })()
  const second = (() => {
    if ((/(\d+)s/).test(text)) {
      return String((/(\d+)s/).exec(text)[1]).padStart(2, '0')
    }

    return '0'
  })()

  return {
    minute,
    second
  }
}

export default (id, time = '3s') => {
  const node = document.getElementById(id)
  const timerEvent = {
    timerEnd: new Event('time-end'),
    timerStart: new Event('time-start')
  }

  const tick = () => {
    let [ , min, sec ] = (/残り(\d+)'(\d+)/).exec(node.textContent)

    min = Number(min)
    sec = Number(sec)

    if (min === 0 && sec === 0) {
      node.textContent = '終了'

      return false
    }

    sec--
    if (sec < 0) {
      sec = 59
      min--
    } else if (sec < 10) {
      sec = `0${sec}`
    }
    node.textContent = `残り${min}'${sec}`

    return true
  }

  const {minute, second} = parseTimeString(time)
  node.textContent = `残り${minute}'${second}`
  node.dispatchEvent(timerEvent.timerStart)
  const interval = window.setInterval(() => {
    if (!tick(id)) {
      clearInterval(interval)
      node.dispatchEvent(timerEvent.timerEnd)
    }
  }, 1000)
}
