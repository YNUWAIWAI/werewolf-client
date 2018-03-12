// @flow
import Description from './Description'
import React from 'react'
import RoleIcon from './RoleIcon'

type Props = {
  handleClickNo: void => void,
  handleClickYes: number => void,
  id: number,
  image: string,
  name: string,
  text: string,
  visible: boolean
}

export default function Modal(props: Props) {
  if (!props.visible) {
    return ''
  }

  const handleClick = value => () => {
    if (value === 'no') {
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
        <button className="modal--button" onClick={handleClick('yes')} value="yes">
          {'はい'}
        </button>
        <button className="modal--button" onClick={handleClick('no')} value="no">
          {'いいえ'}
        </button>
      </div>
    </div>
  )
}
