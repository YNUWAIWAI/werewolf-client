import React from 'react'

export default function CommandOption(props) {
  const handleSelectOption = event => {
    props.handleSelectOption(props.agent)
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
