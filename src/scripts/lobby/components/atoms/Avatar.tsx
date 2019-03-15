import * as React from 'react'

interface Props {
  readonly image: string
  readonly name: string
}

export default function Avatar(props: Props) {
  return (
    <div className="lo--avatar">
      <img className="lo--avatar--image" src={props.image} />
      <span className="lo--avatar--name">
        {props.name}
      </span>
    </div>
  )
}
