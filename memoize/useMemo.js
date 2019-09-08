import React, { useMemo } from 'react'

const Calc = ({ count }) => {
  const result = useMemo(() => (
    doSomeComplexCalc(count)
  ), [count])

  return (
    <h1>Count: {result}</h1>
  )
}
