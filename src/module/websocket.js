import controller from './controller.js'
let socket

const connectWebSocket = url => {
  if (!window.WebSocket || !('WebSocket' in window)) {
    console.log('WebSocket NOT supported by your Browser!')

    return
  }
  socket = new WebSocket(url)

  socket.addEventListener('open', event => {
    console.log('WebSocket Connected ', event)
  })
  socket.addEventListener('close', event => {
    console.log('WebSocket Disconnected ', event)
    const obfucator = document.getElementById('obfucator')

    obfucator.style = 'background: rgba(255, 0, 0, 0.85);font-size: 350px;line-height: 0.8;'
    obfucator.textContent = 'WebSocket is DEAD'
    obfucator.classList.remove('hidden')
  })
  socket.addEventListener('error', error => {
    console.log('WebSocket Error ', error)
  })
  socket.addEventListener('message', event => {
    controller(JSON.parse(event.data))
  })
}

const send = json => {
  console.log(json)
  socket.send(JSON.stringify(json))
}

export {connectWebSocket, send}
