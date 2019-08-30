import React from 'react'

const Example = () => {
  const [count, increment] = useCounter(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me
      </button>
    </div>
  )
}


const useCounter = (intialValue) => {
  const [value, setValue] = useState(initialValue)
  return [value, () => setCount(value + 1)]
}
