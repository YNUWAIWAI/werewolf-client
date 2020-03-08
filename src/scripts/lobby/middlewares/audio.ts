import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'

const createVolumeNode = () => {
  // eslint-disable-next-line no-extra-parens, @typescript-eslint/no-explicit-any
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext
  const context = new AudioContext()
  const volumeNode = context.createGain()

  volumeNode.gain.value = 1
  volumeNode.connect(context.destination)

  const changeVolume = (value: number) => {
    volumeNode.gain.value = value
  }
  const createSource = async (url: string) => {
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const source = context.createBufferSource()
    const gainNode = context.createGain()

    source.buffer = await context.decodeAudioData(buffer)
    source.loop = true
    gainNode.gain.value = 0
    source.connect(gainNode)
    gainNode.connect(volumeNode)
    source.start()

    const fadein = () => {
      gainNode.gain.setTargetAtTime(1, source.context.currentTime + 1, 0.5)
    }
    const fadeout = () => {
      gainNode.gain.setTargetAtTime(0, source.context.currentTime + 1, 0.5)
    }

    return {
      fadein,
      fadeout
    }
  }

  return {
    changeVolume,
    createSource
  }
}

const {changeVolume, createSource} = createVolumeNode()
const lobby = createSource('https://werewolf.world/sound/0.3/lobby/lobby-darkness.mp3')
const video = createSource('https://werewolf.world/video/0.3/neurochip.mp4')
const waitingPage = createSource('https://werewolf.world/sound/0.3/lobby/waitingPage-ticktock.mp3')

const audio: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.App.INIT:
    case ActionTypes.WaitingPage.LEAVE_WAITING_PAGE:
    case ActionTypes.App.SHOW_MAIN:
      lobby
        .then(({fadein}) => {
          fadein()
        })
      waitingPage
        .then(({fadeout}) => {
          fadeout()
        })
      video
        .then(({fadein}) => {
          fadein()
        })
      changeVolume(store.getState().audio.volume)

      return next(action)
    case ActionTypes.App.SELECT_VILLAGE:
    case ActionTypes.BuildVillage.BUILD:
      lobby
        .then(({fadeout}) => {
          fadeout()
        })
      waitingPage
        .then(({fadein}) => {
          fadein()
        })
      video
        .then(({fadein}) => {
          fadein()
        })
      changeVolume(store.getState().audio.volume)

      return next(action)
    case ActionTypes.App.CHANGE_VOLUME:
      changeVolume(action.volume)

      return next(action)
    case ActionTypes.App.TOGGLE_MUTE:
      if (action.muted) {
        changeVolume(0)
      } else {
        changeVolume(store.getState().audio.volume)
      }

      return next(action)
    default:
      return next(action)
  }
}

export default audio
