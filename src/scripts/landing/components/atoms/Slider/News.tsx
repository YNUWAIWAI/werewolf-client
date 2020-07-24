import * as React from 'react'
import {Link} from '../Link'

interface Props {
  link: string
  title: string
}

export const News: React.FC<Props> = props => (
  <div
    className="la--news"
  >
    <Link
      href={props.link}
    >
      {props.title}
    </Link>
  </div>
)
News.displayName = 'News'
