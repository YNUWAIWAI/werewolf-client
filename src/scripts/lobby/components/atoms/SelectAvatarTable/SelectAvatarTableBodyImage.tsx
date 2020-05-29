import * as React from 'react'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly handleClick: (image: string) => void
  readonly image: string
  readonly navigatable: boolean
}

export const SelectAvatarTableBodyImage: React.FC<Props> = props => {
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
      <button
        onClick={() => props.handleClick(props.image)}
        tabIndex={props.navigatable ? 0 : -1}
      >
        <img src={props.image} />
      </button>
    </div>
  )
}
SelectAvatarTableBodyImage.displayName = 'SelectAvatarTableBodyImage'
