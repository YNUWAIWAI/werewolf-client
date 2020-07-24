import * as React from 'react'

interface Props {
  className?: string
  href: string
}

export const Link: React.FC<Props> = props => (
  <a
    className={props.className}
    href={props.href}
    rel="noreferrer noopener"
    target="_blank"
  >
    {props.children}
  </a>
)
Link.displayName = 'Link'
