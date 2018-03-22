// @flow
import React from 'react'

export type StateProps = {
  visible: boolean
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Obfucator(props: Props) {
  return props.visible && <div className="obfucator" />
}
