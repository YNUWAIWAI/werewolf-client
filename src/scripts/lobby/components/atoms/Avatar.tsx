import * as React from 'react'

interface Props {
  readonly image: string;
  readonly name: string;
}

export default function Avatar(props: Props) {
  return (
    <div className="avatar">
      <img className="avatar--image" src={props.image} />
      <span className="avatar--name">
        {props.name}
      </span>
    </div>
  )
}
