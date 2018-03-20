// @flow
import React from 'react'

type Props = {
  handleSelectOption: void => void,
  image: string,
  name: string
}

export default function CommandOption(props: Props) {
  return (
    <div className="command--option" onClick={props.handleSelectOption}>
      <img src={props.image} />
      <span>
        {props.name}
      </span>
    </div>
  )
}
