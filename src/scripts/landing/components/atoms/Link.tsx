import * as React from 'react'

interface Props {
  className?: string
  handleClick?: () => void
  href: string
}

export const Link: React.FC<Props> = props => (
  <a
    className={props.className}
    href={props.href}
    onClick={props.handleClick}
    rel="noreferrer noopener"
    target="_blank"
  >
    {props.children}
  </a>
)
Link.displayName = 'Link'
