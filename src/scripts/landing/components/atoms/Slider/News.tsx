import * as React from 'react'

interface Props {
  link: string
  title: string
}

export const News: React.FC<Props> = props => (
  <div
    className="la--news"
  >
    <a
      href={props.link}
    >
      {props.title}
    </a>
  </div>
)
News.displayName = 'News'
