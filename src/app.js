import {connectWebSocket} from './module/websocket.js'
const url = document.getElementById('script').dataset.url

document.addEventListener('DOMContentLoaded', connectWebSocket(url))
