import * as React from 'react'
import useResizeObserver from 'use-resize-observer'

interface Props {
  autoPlay: boolean
}

export const Trailer: React.FC<Props> = props => {
  const autoPlay = props.autoPlay ? 1 : 0
  const [videoHeight, setVideoHeight] = React.useState(640)
  const [videoWidth, setVideoWidth] = React.useState(360)
  const {ref} = useResizeObserver<HTMLIFrameElement>({
    onResize: ({height, width}) => {
      if (!height || !width) {
        return
      }
      if (height / 9 > width / 16) {
        setVideoHeight(width / 16 * 9)
        setVideoWidth(width)
      } else {
        setVideoHeight(height)
        setVideoWidth(height / 9 * 16)
      }
    }
  })

  return (
    <div
      className="la--trailer"
      ref={ref}
    >
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
        height={videoHeight}
        src={`https://www.youtube.com/embed/VrxRKYTRZG8?controls=0&autoplay=${autoPlay}&modestbranding=0&rel=0`}
        width={videoWidth}
      />
    </div>
  )
}
Trailer.displayName = 'Trailer'
