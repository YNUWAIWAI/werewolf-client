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
  socket.addEventListener('error', error => {
    console.log('WebSocket Error ', error)
  })
  socket.addEventListener('message', event => {
    controller(JSON.parse(event.data))
  })
}

const send = json => {
  console.log(JSON.stringify(json))
  socket.send(JSON.stringify(json))
}

export {connectWebSocket, send}
