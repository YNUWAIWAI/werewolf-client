import * as React from 'react'
import {Close} from './svg/Close'

interface Props {
  readonly handleClick: () => void
}

export const ResultHeader: React.FC<Props> = props => (
  <div
    className="vi--result--header"
  >
    <button
      className="vi--result--header--close"
      onClick={props.handleClick}
    >
      <Close />
    </button>
  </div>
)
ResultHeader.displayName = 'ResultHeader'
