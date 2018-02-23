import {applyMiddleware} from 'redux'
import client2server from './client2server'
import logger from './logger'
import socket from './socket'

const url = document.getElementById('script').dataset.url
const middleware = applyMiddleware(
  socket({
    url
  }),
  client2server,
  logger
)

export default middleware
