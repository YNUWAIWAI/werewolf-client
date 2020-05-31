import * as React from 'react'
import {Help} from './svg/Help'

interface Props {
  navigatable: boolean
}

export const PredictionHelp: React.FC<Props> = props => (
  <a
    className="vi--prediction--help"
    href="https://werewolfguide.netlify.com/docs/en/introduction"
    rel="noreferrer noopener"
    tabIndex={props.navigatable ? 0 : -1}
    target="_blank"
  >
    <Help />
  </a>
)
PredictionHelp.displayName = 'PredictionHelp'
