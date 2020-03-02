import * as React from 'react'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly handleClick: (image: string) => void
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
      <img
        onClick={() => props.handleClick(props.image)}
        src={props.image}
      />
    </div>
  )
}
