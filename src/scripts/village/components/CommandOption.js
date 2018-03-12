// @flow
import React from 'react'

type Props = {
  handleSelectOption: number => void,
  id: number,
  image: string,
  name: string
}

export default function CommandOption(props: Props) {
  const handleSelectOption = () => {
    props.handleSelectOption(props.id)
  }

  return (
    <div className="command--option" data-player={props.id} onClick={handleSelectOption}>
      <img src={props.image} />
      <span>
        {props.name}
      </span>
    </div>
  )
}
