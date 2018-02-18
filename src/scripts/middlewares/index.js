import {applyMiddleware} from 'redux'
import logger from './logger'
import socket from './socket'

const url = document.getElementById('script').dataset.url
const middleware = applyMiddleware(
  socket({
    url
  }),
  logger
)

export default middleware
