import * as React from 'react'

interface Props {
  token: string
}

export const Csrf: React.FC<Props> = props => (
  <input
    name="csrfToken"
    type="hidden"
    value={props.token}
  />
)
Csrf.displayName = 'Csrf'
