import {connectWebSocket} from './websocket.js'
document.addEventListner('DOMContentLoaded', connectWebSocket('wss://massage'))
