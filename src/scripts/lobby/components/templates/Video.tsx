import * as React from 'react'

export interface StateProps {
  readonly visible: boolean
}
export type Props = StateProps

export const Video: React.FC<Props> = props => {
  if (props.visible) {
    return (
      <video
        autoPlay
        className="lo--video"
        loop
        muted
      >
        <source
          src="https://werewolf.world/video/0.3/neurochip.mp4"
          type="video/mp4"
        />
      </video>
    )
  }

  return null
}
Video.displayName = 'Video'
