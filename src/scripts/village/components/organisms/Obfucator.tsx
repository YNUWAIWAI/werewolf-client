import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import {Loader} from '../atoms/svg/Loader'

export interface StateProps {
  readonly loading: boolean
  readonly visible: boolean
}
export type Props = StateProps

export const Obfucator: React.FC<Props> = props => (
  <CSSTransition
    classNames="vi--obfucator--transition"
    in={props.visible}
    timeout={{
      enter: 500,
      exit: 300
    }}
    unmountOnExit
  >
    <div className="vi--obfucator">
      {
        props.loading ?
          <Loader
            className="vi--obfucator--loader"
          /> :
          ''
      }
    </div>
  </CSSTransition>
)
Obfucator.displayName = 'Obfucator'
