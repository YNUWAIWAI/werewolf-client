import {connectWebSocket} from './websocket.js'
const url = document.getElementById('script').dataset.url
document.addEventListner('DOMContentLoaded', connectWebSocket(url))
