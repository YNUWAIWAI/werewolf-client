import * as React from 'react'

export const Question: React.FC<{}> = () => (
  <svg
    className="question"
    viewBox="0 0 180 180"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="line"
      d="M60,67c0-13 1-19 8-26c7-9 18-10 28-8c10,2 22,12 22,26c0,14-11,19-15,22c-7,2-10,6-11,11v20m0,12v16"
      strokeWidth="16"
    />
  </svg>
)
Question.displayName = 'Question'
