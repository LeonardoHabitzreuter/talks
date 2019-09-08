import React, { useCallback } from 'react'

const Calc = ({ count }) => {
  const calc = useCallback(e => doSomeComplexCalc(count, e), [count])

  return (
    <SomeOtherComponent onCalc={calc} />
  )
}
