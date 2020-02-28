import * as React from 'react'
import {lobby} from '../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly image: string
}

export default function SelectAvatarTableBodyImage(props: Props) {
  const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      props.handleSelect()
    }
  }

  return (
    <div
      className={`lo--select-avatar--table--body--item image ${props.additionalClassName.join(' ')}`}
      onClick={handleSelect}
    >
      <button>
        image
      </button>
    </div>
  )
}
