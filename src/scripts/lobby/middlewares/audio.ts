import * as ActionTypes from '../constants/ActionTypes'
import {Middleware} from '.'

const createAudioContext = () => new Promise<AudioContext>(resolve => {
  // eslint-disable-next-line no-extra-parens, @typescript-eslint/no-explicit-any
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext

  window.addEventListener(
    'click',
    () => {
      const context = new AudioContext()

      resolve(context)
    },
    {
      once: true
    }
  )
})
const getAudioData = async (url: string) => {
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()

  return {
    buffer,
    ok: res.ok
  }
}
const createVolumeNode = async () => {
  const context = await createAudioContext()
  const volumeNode = context.createGain()

  volumeNode.gain.value = 1
  volumeNode.connect(context.destination)

  const changeVolume = (value: number) => {
    volumeNode.gain.value = value
  }
  const createSource = async (buffer: ArrayBuffer, ok: Response['ok']) => {
    if (!ok) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        fadein: () => {},
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        fadeout: () => {}
      }
    }
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
const controller = Promise.all([
  createVolumeNode(),
  getAudioData('https://werewolf.world/sound/0.3/lobby/lobby-darkness.mp3'),
  getAudioData('https://werewolf.world/video/0.3/neurochip.mp4'),
  getAudioData('https://werewolf.world/sound/0.3/lobby/waitingPage-ticktock.mp3')
])
  .then(([
    {changeVolume, createSource},
    lobby,
    video,
    waitingPage
  ]) => ({
    changeVolume,
    lobbySource: createSource(lobby.buffer, lobby.ok),
    videoSource: createSource(video.buffer, video.ok),
    waitingPageSource: createSource(waitingPage.buffer, waitingPage.ok)
  }))

const audio: Middleware = store => next => action => {
  switch (action.type) {
    case ActionTypes.App.INIT:
    case ActionTypes.WaitingPage.LEAVE_WAITING_PAGE:
    case ActionTypes.App.SHOW_MAIN:
      controller
        .then(({changeVolume, lobbySource, videoSource, waitingPageSource}) => {
          changeVolume(store.getState().audio.volume)
          lobbySource
            .then(({fadein}) => {
              fadein()
            })
          videoSource
            .then(({fadein}) => {
              fadein()
            })
          waitingPageSource
            .then(({fadeout}) => {
              fadeout()
            })
        })

      return next(action)
    case ActionTypes.App.SELECT_VILLAGE:
    case ActionTypes.BuildVillage.BUILD:
      controller
        .then(({changeVolume, lobbySource, videoSource, waitingPageSource}) => {
          changeVolume(store.getState().audio.volume)
          lobbySource
            .then(({fadeout}) => {
              fadeout()
            })
          videoSource
            .then(({fadein}) => {
              fadein()
            })
          waitingPageSource
            .then(({fadein}) => {
              fadein()
            })
        })

      return next(action)
    case ActionTypes.App.CHANGE_VOLUME:
      controller
        .then(({changeVolume}) => {
          changeVolume(action.volume)
        })

      return next(action)
    case ActionTypes.App.TOGGLE_MUTE:
      controller
        .then(({changeVolume}) => {
          if (action.muted) {
            changeVolume(0)
          } else {
            changeVolume(store.getState().audio.volume)
          }
        })

      return next(action)
    default:
      return next(action)
  }
}

export default audio
