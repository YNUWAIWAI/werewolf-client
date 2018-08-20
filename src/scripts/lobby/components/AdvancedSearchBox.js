// @flow
import React from 'react'

export type Props = {
  text: string
}

export default function AdvancedSearchBox(props: Props) {
  return (
    <div className="advanced-search">
      {props.text}
    </div>
  )
}
