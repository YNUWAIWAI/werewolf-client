// @flow
import Description from './Description'
import React from 'react'
import RoleIcon from './RoleIcon'

type Props = {
  id: number,
  image: string,
  name: string,
  text: string
}

export default function Modal(props: Props) {
  if (!props.visible) {
    return ''
  }

  const handleClick = event => {
    if (event.target.value === 'no') {
      props.handleClickNo()
    } else {
      props.handleClickYes(props.id)
    }
  }

  return (
    <div className="modal">
      <RoleIcon agent={props.name} class="modal--icon" image={props.image} />
      <Description class="modal--description" text={props.text} />
      <div className="modal--button--container">
        <button className="modal--button" onClick={handleClick} value="yes">
          {'はい'}
        </button>
        <button className="modal--button" onClick={handleClick} value="no">
          {'いいえ'}
        </button>
      </div>
    </div>
  )
}
