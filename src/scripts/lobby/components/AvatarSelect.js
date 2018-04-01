// @flow
import React from 'react'

type Props = {
  handleChange: Avatar => void,
}

export default function AvatarSelect(props: Props) {
  const handleChange = (event: SyntheticInputEvent<HTMLSelectElement>) => {
    const value = event.target.value
    const avatar: Avatar[] = [ 'fixed', 'random' ]
    const maybe = avatar.find(v => v === value)

    if (maybe) {
      props.handleChange(maybe)
    }
  }

  return (
    <select
      className="village--item--setup--val2--select"
      name="avatar"
      onChange={handleChange}
    >
      <option value="fixed">
        {'Fixed Avatar'}
      </option>
      <option value="random">
        {'Random Avatar'}
      </option>
    </select>
  )
}
