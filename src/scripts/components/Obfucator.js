import React from 'react'

export default function Obfucator(props) {
  return props.visible ?
    <div id="obfucator" class="obfucator"></div> :
    ''
}
