// @flow
import React from 'react'

type Props = {
  visible: boolean
}

export default function Obfucator(props: Props) {
  return props.visible && <div className="obfucator" />
}
