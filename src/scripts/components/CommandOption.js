import React from 'react'

export default function CommandOption(props) {
  const handleSelectOption = event => {
    props.handleSelectOption(props.agent)
  }

  return (
    <div data-player={props.id} className="command--option" onClick={handleSelectOption}>
      <img src={props.image} />
      <span>{props.name}</span>
    </div>
  )
}
