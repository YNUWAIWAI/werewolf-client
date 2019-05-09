import * as React from 'react'

const polorToRectangular = (cx: number, cy: number, r: number, deg: number): string => {
  return `${cx + (r * Math.cos(deg / 180 * Math.PI))}, ${cy + (r * Math.sin(deg / 180 * Math.PI))}`
}

export default function Star() {
  const cx = 25
  const cy = 25
  const outerR = 23
  const innerR = outerR * Math.cos(72 / 180 * Math.PI) / Math.cos(36 / 180 * Math.PI)

  return (
    <svg
      className="star"
      viewBox={`0 0 ${cx * 2} ${cy * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={`
          ${polorToRectangular(cx, cy, outerR, (36 * 0) - 90)}
          ${polorToRectangular(cx, cy, innerR, (36 * 1) - 90)}
          ${polorToRectangular(cx, cy, outerR, (36 * 2) - 90)}
          ${polorToRectangular(cx, cy, innerR, (36 * 3) - 90)}
          ${polorToRectangular(cx, cy, outerR, (36 * 4) - 90)}
          ${polorToRectangular(cx, cy, innerR, (36 * 5) - 90)}
          ${polorToRectangular(cx, cy, outerR, (36 * 6) - 90)}
          ${polorToRectangular(cx, cy, innerR, (36 * 7) - 90)}
          ${polorToRectangular(cx, cy, outerR, (36 * 8) - 90)}
          ${polorToRectangular(cx, cy, innerR, (36 * 9) - 90)}
          ${polorToRectangular(cx, cy, outerR, 0 - 90)}
        `}
        strokeWidth="1"
      />
    </svg>
  )
}
