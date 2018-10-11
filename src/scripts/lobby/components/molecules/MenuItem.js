// @flow
import Loader from '../atoms/svg/Loader'
import React from 'react'
import type {Target} from 'lobby'

type Props = {
  +className: string,
  +disabled?: boolean,
  +isLoading?: boolean,
  +text: string,
  +transition: Target => void,
  +types: Target[]
}

export default function MenuItem(props: Props) {
  return (
    <li
      className={`${props.className} ${props.disabled ? 'disabled' : ''} ${props.isLoading ? 'loader' : ''}`}
      onClick={() => {
        props.types.forEach(type => {
          if (!props.disabled) {
            props.transition(type)
          }
        })
      }}
    >
      {
        props.isLoading ?
          <Loader /> :
          props.text
      }
    </li>
  )
}
