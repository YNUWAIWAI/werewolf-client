import {connectWebSocket, send} from './module/websocket.js'
const url = document.getElementById('script').dataset.url

document.addEventListener('DOMContentLoaded', connectWebSocket(url))
document.getElementById('public').addEventListener('click', e => {
  const text = e.target.form[0].value

  send(text)
})
document.getElementById('private').addEventListener('click', e => {
  const text = e.target.form[0].value

  send(text)
})
document.getElementById('limited').addEventListener('click', e => {
  const text = e.target.form[0].value

  send(text)
})
