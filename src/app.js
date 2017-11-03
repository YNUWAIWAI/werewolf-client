import {connectWebSocket, send} from './module/websocket.js'
import {generateJSON} from './module/client2server.js'
const url = document.getElementById('script').dataset.url

document.addEventListener('DOMContentLoaded', connectWebSocket(url))
document.getElementById('public').addEventListener('click', e => {
  const text = e.target.form[0].value
  const data = {
    channel: 'public',
    text
  }
  const json = generateJSON(data, 'chat')

  send(json)
})
document.getElementById('private').addEventListener('click', e => {
  const text = e.target.form[0].value
  const data = {
    channel: 'public',
    text
  }
  const json = generateJSON(data, 'chat')

  send(json)
})
document.getElementById('limited').addEventListener('click', e => {
  const text = e.target.form[0].value
  const data = {
    channel: 'public',
    text
  }
  const json = generateJSON(data, 'chat')

  send(json)
})
