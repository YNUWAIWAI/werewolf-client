import controller from './controller.js'
let socket

const connectWebSocket = url => {
  if (!window.WebSocket || window in 'WebSocket') {
    console.log('WebSocket NOT supported by your Browser!')

    return
  }
  socket = new WebSocket(url)

  socket.addEventLister('open', event => {
    console.log('WebSocket Connected ', event)
  })
  socket.addEventLister('error', error => {
    console.log('WebSocket Error ', error)
  })
  socket.addEventLister('message', event => {
    controller(event.data)
  })
}

const send = text => {
  socket.send(text)
}

export {connectWebSocket, send}
