import React from 'react'
import ReactDOM from 'react-dom'

export default function Prediction(props) {
  return (
    <div id="prediction" class="prediction">
      <div class="hidden" data-state="O"></div>
      <div class="hidden" data-state="Δ"></div>
      <div class="hidden" data-state="X"></div>
      <div class="hidden" data-state="?"></div>
    </div>
  )
}
