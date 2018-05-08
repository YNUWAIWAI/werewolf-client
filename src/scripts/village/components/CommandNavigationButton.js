// @flow
import React from 'react'

type Props = {
  +handleClick: void => void,
  +text: string
}

export default function CommandNavigationButton(props: Props) {
  return (
    <button className="command--navigation--button" onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
