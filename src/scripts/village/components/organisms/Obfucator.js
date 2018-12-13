// @flow
import Loader from '../atoms/svg/Loader'
import React from 'react'

export type StateProps = {
  loading: boolean,
  visible: boolean
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Obfucator(props: Props) {
  return props.visible ?
    <div className="obfucator">
      {
        props.loading ?
          <Loader
            className="obfucator--loader"
          /> :
          ''
      }
    </div> :
    ''
}
